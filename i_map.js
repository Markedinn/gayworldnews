// 1. GLOBAL SETTINGS & MAP INIT
// document.body.addEventListener("touchmove", (e) => e.preventDefault(), { passive: false });

const map = L.map("map", {
	renderer: L.canvas(),
	zoomSnap: 0.1,
	attributionControl: false,
	zoomControl: false,
	inertia: true,
	inertiaFraction: 0.5,
}).setView([15, 0], 2);

// Add Scale Line (Minimalist)
L.control.scale({ imperial: true, metric: true, position: "bottomleft" }).addTo(map);

const countryNameOverrides = {
	united_republic_of_tanzania: "tanzania",
	congo_the_democratic_republic_of_the: "democratic_republic_of_the_congo",
	gambia_the: "gambia",
	the_gambia: "gambia",
	swaziland: "eswatini",
	guineabissau: "guinea_bissau",
	guinea_bissau: "guinea_bissau",
	sahrawi_arab_democratic_republic: "western_sahara",
	palestine: "palestinian_territories",
	west_bank: "palestinian_territories",
	gaza_strip: "palestinian_territories",
	russian_federation: "russia",
};

function getCleanKey(name) {
	let key = name.toLowerCase().replace(/\s+/g, "_").replace(/[^\w]/g, "");
	return countryNameOverrides[key] || key;
}

// 2. GEOJSON PROCESSING & LOADING
fetch("world.geojson.txt")
	.then((res) => {
		if (!res.ok) throw new Error("File not found!");
		return res.json();
	})
	.then((geo) => {
		const fixedFeatures = [];

		geo.features.forEach((feature) => {
			const rawName = feature.properties.name || feature.properties.ADMIN || "";

			// 1. ANTARCTICA SQUISH
			if (rawName === "Antarctica") {
				feature.geometry.coordinates.forEach((polygon) => {
					polygon[0].forEach((coord) => {
						if (coord[1] < -80) coord[1] = -80;
					});
				});
				fixedFeatures.push(feature);
			}
			// 2. RUSSIA SURGERY
			else if (rawName === "Russia" || rawName === "Russian Federation") {
				const mainRussia = JSON.parse(JSON.stringify(feature));
				const peninsulaPart = JSON.parse(JSON.stringify(feature));
				mainRussia.geometry.coordinates = mainRussia.geometry.coordinates.filter((p) => p[0][0][0] > 0);
				fixedFeatures.push(mainRussia);
				peninsulaPart.geometry.coordinates = peninsulaPart.geometry.coordinates
					.filter((p) => p[0][0][0] < 0)
					.map((p) => p.map((ring) => ring.map((coord) => [coord[0] + 360, coord[1]])));
				if (peninsulaPart.geometry.coordinates.length > 0) fixedFeatures.push(peninsulaPart);
			}
			// 3. FRANCE / GUIANA SPLIT & ISLAND CONSOLIDATION
			else if (rawName === "France" && feature.geometry.type === "MultiPolygon") {
				const mainlandParts = [];
				feature.geometry.coordinates.forEach((polygonCoords) => {
					const lon = polygonCoords[0][0][0];
					if (lon < -30) {
						const guianaPart = JSON.parse(JSON.stringify(feature));
						guianaPart.geometry.type = "Polygon";
						guianaPart.geometry.coordinates = polygonCoords;
						guianaPart.properties.name = "French Guiana";
						guianaPart.properties.ADMIN = "French Guiana";
						fixedFeatures.push(guianaPart);
					} else {
						mainlandParts.push(polygonCoords);
					}
				});
				const cleanFrance = JSON.parse(JSON.stringify(feature));
				cleanFrance.geometry.coordinates = mainlandParts;
				fixedFeatures.push(cleanFrance);
			}
			// 4. EVERY OTHER COUNTRY (This is the part that was missing!)
			else {
				fixedFeatures.push(feature);
			}
		});

		geo.features = fixedFeatures;

		// 3. DRAW MAP & INTERACTIONS
		// 3. DRAW MAP & INTERACTIONS
		L.geoJSON(geo, {
			// --- UPDATED BULLETPROOF FILTER ---
			filter: (f) => {
				const p = f.properties;
				// Check for name in any case, and the ISO code 'ATA'
				const name = (p.name || p.NAME || p.ADMIN || p.admin || "").toLowerCase().trim();
				const id = (p.ISO_A3 || p.ADM0_A3 || "").toUpperCase();

				// If it matches Antarctica or the ATA code, don't draw it
				return name !== "antarctica" && id !== "ATA";
			},

			style: (f) => {
				const props = f.properties;
				const name = props.name || props.ADMIN || "Unknown";

				// 1. Try to find an ID (Checking common GeoJSON property names)
				const id = props.ISO_A3 || props["ISO3166-1-Alpha-3"] || props.ADM0_A3 || "";

				// 2. Determine the key: Try ID first, then fallback to Clean Name
				let key = id ? id.toLowerCase() : getCleanKey(name);

				// 3. Check if your data actually has this ID. If not, try the Name key.
				if (window.globalData && !window.globalData[key]) {
					key = getCleanKey(name);
				}

				const country = window.globalData ? window.globalData[key] : null;
				let status = country ? country.status.toLowerCase() : "gray";

				let color = "#cbd5e1"; // Default Gray
				if (status === "green") color = "#2ecc71";
				else if (status === "amber") color = "#ffeb3b";
				else if (status === "red" || status === "danger") color = "#c0392b";
				else if (status === "ice" || status === "advisory") color = "#cffafe";

				return {
					fillColor: color,
					color: "rgba(255, 255, 255, 0.4)",
					weight: 0.5,
					fillOpacity: 0.6,
					lineJoin: "round",
				};
			},

			onEachFeature: (feature, layer) => {
				const props = feature.properties;
				const name = props.name || props.ADMIN || "Unknown";

				const id = props.ISO_A3 || props["ISO3166-1-Alpha-3"] || props.ADM0_A3 || "";
				let key = id ? id.toLowerCase() : getCleanKey(name);
				if (window.globalData && !window.globalData[key]) {
					key = getCleanKey(name);
				}

				// 1. CALCULATE SIZE (Safely)
				// We look at the "Bounding Box" coordinates provided by the GeoJSON
				let sizeClass = "size-tiny";
				if (feature.geometry && feature.geometry.coordinates) {
					// A very simple way to guess size without crashing:
					// We just count how many coordinate points the country has!
					const complexity = JSON.stringify(feature.geometry.coordinates).length;

					if (complexity > 50000)
						sizeClass = "size-giant"; // Russia, Canada, USA
					else if (complexity > 10000)
						sizeClass = "size-large"; // France, Spain
					else if (complexity > 2000) sizeClass = "size-medium"; // UK, Chile
				}

				// 2. BIND TOOLTIP
				// layer.bindTooltip(name, {
				// 	permanent: true,
				// 	direction: "center",
				// 	className: `country-label ${sizeClass}`,
				// });

				// 3. YOUR NUDGES (Keep these exactly as they are)
				if (key === "united_kingdom" || key === "gbr") {
					setTimeout(() => {
						if (layer.getTooltip()) layer.getTooltip().setLatLng([52.5, -1.5]);
					}, 100);
				} else if (key === "spain" || key === "esp") {
					setTimeout(() => {
						if (layer.getTooltip()) layer.getTooltip().setLatLng([40.4, -3.7]);
					}, 100);
				} else if (key === "portugal" || key === "prt") {
					setTimeout(() => {
						if (layer.getTooltip()) layer.getTooltip().setLatLng([39.5, -8.2]);
					}, 100);
				} else if (key === "france" || key === "fra") {
					setTimeout(() => {
						if (layer.getTooltip()) layer.getTooltip().setLatLng([46.6, 2.2]);
					}, 100);
				} else if (key === "united_states_of_america" || key === "usa") {
					setTimeout(() => {
						if (layer.getTooltip()) layer.getTooltip().setLatLng([39.7, -104.9]);
					}, 100);
				} else if (key === "russia" || key === "rus") {
					setTimeout(() => {
						if (layer.getTooltip()) layer.getTooltip().setLatLng([60.0, 95.0]);
					}, 100);
				} else if (key === "ireland" || key === "irl") {
					setTimeout(() => {
						if (layer.getTooltip()) layer.getTooltip().setLatLng([53.2, -7.8]);
					}, 100);
				}

				// ... (Your mouseover/click code stays here)
				layer.on({
					mouseover: (e) => {
						const cur = e.target;
						const mousePos = e.latlng;
						let displayName = name;

						if (typeof worldTerritories !== "undefined" && worldTerritories[name]) {
							const match = worldTerritories[name].find((t) => mousePos.lat >= t.lat[0] && mousePos.lat <= t.lat[1] && mousePos.lng >= t.lng[0] && mousePos.lng <= t.lng[1]);
							if (match) displayName = `${name} (${match.name})`;
						}

						if (displayName === name) {
							const islandName = props.name_long || props.NAME_1 || props.province;
							if (islandName && islandName !== name) displayName = `${name} (${islandName})`;
						}

						if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) cur.bringToFront();
						cur.setStyle({ fillOpacity: 0.7 });
						if (cur._path) cur._path.style.filter = "drop-shadow(0px 0px 8px rgba(255,255,255,0.5))";

						hoverBox.innerText = displayName;
						hoverBox.style.display = "block";

						// Position for touch immediately
						if (e.originalEvent && e.originalEvent.touches) {
							const touch = e.originalEvent.touches[0];
							hoverBox.style.left = touch.clientX + "px";
							hoverBox.style.top = touch.clientY - 60 + "px";
						}
					},
					mousemove: (e) => {
						if (e.originalEvent && !e.originalEvent.touches) {
							hoverBox.style.left = e.originalEvent.clientX + 15 + "px";
							hoverBox.style.top = e.originalEvent.clientY - 35 + "px";
						}
					},
					mouseout: (e) => {
						// Only hide on mouseout if it's NOT a touch device
						// This keeps the name visible on tablets after tapping
						if (e.originalEvent && e.originalEvent.pointerType !== "touch" && !e.originalEvent.touches) {
							const geojsonLayer = e.target._eventParents;
							Object.values(geojsonLayer)[0].resetStyle(e.target);
							if (e.target._path) e.target._path.style.filter = "none";
							hoverBox.style.display = "none";
						}
					},
					click: (e) => {
						// Detect if this was a touch interaction
						const isTouch = e.originalEvent.pointerType === "touch" || e.originalEvent.touches;

						// If it's a touch and the box isn't already showing THIS country, just show the name
						if (isTouch && hoverBox.getAttribute("data-active") !== key) {
							hoverBox.setAttribute("data-active", key);
							// Ensure it's visible (the mouseover usually does this, but we're being safe)
							hoverBox.style.display = "block";
							return;
						}

						// If it's a mouse click, or the second tap on mobile/tablet, navigate
						const countryData = window.globalData ? window.globalData[key] : null;
						window.location.href = countryData?.path ? countryData.path : `country.html?c=${key}`;
					},
				});
			},
		}).addTo(map);
	})
	.catch((err) => console.error("MAP ERROR:", err));

// 4. ZOOM LOGIC (Labels & Branding)
map.on("zoomend", function () {
	const currentZoom = map.getZoom();
	const mapContainer = document.getElementById("map");
	const heroHeader = document.getElementById("map-hero-branding");
	const body = document.body;

	if (currentZoom >= 4) mapContainer.classList.add("zoom-active");
	else mapContainer.classList.remove("zoom-active");

	if (currentZoom >= 1 && heroHeader) {
		heroHeader.classList.add("hero-hidden");
		body.classList.add("user-is-zoomed");
	} else if (heroHeader) {
		heroHeader.classList.remove("hero-hidden");
		body.classList.remove("user-is-zoomed");
	}
});

// 5. UI TOGGLES & EVENT LISTENERS
function toggleMenu() {
	document.getElementById("sideMenu").classList.toggle("open");
}

function toggleDesktopMenu() {
	const slider = document.getElementById("desktopSlider");
	if (slider) slider.classList.toggle("active");
}

function toggleMobileLegend() {
	const content = document.getElementById("mobileLegendContent");
	const sideMenu = document.getElementById("sideMenu");
	if (content) content.classList.toggle("show");
	if (sideMenu?.classList.contains("open")) sideMenu.classList.remove("open");
}

function toggleMobileLegend(event) {
	// If you pass 'event' from the HTML, this stops the 'flash'
	if (event) event.stopPropagation();

	const content = document.getElementById("mobileLegendContent");
	content.classList.toggle("show");
}

document.addEventListener("click", (e) => {
	const sideMenu = document.getElementById("sideMenu");
	const menuToggle = document.querySelector(".menu-toggle");
	const legendDropdown = document.querySelector(".mobile-legend-dropdown");

	// Close Side Menu
	if (sideMenu?.classList.contains("open") && !sideMenu.contains(e.target) && !menuToggle.contains(e.target)) {
		sideMenu.classList.remove("open");
	}
	// Close Legend
	if (legendDropdown && !legendDropdown.contains(e.target)) {
		document.getElementById("mobileLegendContent")?.classList.remove("show");
	}
	// Close Desktop Slider
	if (desktopSlider?.classList.contains("active") && !desktopSlider.contains(e.target) && !desktopToggle?.contains(e.target)) {
		desktopSlider.classList.remove("active");
	}
});

document.addEventListener("DOMContentLoaded", function () {
	const now = new Date();
	const options = { year: "numeric", month: "long", day: "numeric" };
	const dateString = now.toLocaleDateString("en-US", options);

	// Target the mobile ID
	const mobileEl = document.getElementById("last-updated-mobile");
	if (mobileEl) mobileEl.textContent = dateString;

	// Target the desktop ID
	const desktopEl = document.getElementById("last-updated-desktop");
	if (desktopEl) desktopEl.textContent = dateString;
});

map.on("zoomend", function () {
	const currentZoom = map.getZoom();
	const labels = document.querySelectorAll(".country-label");

	labels.forEach((label) => {
		// If we are zoomed out (Level 2 or less), hide the names
		// If we are zoomed in (Level 3 or more), show them
		if (currentZoom <= 2.5) {
			label.style.opacity = "0";
		} else {
			label.style.opacity = "1";
		}
	});
});

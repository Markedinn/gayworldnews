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
		L.geoJSON(geo, {
			filter: (f) => f.properties.name !== "Antarctica",
			style: (f) => {
				const name = f.properties.name || f.properties.ADMIN || "Unknown";
				const key = getCleanKey(name);
				const country = window.globalData ? window.globalData[key] : null;
				let status = country ? country.status.toLowerCase() : "gray";

				let color = "#cbd5e1"; // Gray
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
				const name = feature.properties.name || feature.properties.ADMIN || "Unknown";
				const key = getCleanKey(name);

				// 1. Bind the tooltip once
				layer.bindTooltip(name, { permanent: true, direction: "center", className: "country-label" });

				// 2. Handle specific nudges
				if (key === "united_kingdom") {
					setTimeout(() => {
						if (layer.getTooltip()) {
							// London-centric positioning
							layer.getTooltip().setLatLng([52.5, -1.5]);
						}
					}, 100);
				} else if (key === "spain") {
					setTimeout(() => {
						if (layer.getTooltip()) {
							// Centered over Madrid, away from North Africa/Canaries
							layer.getTooltip().setLatLng([40.4, -3.7]);
						}
					}, 100);
				} else if (key === "timor_leste") {
					setTimeout(() => {
						if (layer.getTooltip()) {
							layer.getTooltip().setLatLng([-8.6, 125.8]); // Centers it over the capital, Dili
						}
					}, 100);
				}

				layer.on({
					mouseover: (e) => {
						const cur = e.target;
						const feature = cur.feature;
						const mousePos = e.latlng; // The exact coordinate under your mouse

						let displayName = name;

						// 1. MASTER LOOKUP (Searching worldTerritories)
						// Checks if the country being hovered has territories defined in i_territories.js
						if (typeof worldTerritories !== "undefined" && worldTerritories[name]) {
							const match = worldTerritories[name].find((t) => mousePos.lat >= t.lat[0] && mousePos.lat <= t.lat[1] && mousePos.lng >= t.lng[0] && mousePos.lng <= t.lng[1]);
							if (match) {
								displayName = `${name} (${match.name})`;
							}
						}

						// 2. BACKUP: GEOJSON PROPERTY CHECK
						// If no manual match was found, we check the GeoJSON metadata
						if (displayName === name) {
							const islandName = feature.properties.name_long || feature.properties.NAME_1 || feature.properties.province;

							if (islandName && islandName !== name) {
								displayName = `${name} (${islandName})`;
							}
						}

						// --- Visual Effects ---
						if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) cur.bringToFront();
						cur.setStyle({ fillOpacity: 0.7 });

						if (cur._path) cur._path.style.filter = "drop-shadow(0px 0px 8px rgba(255,255,255,0.5))";

						hoverBox.innerText = displayName;
						hoverBox.style.display = "block";
					},
					mousemove: (e) => {
						hoverBox.style.left = e.originalEvent.clientX + 15 + "px";
						hoverBox.style.top = e.originalEvent.clientY - 35 + "px";
					},
					mouseout: (e) => {
						const geojsonLayer = e.target._eventParents;
						Object.values(geojsonLayer)[0].resetStyle(e.target);
						if (e.target._path) e.target._path.style.filter = "none";
						hoverBox.style.display = "none";
					},
					click: () => {
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

	if (currentZoom >= 3) mapContainer.classList.add("zoom-active");
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

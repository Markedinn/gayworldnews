// 1. GLOBAL SETTINGS & MAP INIT
window.addEventListener("load", function () {
  setTimeout(function () {
    const map = L.map("map", {
      renderer: L.canvas(),
      zoomSnap: 0.1,
      attributionControl: false,
      zoomControl: false,
      inertia: true,
      inertiaFraction: 0.5,
    }).setView([15, 0], 2);

    const hoverBox = document.getElementById("hoverBox") || document.createElement("div");
    if (!document.getElementById("hoverBox")) {
      hoverBox.id = "hoverBox";
      hoverBox.className = "hover-box";
      document.body.appendChild(hoverBox);
    }

    function toggleMenu() {
      const sideMenu = document.getElementById("sideMenu");
      if (sideMenu) sideMenu.classList.toggle("open");
    }

    function toggleMobileLegend(event) {
      if (event) event.stopPropagation();
      const content = document.getElementById("mobileLegendContent");
      if (content) content.classList.toggle("show");
    }

    document.addEventListener("click", (e) => {
      const sideMenu = document.getElementById("sideMenu");
      const menuToggle = document.querySelector(".menu-toggle");
      const legendDropdown = document.querySelector(".mobile-legend-dropdown");

      if (sideMenu?.classList.contains("open") && !sideMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        sideMenu.classList.remove("open");
      }

      if (legendDropdown && !legendDropdown.contains(e.target)) {
        document.getElementById("mobileLegendContent")?.classList.remove("show");
      }
    });

    L.control.scale({ imperial: true, metric: true, position: "bottomleft" }).addTo(map);

    const countryNameOverrides = {
      united_states_of_america: "united_states",
      america: "united_states",
      usa: "united_states",
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

          if (rawName === "Antarctica") {
            feature.geometry.coordinates.forEach((polygon) => {
              polygon[0].forEach((coord) => {
                if (coord[1] < -80) coord[1] = -80;
              });
            });
            fixedFeatures.push(feature);
          } else if (rawName === "Russia" || rawName === "Russian Federation") {
            const mainRussia = JSON.parse(JSON.stringify(feature));
            const peninsulaPart = JSON.parse(JSON.stringify(feature));
            mainRussia.geometry.coordinates = mainRussia.geometry.coordinates.filter((p) => p[0][0][0] > 0);
            fixedFeatures.push(mainRussia);
            peninsulaPart.geometry.coordinates = peninsulaPart.geometry.coordinates
              .filter((p) => p[0][0][0] < 0)
              .map((p) => p.map((ring) => ring.map((coord) => [coord[0] + 360, coord[1]])));
            if (peninsulaPart.geometry.coordinates.length > 0) fixedFeatures.push(peninsulaPart);
          } else if (rawName === "France" && feature.geometry.type === "MultiPolygon") {
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
                maintext = mainlandParts.push(polygonCoords);
              }
            });
            const cleanFrance = JSON.parse(JSON.stringify(feature));
            cleanFrance.geometry.coordinates = mainlandParts;
            fixedFeatures.push(cleanFrance);
          } else {
            fixedFeatures.push(feature);
          }
        });

        geo.features = fixedFeatures;

        // 3. DRAW MAP & INTERACTIONS
        L.geoJSON(geo, {
          filter: (f) => {
            const p = f.properties;
            const name = (p.name || p.NAME || p.ADMIN || p.admin || "").toLowerCase().trim();
            const id = (p.ISO_A3 || p.ADM0_A3 || "").toUpperCase();
            return name !== "antarctica" && id !== "ATA";
          },

          style: (f) => {
            const props = f.properties;
            const name = props.name || props.ADMIN || "Unknown";
            const id = props.ISO_A3 || props["ISO3166-1-Alpha-3"] || props.ADM0_A3 || "";
            let key = id ? id.toLowerCase() : getCleanKey(name);

            if (window.globalData && !window.globalData[key]) {
              key = getCleanKey(name);
            }

            const country = window.globalData ? window.globalData[key] : null;
            let status = country ? country.status.toLowerCase() : "gray";

            let color = "#cbd5e1";
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

            let sizeClass = "size-tiny";
            if (feature.geometry && feature.geometry.coordinates) {
              const complexity = JSON.stringify(feature.geometry.coordinates).length;
              if (complexity > 50000) sizeClass = "size-giant";
              else if (complexity > 10000) sizeClass = "size-large";
              else if (complexity > 2000) sizeClass = "size-medium";
            }

            layer.on({
              mouseover: (e) => {
                const cur = e.target;
                const mousePos = e.latlng;
                let displayName = name;

                if (typeof worldTerritories !== "undefined" && worldTerritories[name]) {
                  const match = worldTerritories[name].find((t) => mousePos.lat >= t.lat[0] && mousePos.lat <= t.lat[1] && mousePos.lng >= t.lng[0] && mousePos.lng <= t.lng[1]);
                  if (match) displayName = match.name;
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
                if (e.originalEvent && e.originalEvent.pointerType !== "touch" && !e.originalEvent.touches) {
                  const geojsonLayer = e.target._eventParents;
                  Object.values(geojsonLayer)[0].resetStyle(e.target);
                  if (e.target._path) e.target._path.style.filter = "none";
                  hoverBox.style.display = "none";
                }
              },
              // SMART ENVIRONMENTAL ROUTING BLOCK
              click: (e) => {
                const isTouch = e.originalEvent.pointerType === "touch" || e.originalEvent.touches;

                if (isTouch && hoverBox.getAttribute("data-active") !== key) {
                  hoverBox.setAttribute("data-active", key);
                  hoverBox.style.display = "block";
                  return;
                }

                const countryData = window.globalData ? window.globalData[key] : null;

                if (countryData?.path) {
                  // Detect local live-server simulation vs live deployment
                  const isLocal = window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost" || window.location.protocol === "file:";

                  const cleanPath = countryData.path.replace(/^\//, "");

                  if (isLocal) {
                    // Force file system compatibility for previewing local files
                    window.location.href = "/" + cleanPath + ".html";
                  } else {
                    // Live asset production delivery without extensions
                    window.location.href = "/" + cleanPath;
                  }
                } else {
                  const toast = document.createElement("div");
                  toast.innerText = `${countryData?.name || name} guide coming soon!`;

                  toast.style.position = "fixed";
                  toast.style.bottom = "100px";
                  toast.style.left = "50%";
                  toast.style.transform = "translateX(-50%)";
                  toast.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
                  toast.style.color = "#ffffff";
                  toast.style.padding = "12px 24px";
                  toast.style.borderRadius = "30px";
                  toast.style.fontSize = "0.9rem";
                  toast.style.fontFamily = "sans-serif";
                  toast.style.zIndex = "99999";
                  toast.style.boxShadow = "0px 4px 12px rgba(0, 0, 0, 0.3)";
                  toast.style.transition = "opacity 0.4s ease";
                  toast.style.pointerEvents = "none";

                  document.body.appendChild(toast);

                  setTimeout(() => {
                    toast.style.opacity = "0";
                    setTimeout(() => toast.remove(), 400);
                  }, 2000);

                  console.log(`No active guide path for ${key}. Map tier display only.`);
                }
              },
            });
          },
        }).addTo(map);
      })
      .catch((err) => console.error("MAP ERROR:", err));
  }, 500);
});

// 5. UI TOGGLES & EVENT LISTENERS
// (Keep remaining toggles and date event updates exactly as they are)
function toggleMenu() {
  const sideMenu = document.getElementById("sideMenu");
  if (sideMenu) sideMenu.classList.toggle("open");
}

function toggleMobileLegend(event) {
  if (event) event.stopPropagation();
  const content = document.getElementById("mobileLegendContent");
  if (content) content.classList.toggle("show");
}

document.addEventListener("click", (e) => {
  const sideMenu = document.getElementById("sideMenu");
  const menuToggle = document.querySelector(".menu-toggle");
  const legendContainer = document.querySelector(".mobile-legend-dropdown");
  const legendContent = document.getElementById("mobileLegendContent");

  if (sideMenu?.classList.contains("open") && !sideMenu.contains(e.target) && !menuToggle?.contains(e.target)) {
    sideMenu.classList.remove("open");
  }

  if (legendContent?.classList.contains("show") && legendContainer && !legendContainer.contains(e.target)) {
    legendContent.classList.remove("show");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const now = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const dateString = now.toLocaleDateString("en-US", options);

  const mobileEl = document.getElementById("last-updated-mobile");
  if (mobileEl) mobileEl.textContent = dateString;

  const desktopEl = document.getElementById("last-updated-desktop");
  if (desktopEl) desktopEl.textContent = dateString;
});

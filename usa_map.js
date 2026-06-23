document.addEventListener("DOMContentLoaded", () => {
  // ==========================================================================
  // 1. INDEPENDENT COLOR & VIEWPORT CONTROLS (Tweak these baseline colors!)
  // ==========================================================================
  const BASE_GREEN = "rgba(22, 247, 22, 0.88)";
  const BASE_AMBER = "rgba(238, 183, 63, 0.93)";
  const BASE_RED = "rgba(200, 0, 0, 0.9)";

  const isMobile = window.innerWidth < 768;
  const initialZoom = isMobile ? 3 : 4;
  const initialCenter = isMobile ? [38.5, -96.0] : [37.8, -96.0];

  // 2. Lock camera panning boundaries cleanly over continental US borders
  const southWest = L.latLng(22.0, -125.0);
  const northEast = L.latLng(50.0, -66.0);
  const usaBounds = L.latLngBounds(southWest, northEast);

  // 3. Initialize the Leaflet Engine with dynamic viewport tracking
  const map = L.map("usa-map", {
    center: initialCenter,
    zoom: initialZoom,
    minZoom: 2,
    maxZoom: 6,
    maxBounds: usaBounds,
    maxBoundsViscosity: 1.0,
    zoomControl: false,
    attributionControl: false,

    // NATIVE PERFORMANCE OPTIMIZATIONS:
    scrollWheelZoom: false /* Stops erratic desktop mouse wheel zooming */,
    dragging: !isMobile /* Direct mobile lock: starts disabled on phones */,
    touchZoom: !isMobile /* Starts multi-touch disabled on phones */,
  });

  // 3.5 NATIVE TWO-FINGER MOBILE SCROLL ENGINE (ZERO PAGESPEED IMPACT)
  if (isMobile) {
    const mapContainer = document.getElementById("usa-map");

    if (mapContainer) {
      mapContainer.addEventListener(
        "touchstart",
        (e) => {
          // If the user puts 2 fingers down, instantly unlock map controls
          if (e.touches.length === 2) {
            map.dragging.enable();
            map.touchZoom.enable();
          } else {
            // 1 finger safely locks the map so the user can scroll past it
            map.dragging.disable();
            map.touchZoom.disable();
          }
        },
        { passive: true },
      );

      // Re-lock the canvas when fingers leave the glass to prevent future scroll traps
      mapContainer.addEventListener(
        "touchend",
        (e) => {
          if (e.touches.length < 2) {
            map.dragging.disable();
            map.touchZoom.disable();
          }
        },
        { passive: true },
      );
    }
  }

  // 4. User interaction loops (hovers, movements, and link generation)
  function onEachStateFeature(feature, layer) {
    layer.on({
      mouseover: (e) => {
        const hoverBox = document.getElementById("hoverBox");
        if (hoverBox && feature.properties) {
          const stateName = feature.properties.name || feature.properties.NAME || "";
          if (stateName) {
            hoverBox.innerHTML = stateName;
            hoverBox.style.display = "block";
          }
        }
      },
      mousemove: (e) => {
        const hoverBox = document.getElementById("hoverBox");
        if (hoverBox) {
          hoverBox.style.left = e.originalEvent.clientX + 15 + "px";
          hoverBox.style.top = e.originalEvent.clientY + 15 + "px";
        }
      },
      mouseout: () => {
        const hoverBox = document.getElementById("hoverBox");
        if (hoverBox) hoverBox.style.display = "none";
      },
      click: () => {
        if (feature.properties) {
          const stateName = feature.properties.name || feature.properties.NAME || "";
          if (stateName) {
            const cleanStateName = stateName.toLowerCase().trim().replace(/\s+/g, "-");

            window.location.href = `/usa/${cleanStateName}.html`;
          }
        }
      },
    });
  }

  // 5. Stream your pasted text coordinate data straight from the root folder
  fetch("usa-states.geojson")
    .then((response) => {
      if (!response.ok) throw new Error("usa-states.geojson data file not found at root level");
      return response.json();
    })
    .then((geoJsonData) => {
      L.geoJSON(geoJsonData, {
        filter: function (feature) {
          if (feature && feature.properties) {
            const stateName = feature.properties.name || feature.properties.NAME || "";
            return stateName !== "Alaska" && stateName !== "Hawaii" && stateName !== "Puerto Rico";
          }
          return false;
        },
        style: function (feature) {
          // TARGETS ONLY THE MAINLAND MAP USING YOUR NEW TOP VARIABLE
          let fillColor = BASE_GREEN;

          if (feature && feature.properties) {
            const stateName = feature.properties.name || feature.properties.NAME || "";
            if (stateName) {
              const stateKey = stateName.toLowerCase().replace(/\s+/g, "_");
              const stateData = window.globalData && window.globalData[stateKey];

              if (stateData && stateData.status === "amber") fillColor = BASE_AMBER;
              if (stateData && stateData.status === "red") fillColor = BASE_RED;
            }
          }

          return {
            fillColor: fillColor,
            weight: 1.5,
            opacity: 1,
            color: "rgba(255,255,255,0.4)",
            fillOpacity: 0.75,
          };
        },
        onEachFeature: onEachStateFeature,
      }).addTo(map);
    })
    .catch((err) => console.error("Map layer rendering blocked: ", err));

  // 6. AUTOMATED COLOR SYNC FOR OUTLYING STACKS
  setTimeout(() => {
    ["alaska", "hawaii"].forEach((stateKey) => {
      const card = document.getElementById(`offshore-${stateKey}`);

      if (card) {
        const svg = card.querySelector(".offshore-svg");
        if (svg) {
          // Default baseline green matching country-card.green
          let syncColor = "rgba(0, 180, 0, 0.9)";

          const stateData = window.globalData && window.globalData[stateKey];
          if (stateData) {
            if (stateData.status === "amber") syncColor = "rgba(223, 157, 16, 0.9)"; // Matches country-card.amber
            if (stateData.status === "red") syncColor = "rgba(200, 0, 0, 0.9)"; // Matches country-card.red
          }

          svg.style.fill = syncColor;
        }
      }
    });
  }, 300);

  // 7. TOAST LIFETIME CONTROLLER
  const toast = document.getElementById("map-toast");
  if (toast) {
    setTimeout(() => {
      toast.classList.add("fade-out");
      setTimeout(() => toast.remove(), 1000);
    }, 4000);
  }
});

window.toggleMenu = function () {
  const sideMenu = document.getElementById("sideMenu");
  const menuToggle = document.querySelector(".menu-toggle");
  if (sideMenu) {
    sideMenu.classList.toggle("open");
    sideMenu.classList.toggle("active");
  }
  if (menuToggle) {
    menuToggle.classList.toggle("open");
    menuToggle.classList.toggle("active");
  }
};

window.toggleMobileLegend = function () {
  const legendContent = document.getElementById("mobileLegendContent");
  if (legendContent) {
    legendContent.classList.toggle("open");
    legendContent.classList.toggle("active");
  }
};

// ==========================================================================
// MAX-POWER BENTO MATRIX COLOR SYNC ENGINE (PRO PRODUCTION)
// ==========================================================================

// 1. Move configuration allocations completely OUTSIDE the loop to save memory
const COLOR_CLASSES = ["green", "amber", "red", "ice"];
const staticCards = document.querySelectorAll("#countryGrid .country-card");

staticCards.forEach((card) => {
  const stateKey = card.getAttribute("data-state");
  if (!stateKey) return;

  const stateData = window.globalData && window.globalData[stateKey];

  if (stateData && stateData.status) {
    // 2. Native V8 Engine Optimization: Strip all classes at once using spread operator (...)
    // This replaces the nested inner .forEach loop entirely
    card.classList.remove(...COLOR_CLASSES);

    // 3. Force-inject the definitive legal/health risk tier
    card.classList.add(stateData.status);
  }
});

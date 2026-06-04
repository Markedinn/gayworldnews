document.addEventListener("DOMContentLoaded", () => {
  const globalInput = document.getElementById("globalSearch");
  const globalResults = document.getElementById("searchResults");
  const targetContinent = document.body.dataset.continent;
  let registriesLoaded = false; // Tracks if data is loaded

  if (globalInput && globalResults) {
    // 1. THE LOADER: Fetches data when the search bar is focused
    globalInput.addEventListener("focus", () => {
      if (!registriesLoaded) {
        const regions = ["africa", "americas", "asia", "europe", "oceania"];
        regions.forEach((region) => {
          const script = document.createElement("script");
          script.src = `/country-info/country-files/${region}-data.js`;
          script.async = true;
          document.head.appendChild(script);
        });
        registriesLoaded = true;
        console.log("Global routing arrays injected on demand.");
      }
    });

    // 2. THE SEARCH: Filters and displays live pages
    globalInput.addEventListener("input", (e) => {
      const value = e.target.value.toLowerCase().trim();
      globalResults.innerHTML = "";

      if (value.length > 0 && typeof globalData !== "undefined") {
        globalResults.style.display = "flex";

        Object.keys(globalData)
          .sort((a, b) => globalData[a].name.localeCompare(globalData[b].name))
          .forEach((key) => {
            const country = globalData[key];
            const matchesSearch = country.name.toLowerCase().startsWith(value);
            const matchesContinent = !targetContinent || country.continent === targetContinent;

            // NEW FILTER: Only show if it matches AND has a path
            if (matchesSearch && matchesContinent && country.path) {
              const link = document.createElement("a");
              link.href = "/" + country.path;

              let s = (country.status || "warning").toLowerCase();
              if (s === "danger" || s === "black") s = "red";

              link.className = `side-country-card ${s}`;
              link.innerHTML = `${country.name}`;
              globalResults.appendChild(link);
            }
          });
      } else {
        globalResults.style.display = "none";
      }
    });
  }
});

// ESC KEY EXIT
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") window.location.replace("https://www.google.com");
});

window.addEventListener("blur", () => {
  document.title = "Google Search";
});

window.addEventListener("focus", () => {
  document.title = "Home";
});

document.querySelector(".exit-btn").addEventListener("click", function (e) {
  e.preventDefault();
  document.title = "Google";
  window.location.replace("https://google.com");
});

document.body.addEventListener("click", (e) => {
  const card = e.target.closest(".country-card");

  if (card && card.getAttribute("href") === "javascript:void(0);") {
    e.preventDefault();

    const span = card.querySelector("span");
    let countryName = "Country";

    if (span && span.childNodes.length > 0) {
      countryName = span.childNodes[0].textContent.trim();
    }

    const toast = document.createElement("div");
    toast.innerText = `${countryName} guide coming soon!`;

    toast.style.position = "fixed";
    toast.style.bottom = "100px";
    toast.style.left = "50%;";
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
  }
});

// ==========================================
// LOCAL DEV ROUTING SHIM (ANCHOR SMART V2)
// Fixes internal links when testing on VS Code.
// Automatically disables on the live Hostinger server.
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  const isLocal = window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost" || window.location.protocol === "file:";

  if (isLocal) {
    document.body.addEventListener("click", (e) => {
      const link = e.target.closest("a");
      if (!link) return;

      const href = link.getAttribute("href");

      // Skip empty links, external sites, and mail protocols
      if (!href || href.startsWith("http") || href.startsWith("mailto:")) return;

      // SCENARIO 1: Link has a hash anchor inside it (e.g., /about#verify-clinics)
      if (href.includes("#")) {
        const [path, hash] = href.split("#");

        // If it's a pure same-page jump link like href="#verify-clinics", do nothing
        if (!path) return;

        e.preventDefault();

        let cleanPath = path;
        if (cleanPath === "/") {
          cleanPath = "/index.html";
        } else {
          cleanPath = cleanPath.replace(/\/$/, "");
          if (!cleanPath.endsWith(".html")) {
            cleanPath += ".html";
          }
        }

        // Stitch the path and anchor back together perfectly
        window.location.href = cleanPath + "#" + hash;
        return;
      }

      // SCENARIO 2: Link is a standard internal page path with no hash tag
      if (href.endsWith(".html")) return;

      e.preventDefault();

      if (href === "/") {
        window.location.href = "/index.html";
        return;
      }

      const cleanHref = href.replace(/\/$/, "");
      window.location.href = cleanHref + ".html";
    });

    console.log("Local Dev Link Shim active: Routing clean URLs to physical files smoothly.");
  }
});

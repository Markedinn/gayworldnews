// --- 1. SETTINGS & HTML ---

const uEqualsUBannerHTML = `
    <a class="u-u-link" href="https://aids.ch/en/safer-sex/protection/undetectable/">
        <div id="u-u-notice" class="u-u-banner-box">
            <h4>💙 STAY SAFE, ENJOY LIFE</h4>
            <p><strong>U=U:</strong> Undetectable = Untransmittable. HIV medicated people live a normal healthy life.</p>
        </div>
    </a>`;

const autoFooterHTML = `
    <footer class="bottom-dock">
        <div class="dev-notice"><span>🚧</span> Site under active development.</div>
        <nav class="bottom-nav">
            <a href="about.html">About</a>
            <a href="legal-overview.html">Legal</a>
            <a href="safety-index.html">Safety</a>
            <a href="culture-hub.html">Culture</a>
        </nav>
    </footer>
`;

// --- 2. INITIALIZATION ---

document.addEventListener("DOMContentLoaded", () => {
	// Check if we are on the Home Page (hero-viewport exists)
	const isHomePage = !!document.querySelector(".hero-viewport");

	// A. FOOTER INJECTION - Only run if not on Home Page (which has its own footer)
	if (!isHomePage && !document.querySelector(".bottom-dock")) {
		document.body.insertAdjacentHTML("beforeend", autoFooterHTML);
	}

	// B. U=U BANNER - Only inject if not already in the HTML
	if (!document.getElementById("u-u-notice")) {
		// On Home Page, maybe we don't want it pushing the Chevron?
		// Or we target a specific area.
		const target = isHomePage ? null : document.querySelector(".main-header");

		if (target) {
			target.insertAdjacentHTML("afterend", uEqualsUBannerHTML);
		}
	}

	// --- 3. LANDING PAGE SEARCH & LIST GENERATION ---

	const globalInput = document.getElementById("globalSearch");
	const globalResults = document.getElementById("searchResults");
	const targetContinent = document.body.dataset.continent; // Grabs "asia", "americas", etc.

	if (globalInput && globalResults) {
		globalInput.addEventListener("input", (e) => {
			const value = e.target.value.toLowerCase().trim();
			globalResults.innerHTML = "";

			if (value.length > 0 && typeof globalData !== "undefined") {
				globalResults.style.display = "grid";

				Object.keys(globalData).forEach((key) => {
					const country = globalData[key];

					// BACK TO THE START: Uses startsWith for that strict beginning match
					const matchesSearch = country.name.toLowerCase().startsWith(value);
					// CONTINENT FILTER: Ensures results match the page region
					const matchesContinent =
						!targetContinent || country.continent === targetContinent;

					if (matchesSearch && matchesContinent) {
						const link = document.createElement("a");
						link.href = `country.html?c=${key}`;
						link.className = "country-card-search";
						link.innerHTML = `<span class="status-dot ${country.status}"></span> ${country.name}`;
						globalResults.appendChild(link);
					}
				});
			} else {
				globalResults.style.display = "none";
			}
		});
	}

	// F. AUTOMATIC COUNTRY LIST (Filtered by Continent)
	const listContainer = document.querySelector(".list-container");

	if (listContainer && typeof globalData !== "undefined") {
		// 1. Identify which continent page we are on
		// This looks for a 'data-continent' attribute on your <body> tag
		const targetContinent = document.body.dataset.continent;

		listContainer.innerHTML = ""; // Clear placeholders

		Object.keys(globalData)
			.sort()
			.forEach((key) => {
				const country = globalData[key];

				// 2. Only show the country if it matches the page's continent
				// Or show all if the page doesn't specify a continent (like a Master List)
				if (!targetContinent || country.continent === targetContinent) {
					const card = document.createElement("a");
					card.href = `country.html?c=${key}`;
					card.className = "country-card-search";
					card.innerHTML = `<span class="status-dot ${country.status}"></span> ${country.name}`;
					listContainer.appendChild(card);
				}
			});
	}

	// E. COUNTRY PAGE DATA
	const urlParams = new URLSearchParams(window.location.search);
	const countryKey = urlParams.get("c")?.toLowerCase();
	if (countryKey && typeof globalData !== "undefined") {
		const country = globalData[countryKey];
		if (country) {
			const fields = ["country-name", "legal-status", "healthcare", "posture"];
			fields.forEach((field) => {
				const el = document.getElementById(field);
				if (el)
					el.innerText = country[field.split("-")[0]] || country[field] || "";
			});
		}
	}
});

// ESC KEY EXIT
document.addEventListener("keydown", (e) => {
	if (e.key === "Escape") performQuickExit();
});
function performQuickExit() {
	window.location.replace("https://www.youtube.com/");
}

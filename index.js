// --- 1. INITIALIZATION ---

document.addEventListener("DOMContentLoaded", () => {
	// We removed the footer/banner injection because they are now hard-coded in your HTML.

	// --- 2. LANDING PAGE SEARCH ---
	const globalInput = document.getElementById("globalSearch");
	const globalResults = document.getElementById("searchResults");
	const targetContinent = document.body.dataset.continent;

	if (globalInput && globalResults) {
		globalInput.addEventListener("input", (e) => {
			const value = e.target.value.toLowerCase().trim();
			globalResults.innerHTML = "";

			if (value.length > 0 && typeof globalData !== "undefined") {
				globalResults.style.display = "grid";

				Object.keys(globalData).forEach((key) => {
					const country = globalData[key];
					const matchesSearch = country.name.toLowerCase().startsWith(value);
					const matchesContinent =
						!targetContinent || country.continent === targetContinent;

					if (matchesSearch && matchesContinent) {
						const link = document.createElement("a");
						link.href = `country.html?c=${key}`;
						link.className = "country-card-search";
						// Using the status classes we consolidated in the CSS
						link.innerHTML = `<span class="status-dot ${country.status.toLowerCase()}"></span> ${country.name}`;
						globalResults.appendChild(link);
					}
				});
			} else {
				globalResults.style.display = "none";
			}
		});
	}

	// --- 3. AUTOMATIC COUNTRY LIST (For Continent Pages) ---
	const listContainer = document.querySelector(".list-container");

	if (listContainer && typeof globalData !== "undefined") {
		const targetContinent = document.body.dataset.continent;
		listContainer.innerHTML = "";

		Object.keys(globalData)
			.sort()
			.forEach((key) => {
				const country = globalData[key];
				if (!targetContinent || country.continent === targetContinent) {
					const card = document.createElement("a");
					card.href = `country.html?c=${key}`;
					card.className = "country-card-search";
					card.innerHTML = `<span class="status-dot ${country.status.toLowerCase()}"></span> ${country.name}`;
					listContainer.appendChild(card);
				}
			});
	}
});

// --- 4. UTILITIES ---

// ESC KEY EXIT
document.addEventListener("keydown", (e) => {
	if (e.key === "Escape") performQuickExit();
});

function performQuickExit() {
	window.location.replace("https://www.youtube.com");
}

function snapToContent() {
	const content = document.querySelector(".content-viewport");
	if (content) {
		content.scrollIntoView({ behavior: "smooth", block: "start" });
	}
}

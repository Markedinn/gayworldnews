document.addEventListener("DOMContentLoaded", () => {
	const globalInput = document.getElementById("globalSearch");
	const globalResults = document.getElementById("searchResults");
	const targetContinent = document.body.dataset.continent;

	if (globalInput && globalResults) {
		globalInput.addEventListener("input", (e) => {
			const value = e.target.value.toLowerCase().trim();
			globalResults.innerHTML = "";

			if (value.length > 0 && typeof globalData !== "undefined") {
				globalResults.style.display = "flex";

				// SORTING SEARCH RESULTS
				Object.keys(globalData)
					.sort((a, b) => globalData[a].name.localeCompare(globalData[b].name))
					.forEach((key) => {
						const country = globalData[key];
						const matchesSearch = country.name.toLowerCase().startsWith(value);
						const matchesContinent = !targetContinent || country.continent === targetContinent;

						if (matchesSearch && matchesContinent) {
							const link = document.createElement("a");

							// MANUAL OVERRIDE FOR HUMAN PAGES (Add others here as you build them)
							if (key === "albania") {
								link.href = `europe/albania.html`;
							} else {
								link.href = `country.html?c=${key}`;
							}

							let s = (country.status || "warning").toLowerCase();
							if (s === "danger" || s === "black") s = "red";

							link.className = `country-card search-item-card ${s}`;
							link.innerHTML = `${country.name}`;
							globalResults.appendChild(link);
						}
					});
			} else {
				globalResults.style.display = "none";
			}
		});
	}
}); // <--- This now correctly closes the DOMContentLoaded function

// ESC KEY EXIT (Lives outside the DOM listener so it's always ready)
document.addEventListener("keydown", (e) => {
	if (e.key === "Escape") window.location.replace("https://www.youtube.com");
});

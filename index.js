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
							link.href = `country.html?c=${key}`;

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

	// --- AUTOMATIC COUNTRY LIST (FIXED & ALPHABETICAL) ---
	const listContainer = document.getElementById("countryGrid");
	if (listContainer) {
		let homeAttempts = 0;
		const waitForHomeData = setInterval(() => {
			homeAttempts++;

			if (typeof globalData !== "undefined" && Object.keys(globalData).length > 0) {
				clearInterval(waitForHomeData);
				listContainer.innerHTML = "";

				// THIS IS WHERE THE ALPHABETICAL SORT HAPPENS
				Object.keys(globalData)
					.sort((a, b) => globalData[a].name.localeCompare(globalData[b].name))
					.forEach((key) => {
						const country = globalData[key];
						if (!targetContinent || country.continent === targetContinent) {
							const card = document.createElement("a");
							card.href = `country.html?c=${key}`;

							let s = (country.status || "warning").toLowerCase();
							if (s === "danger" || s === "black") s = "red";

							card.className = `country-card ${s}`;
							card.innerHTML = `${country.name}`;
							listContainer.appendChild(card);
						}
					});
			}

			if (homeAttempts > 50) {
				clearInterval(waitForHomeData);
				console.error("Home Data failed to load.");
			}
		}, 100);
	}
});

// ESC KEY EXIT
document.addEventListener("keydown", (e) => {
	if (e.key === "Escape") window.location.replace("https://www.youtube.com");
});

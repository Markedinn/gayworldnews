document.addEventListener("DOMContentLoaded", () => {
	// Keep this! It identifies the continent (e.g., "africa")
	const targetContinent = document.body.dataset.continent;

	// --- AUTOMATIC COUNTRY LIST (FIXED & ALPHABETICAL) ---
	const listContainer = document.getElementById("countryGrid");
	if (listContainer) {
		let homeAttempts = 0;
		const waitForHomeData = setInterval(() => {
			homeAttempts++;

			if (typeof globalData !== "undefined" && Object.keys(globalData).length > 0) {
				clearInterval(waitForHomeData);
				listContainer.innerHTML = "";

				// BUILD THE GRID
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
							// Add <h3> here if you want the specific bento-text style
							card.innerHTML = `<h3>${country.name}</h3>`;
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

document.addEventListener("DOMContentLoaded", () => {
	const grid = document.getElementById("countryGrid");
	const currentContinent = document.body.dataset.continent; // e.g., "africa"

	// Wait for the data to load from your separate files
	const waitForData = setInterval(() => {
		if (typeof globalData !== "undefined" && Object.keys(globalData).length > 0) {
			clearInterval(waitForData);
			renderContinentGrid();
		}
	}, 100);

	function renderContinentGrid() {
		if (!grid) return;
		grid.innerHTML = ""; // Clear "Loading..." message

		// 1. Sort keys alphabetically
		Object.keys(globalData)
			.sort()
			.forEach((key) => {
				const country = globalData[key];

				// 2. Only show countries that match this continent
				if (country.continent === currentContinent) {
					const card = document.createElement("a");
					card.href = `country.html?c=${key}`;
					card.className = `country-card ${country.status.toLowerCase()}`;

					// 3. THIS IS VITAL: Add the data-name attribute so your filterList() works
					card.setAttribute("data-name", country.name);

					card.innerHTML = `<h3>${country.name}</h3>`;
					grid.appendChild(card);
				}
			});
	}
});

function filterList() {
	// 1. Get the current value and trim any accidental spaces
	let input = document.getElementById("countrySearch").value.toLowerCase().trim();

	// 2. Get all the physical cards on the page
	let cards = document.getElementsByClassName("country-card");

	for (let i = 0; i < cards.length; i++) {
		// 3. Pull the name from the data-name attribute
		let name = cards[i].getAttribute("data-name").toLowerCase();

		// 4. Check if the country name starts with the input string
		if (name.startsWith(input)) {
			cards[i].style.display = "flex";
		} else {
			cards[i].style.display = "none";
		}
	}
}

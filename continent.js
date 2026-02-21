function filterList() {
	// 1. Get the current value and trim any accidental spaces
	let input = document
		.getElementById("countrySearch")
		.value.toLowerCase()
		.trim();

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

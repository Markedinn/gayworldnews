// country-loader.js
window.addEventListener("DOMContentLoaded", () => {
	// 1. Get the country slug from the URL (?c=slug)
	const params = new URLSearchParams(window.location.search);
	const slug = params.get("c");

	// 2. Check if the country exists in our data.js
	const country = globalData[slug];

	if (country) {
		// 3. Fill in the HTML with the data
		document.getElementById(
			"dynamic-title"
		).innerText = `${country.name} - Safety & News`;
		document.getElementById("country-name").innerText = country.name;
		document.getElementById("legal-info").innerText = country.legal;
		document.getElementById("health-info").innerText = country.health;

		// Update the status badge
		const dot = document.getElementById("status-dot");
		const text = document.getElementById("status-text");

		dot.className = `status-dot ${country.status}`;
		text.innerText = `Travel Status: ${country.status.toUpperCase()}`;
	} else {
		// If someone types a fake country in the URL
		document.getElementById("country-name").innerText =
			"Country Awaiting Updates";
		document.getElementById("legal-info").innerText =
			"This Page Will Be Up And Running Soon";
	}
});

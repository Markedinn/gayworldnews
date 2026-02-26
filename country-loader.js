window.addEventListener("DOMContentLoaded", () => {
	// SAFETY CHECK: Only run this script if the country detail area exists
	const displayArea = document.getElementById("info-display-area");
	if (!displayArea) return;

	const params = new URLSearchParams(window.location.search);
	const slug = params.get("c");

	if (typeof globalData !== "undefined" && slug) {
		// 1. Case-Insensitive Lookup
		const searchKey = slug.toLowerCase();
		const actualKey = Object.keys(globalData).find(
			(key) => key.toLowerCase() === searchKey,
		);

		if (actualKey) {
			const countryData = globalData[actualKey];

			// 2. Update Header & Title
			document.getElementById("country-name").innerText = countryData.name;
			document.title = `${countryData.name} | Safety Guide`;

			// 3. Update Status Badge
			const dot = document.getElementById("status-dot");
			const statusText = document.getElementById("status-text");
			const s = countryData.status
				? countryData.status.toLowerCase()
				: "warning";

			// FIX: Changed from 'status-dot' to 'status-dot-country' to match your CSS
			dot.className = `status-dot-country ${s}`;
			statusText.innerText = s.toUpperCase() + " ADVISORY";

			// 4. Inject the Grouped Accordion structure
			displayArea.innerHTML = `
                <!-- GROUP 1: LEGAL & SAFETY -->
                <details class="glass-card news-accordion">
                    <summary>
                        <h3>⚖ Legal Status & Safety</h3>
                    </summary>
                    <div class="news-content-expanded">
                        <div class="rainbow-line mini-line"></div>
                        <p id="legal-info">${countryData.legal || "Information pending."}</p> 
                    </div>
                </details>

                <!-- GROUP 2: TRAVEL & CULTURE -->
                <details class="glass-card news-accordion">
                    <summary>
                        <h3>✈️ Travel & Culture</h3>
                    </summary>
                    <div class="news-content-expanded">
                        <div class="rainbow-line mini-line"></div>
                        <p id="travel-info">${countryData.travel || "Data coming soon."}</p>
                        <p id="culture-info" style="margin-top:15px; border-top: 1px solid rgba(36,64,142,0.1); padding-top:15px;">
                            ${countryData.culture || ""}
                        </p>
                    </div>
                </details>

                <!-- GROUP 3: HEALTH & CARE -->
                <details class="glass-card news-accordion">
                    <summary>
                        <h3>🏥 Health & Care</h3>
                    </summary>
                    <div class="news-content-expanded">
                        <div class="rainbow-line mini-line"></div>
                        <p id="health-info">${countryData.health || "Information pending."}</p>
                    </div>
                </details>

                <!-- GROUP 4: SECURITY ENVIRONMENT -->
                <details class="glass-card news-accordion">
                    <summary>
                        <h3>🛡 Security Environment</h3>
                    </summary>
                    <div class="news-content-expanded">
                        <div class="rainbow-line mini-line"></div>
                        <p>${countryData.posture || "General monitoring advised."}</p>
                    </div>
                </details>
            `;
		} else {
			// Handle "Country Not Found"
			document.getElementById("country-name").innerText =
				"Country Awaiting Updates";
			displayArea.innerHTML = `<p style="text-align:center; color:#24408e;">Detailed data for this region is being verified by our team.</p>`;
		}
	}
});

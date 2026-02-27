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

			// 3. Update Status Badge & Apply Tint
			const dot = document.getElementById("status-dot");
			const statusText = document.getElementById("status-text");
			const s = countryData.status
				? countryData.status.toLowerCase()
				: "warning";

			// FIX: Change classes on the dot
			dot.className = `status-dot-country ${s}`;
			statusText.innerText = s.toUpperCase() + " ADVISORY";

			// NEW: Apply a tint class to the display area so all children inherit the 'vibe'
			// This will look for 'safe', 'warning', or 'danger'
			displayArea.className = `info-display-container status-${s}`;

			// 4. Inject the Grouped Accordion structure
			displayArea.innerHTML = `
                <details class="glass-card news-accordion ${s}">
                    <summary>
                        <h3>⚖ Legal Status & Safety</h3>
                    </summary>
                    <div class="news-content-expanded">
                        <div class="rainbow-line mini-line"></div>
                        <p id="legal-info">${countryData.legal || "Information pending."}</p> 
                    </div>
                </details>

                <details class="glass-card news-accordion ${s}">
                    <summary>
                        <h3>✈️ Travel & Culture</h3>
                    </summary>
                    <div class="news-content-expanded">
                        <div class="rainbow-line mini-line"></div>
                        <p id="travel-info">${countryData.travel || "Data coming soon."}</p>
                        <p id="culture-info" style="margin-top:15px; border-top: 1px solid rgba(255,255,255,0.1); padding-top:15px;">
                            ${countryData.culture || ""}
                        </p>
                    </div>
                </details>

                <details class="glass-card news-accordion ${s}">
                    <summary>
                        <h3>🏥 Health & Care</h3>
                    </summary>
                    <div class="news-content-expanded">
                        <div class="rainbow-line mini-line"></div>
                        <p id="health-info">${countryData.health || "Information pending."}</p>
                    </div>
                </details>

                <details class="glass-card news-accordion ${s}">
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
			// Handle "Country Not Found" with updated colors
			document.getElementById("country-name").innerText =
				"Country Awaiting Updates";
			displayArea.innerHTML = `
        <div class="glass-card" style="padding: 20px; text-align: center;">
            <p style="color:white; opacity: 0.8;">
                Detailed data for this region is currently being verified by our team.
            </p>
        </div>`;
		}
	}
});

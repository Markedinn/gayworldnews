window.addEventListener("DOMContentLoaded", () => {
	const displayArea = document.getElementById("info-display-area");
	if (!displayArea) return;

	const params = new URLSearchParams(window.location.search);
	const rawC = params.get("c") || "";

	// Clean the URL (lowercases and handles URL encoding)
	const slug = decodeURIComponent(rawC.replace(/\+/g, " ")).trim().toLowerCase();

	if (!slug) return;

	let attempts = 0;
	const waitForData = setInterval(() => {
		attempts++;

		if (typeof globalData !== "undefined" && Object.keys(globalData).length > 0) {
			clearInterval(waitForData);

			// CONVERT: Turn dashes or spaces from the URL into underscores
			const underscoredKey = slug.replace(/[\s-]/g, "_");
			const countryData = globalData[underscoredKey];

			if (countryData) {
				// FORCE RED: Keep it simple as requested
				let s = (countryData.status || "warning").toLowerCase();
				if (s === "danger" || s === "black") s = "red";

				document.getElementById("country-name").innerText = countryData.name;
				document.title = `${countryData.name} | Safety Guide`;

				const dot = document.getElementById("status-dot");
				const statusText = document.getElementById("status-text");
				if (dot) dot.className = `status-dot-country ${s}`;
				if (statusText) statusText.innerText = s.toUpperCase() + " ADVISORY";

				displayArea.className = `info-display-container status-${s}`;

				displayArea.innerHTML = `
                    <details class="glass-card news-accordion ${s}">
                        <summary><h3>⚖️ Legal Status</h3></summary>
                        <div class="news-content-expanded">
                            <div class="rainbow-line mini-line"></div>
                            <p>${countryData.legal || "Information pending."}</p> 
                        </div>
                    </details>
                    <details class="glass-card news-accordion ${s}">
                        <summary><h3>🏖️ Travel</h3></summary>
                        <div class="news-content-expanded">
                            <div class="rainbow-line mini-line"></div>
                            <p>${countryData.travel || "Data coming soon."}</p>
                            <p style="margin-top:15px; border-top: 1px solid rgba(255,255,255,0.1); padding-top:15px;">
                                ${countryData.culture || ""}
                            </p>
                        </div>
                    </details>
                    <details class="glass-card news-accordion ${s}">
                        <summary><h3>🚑 Health</h3></summary>
                        <div class="news-content-expanded">
                            <div class="rainbow-line mini-line"></div>
                            <p>${countryData.health || "Information pending."}</p>
                        </div>
                    </details>
                    <details class="glass-card news-accordion ${s}">
                        <summary><h3>🛡️ Safety</h3></summary>
                        <div class="news-content-expanded">
                            <div class="rainbow-line mini-line"></div>
                            <p>${countryData.posture || "General monitoring advised."}</p>
                        </div>
                    </details>
					<details class="glass-card news-accordion ${s}">
                        <summary><h3>📚 Sources</h3></summary>
                        <div class="news-content-expanded">
                            <div class="rainbow-line mini-line"></div>
                            <p>${countryData.sources || "Information pending."}</p>
                        </div>
                    </details>
                `;
			} else {
				renderNotFound();
			}
		}
		if (attempts > 20) clearInterval(waitForData);
	}, 100);

	function renderNotFound() {
		document.getElementById("country-name").innerText = "Update in Progress";
		displayArea.innerHTML = `<div class="glass-card" style="padding: 20px; text-align: center;"><p style="color:white; opacity: 0.8;">Detailed data is being verified.</p></div>`;
	}
});

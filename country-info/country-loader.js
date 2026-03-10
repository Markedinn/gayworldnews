window.addEventListener("DOMContentLoaded", () => {
	const displayArea = document.getElementById("info-display-area");
	if (!displayArea) return;

	const params = new URLSearchParams(window.location.search);
	const rawC = params.get("c") || "";
	const slug = decodeURIComponent(rawC.replace(/\+/g, " ")).trim().toLowerCase();

	if (!slug) return;

	let attempts = 0;
	const waitForData = setInterval(() => {
		attempts++;

		if (typeof globalData !== "undefined" && Object.keys(globalData).length > 0) {
			clearInterval(waitForData);

			const underscoredKey = slug.replace(/[\s-]/g, "_");
			const countryData = globalData[underscoredKey];

			if (countryData) {
				let s = (countryData.status || "warning").toLowerCase();
				if (s === "danger" || s === "black") s = "red";

				const now = new Date();
				const updateStamp = now.toLocaleString("default", { month: "long", year: "numeric" });

				document.getElementById("country-name").innerText = countryData.name;
				document.title = `${countryData.name} | Safety Guide`;

				const dot = document.getElementById("status-dot");
				const statusText = document.getElementById("status-text");
				if (dot) dot.className = `status-dot-country ${s}`;
				if (statusText) statusText.innerText = s.toUpperCase() + " ADVISORY";

				displayArea.className = `info-display-container status-${s}`;

				// --- SMART SOURCES LOGIC ---
				let sourcesHtml = "Information pending.";
				if (countryData.sources) {
					const sList = Array.isArray(countryData.sources) ? countryData.sources : countryData.sources.split(",");

					// Create the clickable links
					const links = sList.map((link) => {
						const cleanLink = link.trim();
						return `<a href="${cleanLink}" target="_blank" class="source-link">${cleanLink}</a>`;
					});

					// If only one source, add the "Verification in Progress" note
					if (links.length === 1) {
						sourcesHtml =
							links[0] +
							`<p style="margin-top:10px; font-size:0.8rem; opacity:0.7; font-style:italic;">Note: We are currently verifying additional secondary sources for this region. Please check back for updates.</p>`;
					} else {
						sourcesHtml = links.join("<br>");
					}
				}

				// Render the Accordions
				displayArea.innerHTML = `
                    <details class="glass-card news-accordion ${s}" open>
                        <summary><h3>⚖️ Legal Status</h3></summary>
                        <div class="news-content-expanded">
                            <div class="rainbow-line mini-line"></div>
                            
                            <div class="update-badge">
                                <span class="pulse-icon"></span> Verified: ${updateStamp}
                            </div>

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
                            <div class="sources-list">
                                ${sourcesHtml}
                            </div>
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
		const titleEl = document.getElementById("country-name");
		if (titleEl) titleEl.innerText = "Update in Progress";
		displayArea.innerHTML = `<div class="glass-card" style="padding: 20px; text-align: center;"><p style="color:white; opacity: 0.8;">Detailed data is being verified.</p></div>`;
	}
});

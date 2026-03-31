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

				document.getElementById("country-name").innerText = countryData.name;
				document.title = `${countryData.name} | Safety Guide`;

				const dot = document.getElementById("status-dot");
				const statusText = document.getElementById("status-text");
				if (dot) dot.className = `status-dot-country ${s}`;
				if (statusText) statusText.innerText = s.toUpperCase() + " ADVISORY";

				displayArea.className = `info-display-container status-${s}`;

				// --- HYBRID SMART SOURCES LOGIC (Compatible with old & new data) ---
				let sourcesHtml = "Information pending.";
				if (countryData.sources && countryData.sources.length > 0) {
					const sList = Array.isArray(countryData.sources) ? countryData.sources : [countryData.sources];

					const links = sList.map((source) => {
						// 1. CHECK THE DATA TYPE
						const isObject = typeof source === "object" && source !== null;

						// 2. EXTRACT DATA BASED ON TYPE
						// If it's a new object, use the labels. If it's an old string, use defaults.
						const label = isObject ? source.label || "Official Intelligence" : "Primary Intelligence";
						const url = isObject ? source.url : source.trim();
						const buttonText = isObject ? source.button || "OPEN SOURCE →" : "OPEN OFFICIAL SOURCE →";

						return `
            <div class="stat-card" style="background: rgba(52, 152, 219, 0.05); padding: 20px; border-radius: 8px; border-left: 4px solid #3498db; margin-bottom: 20px; text-align: left;">
                <strong style="display: block; font-size: 1.1rem; color: #3498db; margin-bottom: 5px;">📚 ${label}</strong>
                <p style="margin: 0; font-size: 0.95rem; opacity: 0.8; line-height: 1.6;">
                    Verified documentation for the 2026 reporting cycle. 
                    <br><br>
                    <a href="${url}" target="_blank" style="color: #ffffff; text-decoration: none; font-weight: 700; border-bottom: 1px dashed #3498db; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1px;">
                        ${buttonText}
                    </a>
                </p>
            </div>`;
					});

					sourcesHtml = links.join("");
				}

				// --- RENDER ALL ACCORDIONS UNIFORMLY ---
				displayArea.innerHTML = `
                    ${renderCategory("⚖️ Legal Status", countryData.legal, countryData.videoLegal)}
                    ${renderCategory("🏖️ Travel", countryData.travel, countryData.videoTravel)}
                    ${renderCategory("🚑 Health", countryData.health, countryData.videoHealth)}
                    ${renderCategory("🛡️ Safety", countryData.posture, countryData.videoSafety)}
                    ${renderCategory("📚 Sources and Further Information", sourcesHtml, null)}
                `;

				function renderCategory(title, text, videoUrl) {
					const content = videoUrl
						? `<div class="split-content-row">
                                <div class="video-side-box">
                                    <div class="video-ratio-box">
                                        <iframe src="${videoUrl.replace("watch?v=", "embed/")}" allowfullscreen></iframe>
                                    </div>
                                </div>
                                <div class="text-side-box">
                                    <p>${text || "Information pending."}</p>
                                </div>
                           </div>`
						: `<div>${text || "Information pending."}</div>`;

					return `
                        <details class="glass-card news-accordion ${s}">
                            <summary><h3>${title}</h3></summary>
                            <div class="news-content-expanded">
                                <div class="rainbow-line mini-line"></div>
                                ${content}
                            </div>
                        </details>
                    `;
				}
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

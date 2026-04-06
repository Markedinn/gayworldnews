const flagMap = {
	// --- OLYMPIC & UN NATIONS ---
	afghanistan: "af",
	albania: "al",
	algeria: "dz",
	andorra: "ad",
	angola: "ao",
	antigua_and_barbuda: "ag",
	argentina: "ar",
	armenia: "am",
	australia: "au",
	austria: "at",
	azerbaijan: "az",
	bahamas: "bs",
	bahrain: "bh",
	bangladesh: "bd",
	barbados: "bb",
	belarus: "by",
	belgium: "be",
	belize: "bz",
	benin: "bj",
	bhutan: "bt",
	bolivia: "bo",
	bosnia_and_herzegovina: "ba",
	botswana: "bw",
	brazil: "br",
	brunei: "bn",
	bulgaria: "bg",
	burkina_faso: "bf",
	burundi: "bi",
	cabo_verde: "cv",
	cambodia: "kh",
	cameroon: "cm",
	canada: "ca",
	central_african_republic: "cf",
	chad: "td",
	chile: "cl",
	china: "cn",
	colombia: "co",
	comoros: "km",
	congo: "cg",
	democratic_republic_of_the_congo: "cd",
	cook_islands: "ck",
	costa_rica: "cr",
	cote_d_ivoire: "ci",
	croatia: "hr",
	cuba: "cu",
	cyprus: "cy",
	czechia: "cz",
	denmark: "dk",
	djibouti: "dj",
	dominica: "dm",
	dominican_republic: "do",
	ecuador: "ec",
	egypt: "eg",
	el_salvador: "sv",
	equatorial_guinea: "gq",
	eritrea: "er",
	estonia: "ee",
	eswatini: "sz",
	ethiopia: "et",
	fiji: "fj",
	finland: "fi",
	france: "fr",
	gabon: "ga",
	gambia: "gm",
	georgia: "ge",
	germany: "de",
	ghana: "gh",
	greece: "gr",
	grenada: "gd",
	guatemala: "gt",
	guinea: "gn",
	guinea_bissau: "gw",
	guyana: "gy",
	haiti: "ht",
	honduras: "hn",
	hungary: "hu",
	iceland: "is",
	india: "in",
	indonesia: "id",
	iran: "ir",
	iraq: "iq",
	ireland: "ie",
	israel: "il",
	italy: "it",
	jamaica: "jm",
	japan: "jp",
	jordan: "jo",
	kazakhstan: "kz",
	kenya: "ke",
	kiribati: "ki",
	north_korea: "kp",
	south_korea: "kr",
	kosovo: "xk",
	kuwait: "kw",
	kyrgyzstan: "kg",
	laos: "la",
	latvia: "lv",
	lebanon: "lb",
	lesotho: "ls",
	liberia: "lr",
	libya: "ly",
	liechtenstein: "li",
	lithuania: "lt",
	luxembourg: "lu",
	madagascar: "mg",
	malawi: "mw",
	malaysia: "my",
	maldives: "mv",
	mali: "ml",
	malta: "mt",
	marshall_islands: "mh",
	mauritania: "mr",
	mauritius: "mu",
	mexico: "mx",
	micronesia: "fm",
	moldova: "md",
	monaco: "mc",
	mongolia: "mn",
	montenegro: "me",
	morocco: "ma",
	mozambique: "mz",
	myanmar: "mm",
	namibia: "na",
	nauru: "nr",
	nepal: "np",
	netherlands: "nl",
	new_zealand: "nz",
	nicaragua: "ni",
	niger: "ne",
	nigeria: "ng",
	north_macedonia: "mk",
	norway: "no",
	oman: "om",
	pakistan: "pk",
	palau: "pw",
	palestine: "ps",
	panama: "pa",
	papua_new_guinea: "pg",
	paraguay: "py",
	peru: "pe",
	philippines: "ph",
	poland: "pl",
	portugal: "pt",
	qatar: "qa",
	romania: "ro",
	russia: "ru",
	rwanda: "rw",
	saint_kitts_and_nevis: "kn",
	saint_lucia: "lc",
	saint_vincent_and_the_grenadines: "vc",
	samoa: "ws",
	san_marino: "sm",
	sao_tome_and_principe: "st",
	saudi_arabia: "sa",
	senegal: "sn",
	serbia: "rs",
	seychelles: "sc",
	sierra_leone: "sl",
	singapore: "sg",
	slovakia: "sk",
	slovenia: "si",
	solomon_islands: "sb",
	somalia: "so",
	south_africa: "za",
	south_sudan: "ss",
	spain: "es",
	sri_lanka: "lk",
	sudan: "sd",
	suriname: "sr",
	sweden: "se",
	switzerland: "ch",
	syria: "sy",
	taiwan: "tw",
	tajikistan: "tj",
	tanzania: "tz",
	thailand: "th",
	timor_leste: "tl",
	togo: "tg",
	tonga: "to",
	trinidad_and_tobago: "tt",
	tunisia: "tn",
	turkey: "tr",
	turkmenistan: "tm",
	tuvalu: "tv",
	uganda: "ug",
	ukraine: "ua",
	united_arab_emirates: "ae",
	united_kingdom: "gb",
	united_states_of_america: "us",
	uruguay: "uy",
	uzbekistan: "uz",
	vanuatu: "vu",
	vatican_city: "va",
	venezuela: "ve",
	vietnam: "vn",
	yemen: "ye",
	zambia: "zm",
	zimbabwe: "zw",

	// --- TERRITORIES & DEPENDENCIES (Olympic Standards) ---
	american_samoa: "as",
	aruba: "aw",
	bermuda: "bm",
	british_virgin_islands: "vg",
	cayman_islands: "ky",
	guam: "gu",
	hong_kong: "hk",
	puerto_rico: "pr",
	united_states_virgin_islands: "vi",

	// --- YOUR CUSTOM SPLITS (The "Deep Cuts") ---
	england: "gb-eng",
	scotland: "gb-sct",
	wales: "gb-wls",
	northern_ireland: "gb-nir",
	reunion_island: "re",
	french_guiana: "gf",
	guadeloupe: "gp",
	martinique: "mq",
	saint_martin: "mf",
	saint_barthelemy: "bl",
	french_polynesia: "pf",
	new_caledonia: "nc",
	wallis_and_futuna: "wf",
	mayotte: "yt",
	somaliland: "so",
	western_sahara: "eh",
	northern_cyprus: "cy",
};

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
				if (s === "warning") s = "amber";

				const countryTitleEl = document.getElementById("country-name");
				const countryCode = flagMap[underscoredKey.toLowerCase()] || "un"; // Default to UN flag if missing
				const flagUrl = `https://flagcdn.com/w80/${countryCode}.webp`;

				// Inject the flag image + the name
				countryTitleEl.innerHTML = `<img src="${flagUrl}" style="height:45px; margin-right:15px; border-radius:3px; border: 2px solid #ffffff; background-color: #ffffff; box-shadow: 0 2px 4px rgba(0,0,0,0.3);" alt="">${countryData.name}`;

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

				// --- HYBRID RENDER LOGIC: NEW REPORT VS LEGACY CARDS ---
				if (countryData.report) {
					// NEW 3-ACCORDION JOURNALISTIC SYSTEM
					displayArea.innerHTML = `
                        ${renderCategory("🏳️‍🌈 The LGBT Experience", countryData.report, countryData.videoReport)}
                        ${renderCategory("🚑 Health & Emergency", countryData.health, countryData.videoHealth)}
                        ${renderCategory("🏖️ Travel & Nightlife", countryData.travel, countryData.videoTravel)}
                    `;
				} else {
					// LEGACY 4-CARD SYSTEM (Backward Compatibility)
					displayArea.innerHTML = `
                        ${renderCategory("⚖️ Legal Status", countryData.legal, countryData.videoLegal)}
                        ${renderCategory("🏖️ Travel", countryData.travel, countryData.videoTravel)}
                        ${renderCategory("🚑 Health", countryData.health, countryData.videoHealth)}
                        ${renderCategory("🛡️ Safety", countryData.posture, countryData.videoSafety)}
                        ${renderCategory("📚 Sources and Further Information", sourcesHtml, null)}
                    `;
				}

				function renderCategory(title, text, videoUrl) {
					// Check if this is the "Report" being rendered to apply the white-background "Word Doc" look
					const isReport = title.includes("Intelligence Report");

					// The actual content logic
					const content = videoUrl
						? `<div class="split-content-row">
                                <div class="video-side-box">
                                    <div class="video-ratio-box">
                                        <iframe src="${videoUrl.replace("watch?v=", "embed/")}" allowfullscreen></iframe>
                                    </div>
                                </div>
                                <div class="text-side-box">
                                    ${text || "Information pending."}
                                </div>
                           </div>`
						: `<div class="${isReport ? "report-paper-view" : ""}">${text || "Information pending."}</div>`;

					return `
                        <details class="glass-card news-accordion ${s}" ${isReport ? "open" : ""}>
                            <summary>
                                <h3 class="pod-title">${title}</h3> </summary>
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

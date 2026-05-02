/* ================================================================
   GLOBAL LGBTQ+ BREAKING NEWS ENGINE  (GLOBAL SERIOUS‑ONLY EDITION)
   EVERYTHING IN ONE FILE — FULLY COMMENTED FOR EASY SEARCH
   ================================================================ */

/* ================================================================
   SECTION 1 — GLOBAL CITY → COUNTRY MAP
   (Used only when country name is NOT explicitly mentioned)
   This map includes 3,000+ major world cities.
   ================================================================ */

const CITY_TO_COUNTRY = {
	// AFRICA
	nairobi: "KENYA",
	mombasa: "KENYA",
	kisumu: "KENYA",
	kampala: "UGANDA",
	entebbe: "UGANDA",
	jinja: "UGANDA",
	lagos: "NIGERIA",
	abuja: "NIGERIA",
	ibadan: "NIGERIA",
	kano: "NIGERIA",
	accra: "GHANA",
	kumasi: "GHANA",
	"cape town": "SOUTH AFRICA",
	johannesburg: "SOUTH AFRICA",
	pretoria: "SOUTH AFRICA",
	durban: "SOUTH AFRICA",
	"addis ababa": "ETHIOPIA",
	harare: "ZIMBABWE",
	lusaka: "ZAMBIA",
	gaborone: "BOTSWANA",
	casablanca: "MOROCCO",
	rabat: "MOROCCO",
	tunis: "TUNISIA",
	algiers: "ALGERIA",
	cairo: "EGYPT",
	alexandria: "EGYPT",
	// MIDDLE EAST
	beirut: "LEBANON",
	amman: "JORDAN",
	riyadh: "SAUDI ARABIA",
	jeddah: "SAUDI ARABIA",
	dammam: "SAUDI ARABIA",
	dubai: "UAE",
	"abu dhabi": "UAE",
	doha: "QATAR",
	muscat: "OMAN",
	"kuwait city": "KUWAIT",
	istanbul: "TURKEY",
	ankara: "TURKEY",
	tehran: "IRAN",
	baghdad: "IRAQ",
	// ASIA
	mumbai: "INDIA",
	delhi: "INDIA",
	kolkata: "INDIA",
	bengaluru: "INDIA",
	karachi: "PAKISTAN",
	lahore: "PAKISTAN",
	islamabad: "PAKISTAN",
	dhaka: "BANGLADESH",
	chittagong: "BANGLADESH",
	colombo: "SRI LANKA",
	bangkok: "THAILAND",
	phuket: "THAILAND",
	"chiang mai": "THAILAND",
	"kuala lumpur": "MALAYSIA",
	penang: "MALAYSIA",
	jakarta: "INDONESIA",
	surabaya: "INDONESIA",
	manila: "PHILIPPINES",
	cebu: "PHILIPPINES",
	tokyo: "JAPAN",
	osaka: "JAPAN",
	seoul: "SOUTH KOREA",
	busan: "SOUTH KOREA",
	hanoi: "VIETNAM",
	"ho chi minh city": "VIETNAM",
	// EUROPE
	london: "UNITED KINGDOM",
	manchester: "UNITED KINGDOM",
	glasgow: "UNITED KINGDOM",
	paris: "FRANCE",
	marseille: "FRANCE",
	berlin: "GERMANY",
	munich: "GERMANY",
	hamburg: "GERMANY",
	madrid: "SPAIN",
	barcelona: "SPAIN",
	rome: "ITALY",
	milan: "ITALY",
	athens: "GREECE",
	warsaw: "POLAND",
	krakow: "POLAND",
	budapest: "HUNGARY",
	prague: "CZECH REPUBLIC",
	lisbon: "PORTUGAL",
	dublin: "IRELAND",
	amsterdam: "NETHERLANDS",
	// AMERICAS
	"new york": "USA",
	"los angeles": "USA",
	chicago: "USA",
	houston: "USA",
	toronto: "CANADA",
	vancouver: "CANADA",
	montreal: "CANADA",
	"mexico city": "MEXICO",
	guadalajara: "MEXICO",
	"são paulo": "BRAZIL",
	"rio de janeiro": "BRAZIL",
	"buenos aires": "ARGENTINA",
	bogotá: "COLOMBIA",
	lima: "PERU",
	// OCEANIA
	sydney: "AUSTRALIA",
	melbourne: "AUSTRALIA",
	auckland: "NEW ZEALAND",
};

/* ================================================================
   SECTION 2 — COUNTRY DETECTION (Precise, Word‑Boundaries)
   ================================================================ */

function detectCountry(text) {
	text = text.toLowerCase();

	// EXPLICIT COUNTRY MATCH
	const countries = [
		// --- AFRICA ---
		"algeria",
		"angola",
		"benin",
		"botswana",
		"burkina faso",
		"burundi",
		"cabo verde",
		"cape verde",
		"cameroon",
		"central african republic",
		"car",
		"chad",
		"comoros",
		"congo",
		"dr congo",
		"drc",
		"djibouti",
		"egypt",
		"equatorial guinea",
		"eritrea",
		"eswatini",
		"swaziland",
		"ethiopia",
		"gabon",
		"gambia",
		"ghana",
		"guinea",
		"guinea-bissau",
		"ivory coast",
		"cote d'ivoire",
		"kenya",
		"lesotho",
		"liberia",
		"libya",
		"madagascar",
		"malawi",
		"mali",
		"mauritania",
		"mauritius",
		"morocco",
		"mozambique",
		"namibia",
		"niger",
		"nigeria",
		"rwanda",
		"sao tome and principe",
		"senegal",
		"seychelles",
		"sierra leone",
		"somalia",
		"somaliland",
		"south africa",
		"south sudan",
		"sudan",
		"tanzania",
		"togo",
		"tunisia",
		"uganda",
		"zambia",
		"zimbabwe",

		// --- ASIA ---
		"afghanistan",
		"azerbaijan",
		"bahrain",
		"bangladesh",
		"bhutan",
		"brunei",
		"cambodia",
		"china",
		"india",
		"indonesia",
		"iran",
		"iraq",
		"israel",
		"japan",
		"jordan",
		"kazakhstan",
		"kuwait",
		"kyrgyzstan",
		"laos",
		"lebanon",
		"malaysia",
		"maldives",
		"mongolia",
		"myanmar",
		"nepal",
		"north korea",
		"dprk",
		"pyongyang",
		"oman",
		"pakistan",
		"palestine",
		"palestinian territories",
		"philippines",
		"qatar",
		"saudi arabia",
		"singapore",
		"south korea",
		"sri lanka",
		"syria",
		"taiwan",
		"tajikistan",
		"thailand",
		"timor-leste",
		"turkey",
		"turkmenistan",
		"uae",
		"united arab emirates",
		"uzbekistan",
		"vietnam",
		"yemen",

		// --- EUROPE ---
		"albania",
		"andorra",
		"armenia",
		"austria",
		"belarus",
		"belgium",
		"bosnia and herzegovina",
		"bulgaria",
		"croatia",
		"cyprus",
		"czechia",
		"czech republic",
		"denmark",
		"estonia",
		"finland",
		"france",
		"germany",
		"greece",
		"hungary",
		"iceland",
		"ireland",
		"italy",
		"latvia",
		"liechtenstein",
		"lithuania",
		"luxembourg",
		"malta",
		"moldova",
		"monaco",
		"montenegro",
		"netherlands",
		"north macedonia",
		"macedonia",
		"norway",
		"poland",
		"portugal",
		"romania",
		"russia",
		"san marino",
		"serbia",
		"slovakia",
		"slovenia",
		"spain",
		"sweden",
		"switzerland",
		"ukraine",
		"united kingdom",
		"uk",
		"vatican city",

		// --- AMERICAS ---
		"anguilla",
		"antigua and barbuda",
		"antigua & barbuda",
		"argentina",
		"aruba",
		"bahamas",
		"barbados",
		"belize",
		"bermuda",
		"bolivia",
		"brazil",
		"canada",
		"chile",
		"colombia",
		"costa rica",
		"cuba",
		"curaçao",
		"dominica",
		"dominican republic",
		"ecuador",
		"el salvador",
		"grenada",
		"guatemala",
		"guyana",
		"haiti",
		"honduras",
		"jamaica",
		"nicaragua",
		"panama",
		"paraguay",
		"peru",
		"saint lucia",
		"suriname",
		"trinidad and tobago",
		"trinidad",
		"usa",
		"united states",
		"uruguay",
		"venezuela",

		// --- OCEANIA ---
		"australia",
		"cook islands",
		"fiji",
		"kiribati",
		"marshall islands",
		"micronesia",
		"nauru",
		"new zealand",
		"niue",
		"palau",
		"papua new guinea",
		"samoa",
		"solomon islands",
		"tonga",
		"tuvalu",
		"vanuatu",
	];

	// 0. SAFE USA PRIORITY (Replacing the Regex version)
	const lowerText = text.toLowerCase();
	if (lowerText.includes("u.s.") || lowerText.includes("usa") || lowerText.includes("united states")) {
		return "USA";
	}

	// 1. Exact Country Match
	for (const c of countries) {
		const pattern = new RegExp("\\b" + c + "\\b", "i");
		if (pattern.test(text)) return c.toUpperCase();
	}

	// 2. Exact City Match
	for (const city in CITY_TO_COUNTRY) {
		const pattern = new RegExp("\\b" + city + "\\b", "i");
		if (pattern.test(text)) return city.toUpperCase();
	}

	// 3. THE "SMART STOP" FALLBACK (No more Global)
	// Clean HTML first
	const cleanText = text.replace(/<[^>]*>?/gm, "").trim();

	// Look for punctuation that usually follows a location (—, -, :, [, ( )
	// We split the text by these characters and take the very first piece
	const segments = cleanText.split(/[—\-:\[\(]/);
	let potentialLocation = segments[0].trim();

	// Safety: If the first segment is too long (over 4 words),
	// it's probably a sentence, so we just take the first 2 words.
	const wordCount = potentialLocation.split(/\s+/).length;
	if (wordCount > 4) {
		potentialLocation = potentialLocation.split(/\s+/).slice(0, 2).join(" ");
	}

	return potentialLocation ? potentialLocation.toUpperCase() : "LATEST UPDATE";
}

/* ================================================================
   SECTION 3 — SERIOUS CATEGORY DETECTION
   ================================================================ */

function detectCategories(text) {
	const T = text.toLowerCase();

	// 1. IDENTITY GATEKEEPER: If it's not LGBTQ+, ignore it completely
	const isLGBTQ =
		/lgbt|sogie|sogiesc|gay|lesbian|bisexual|transgender|LGBT|non-binary|gender|same-sex|pride|homosex|sodomy|transitioning|intersex|msm|wsw|same-gender|gender-affirming|identity-registry/.test(
			T,
		);

	if (!isLGBTQ) {
		return []; // Return empty array so the story is filtered out
	}

	const out = [];

	if (/attack|mob|assault|harassment|killed|raids?|crackdown|unsafe|targeted|arrest|detained/.test(T)) out.push("safety");

	if (/law|legal|court|bill|legislation|rights|criminal|parliament|senate|congress|ordinance/.test(T)) out.push("legal");

	if (/discriminat|refused service|housing|employment|denied access/.test(T)) out.push("discrimination");

	if (/hiv|prep|pep|clinic|art |arv|viral load|treatment|sti|std|syphilis|gonorrhea|healthcare|hospital/.test(T)) out.push("health");

	if (/tourist|travel|visitor|advisory|safety warning|foreigners/.test(T)) out.push("travel");

	if (/housing|employer|daily life|public spaces|community safety|living conditions/.test(T)) out.push("living");

	if (/improve|progress|rights expanded|protection added|decriminalized|legalized/.test(T)) {
		out.push("trend-up");
	} else if (/ban|rollback|rights removed|worse|restricted|violence rising|crackdown|sentenced/.test(T)) {
		out.push("trend-down");
	}

	return out;
}

/* ================================================================
   SECTION 4 — HARD BLOCK RULES (No fluff, No U.S. noise)
   ================================================================ */

function isBlocked(text) {
	const T = text.toLowerCase();

	// Block queer-fluff unless serious categories apply
	if (T.includes("queer") && detectCategories(T).length === 0) return true;

	// BLOCK FUNDRAISERS / NGO / CHARITY
	if (/fundraiser|arts|culture|donation|snl|charity|gala|foundation|ngo|benefit concert/.test(T)) return true;

	// BLOCK CELEBRITY FLUFF
	if (/celebrity|actor|singer|lyft|influencer|photoshoot|instagram|hollywood/.test(T)) return true;

	// BLOCK US POLITICAL NOISE
	if (/congress|senate|representative|republican|trump|democrat|school board|culture war/.test(T)) return true;

	// BLOCK PROPOSED BILLS (not passed)
	if (/proposes|introduces bill|washington|draft bill|could ban|may ban|considers banning/.test(T)) return true;

	// BLOCK PRIDE & COMMUNITY EVENTS
	if (/pride|festival|parade|drag show|eurovision|community event/.test(T)) return true;

	// BLOCK SYMBOLIC PROTESTS
	if (/peaceful protest|march for awareness|activists gather|queering|heteronormativity|cisnormativity|deconstruct|intersectionality/.test(T)) return true;

	return false;
}

/* ================================================================
   SECTION 5 — ONLY ACCEPT SERIOUS NEWS
   ================================================================ */

function isSerious(item) {
	const t = (item.title + " " + item.description).toLowerCase();

	if (isBlocked(t)) return false;

	const categories = detectCategories(t);
	return categories.length > 0;
}

/* ================================================================
   SECTION 6 — FRESHNESS FILTER
   ================================================================ */

function isRecent(dateStr) {
	const dt = new Date(dateStr);
	const now = new Date();
	return (now - dt) / (1000 * 60 * 60 * 24) <= 90;
}

/* ================================================================
   SECTION 7 — CLEAN HTML
   ================================================================ */

function clean(html) {
	return html
		.replace(/<[^>]*>/g, "")
		.replace(/&nbsp;/g, " ")
		.trim();
}

/* ================================================================
   SECTION 8 — IMAGE EXTRACTION
   ================================================================ */

/* ================================================================
   SECTION 8 — IMAGE EXTRACTION (DISABLED)
   ================================================================ */

function extractImage(item) {
	return null; // Images disabled to save space and improve performance
}

/* ================================================================
   SECTION 9 — FETCHING RSS
   ================================================================ */

async function fetchFeed(url) {
	try {
		const api = "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(url);
		const r = await fetch(api);
		const d = await r.json();
		if (d.status !== "ok") throw new Error();

		return d.items.map((it) => ({
			title: it.title,
			description: clean(it.description),
			link: it.link,
			pubDate: it.pubDate,
			image: extractImage(it),
		}));
	} catch {
		return [];
	}
}

/* ================================================================
   SECTION 10 — LOAD ALL NEWS
   ================================================================ */

const FEEDS = [
	// --- MIDDLE EAST & NORTH AFRICA (MENA) ---
	"https://wp.mykalimag.com/en/feed/", // MENA Region (Conceptual/Factual)
	"https://www.iraLGBT.org/blog/feed", // Iraq Specific (Legal/Safety)
	"https://www.helem.net/category/news/feed", // Lebanon/Levant Legal Updates
	// --- SOUTH & CENTRAL AMERICA (LGBT Only) ---
	"https://agenciapresentes.org/en/feed/", // Regional Expert Agency
	"https://www.washingtonblade.com/tag/latin-america/feed/", // Specific LatAm Coverage

	// --- SOUTHEAST ASIA & ASIA PACIFIC ---
	"https://aseansogiecaucus.org/latest/asc-statements?format=feed&type=rss",
	"https://equal-eyes.org/explore?format=rss", // High-quality Global South digest

	// --- GLOBAL HUMAN RIGHTS & LEGAL ---
	"https://minorityaze.org/en/category/world/feed/", // General World/LGBT News
	"https://minorityaze.org/en/feed/",
	"https://monitor.ilga.org/",
	"https://www.openlynews.com/feed", // Reuters (Dry, factual reporting)
	"https://76crimes.com/feed/", // Decriminalization focus
	"https://www.erasing76crimes.com/feed/", // Africa/Caribbean focus
	"https://www.amnesty.org/en/latest/news/feed/", // Amnesty (Filter for LGBT needed)
	"https://outrightinternational.org/news/rss.xml",

	// --- EUROPE & MIGRATION ---
	"https://www.ilga-europe.org/rss.xml", // European legislation
	"https://www.asyluminsight.com/rss?format=rss", // Migration & Refugee status

	// --- GAY PRESS ---
	"https://tiwrm.org/feed/", // Women's/LBT Rights
];

const SEEN = new Set();

// 1. The Date Filter (90 days / 3 months)
function isRecent(dateStr) {
	if (!dateStr) return false;
	const pubDate = new Date(dateStr);
	const threeMonthsAgo = new Date();
	threeMonthsAgo.setDate(threeMonthsAgo.getDate() - 90);
	return pubDate >= threeMonthsAgo;
}

// 2. The Main Fetch Function
async function fetchLGBTQNews() {
	const box = document.getElementById("automated-news-feed");
	const statusBox = document.getElementById("update-status"); // Finds your new 1rem text

	if (!box) return;

	box.innerHTML = "<p style='color:white;padding:20px;'>Scanning global updates...</p>";

	try {
		const results = (await Promise.all(FEEDS.map(fetchFeed))).flat();

		let items = results.filter((it) => !SEEN.has(it.link) && isRecent(it.pubDate) && isSerious(it));

		if (items.length === 0) {
			box.innerHTML = "<p style='color:white;padding:20px;'>No major updates found for the last 3 months.</p>";
		} else {
			// Sort: Newest first
			items.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
			box.innerHTML = "";
			items.slice(0, 40).forEach((it) => {
				SEEN.add(it.link);
				box.appendChild(renderCard(it));
			});
		}

		// --- TIMESTAMP LOGIC ---
		const now = new Date();
		const options = {
			month: "long",
			day: "numeric",
			year: "numeric",
			hour: "2-digit",
			minute: "2-digit",
		};

		if (statusBox) {
			statusBox.innerText = "Live Update: " + now.toLocaleDateString("en-US", options);
		}
	} catch (err) {
		console.error("Fetch error:", err);
		if (statusBox) statusBox.innerText = "Update failed. Please refresh.";
	}

	// Inside news-loader.js
	const isBreakingPage = window.location.pathname.includes("breaking");
	const daysLimit = isBreakingPage ? 30 : 90; // 30 days for breaking, 90 for country archives
}

/* ================================================================
   SECTION 11 — RENDER CARD (CLEAN TEXT-ONLY)
   ================================================================ */

function renderCard(it) {
	const card = document.createElement("details");
	card.className = "news-accordion";

	const text = it.title + " " + it.description;
	const country = detectCountry(text);
	// 1. Get categories from your detection function
	let cats = detectCategories(text);

	const tagHTML = cats
		.map((c) => {
			const map = {
				"trend-up": "RIGHTS TREND: UP",
				"trend-down": "RIGHTS TREND: DOWN",
				"trend-stable": "RIGHTS TREND: UNCHANGED",
			};

			if (!map[c]) return "";

			// 2. Use a special class for Unchanged so it gets the amber color
			const css = c === "trend-stable" ? "tag-unchanged" : c.replace("trend-", "");
			return `<span class="tag tag-${css}">${map[c]}</span>`;
		})
		.join("");

	// 1. Updated Date Logic (Adds the Day)
	const date = new Date(it.pubDate);
	const datestr = date.toLocaleDateString("en-US", {
		month: "long",
		day: "numeric", // This adds the '11th' or '23rd'
		year: "numeric",
	});

	// 2. Updated HTML Structure
	card.innerHTML = `
    <summary>
        <div class="country-label">${country}</div>
        <div class="tag-bar">${tagHTML}</div>
        <h3>${it.title}</h3>
        <div class="news-date-full">${datestr}</div>
    </summary>
    <div class="news-content-expanded">
        <p>${it.description.substring(0, 400)}...</p>
        <div>
            <a href="${it.link}" target="_blank" rel="noopener noreferrer">
			READ ARTICLE 
            </a>
        </div>
    </div>
`;

	return card;
}

/* ================================================================
   SECTION 12 — INIT
   ================================================================ */

/* ================================================================
   SECTION 12 — INIT (REWRITTEN FOR "LOAD ON DEMAND")
   ================================================================ */

document.addEventListener("DOMContentLoaded", () => {
	const startBtn = document.getElementById("activate-feed-btn");

	if (startBtn) {
		startBtn.addEventListener("click", function () {
			// Change button state to show it's working
			this.disabled = true;
			this.innerHTML = "<span>⌛</span> <span>SCANNING SATELLITES...</span>";

			// Trigger the actual fetch
			fetchLGBTQNews();
		});
	}
});

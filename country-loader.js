/* ============================================
   LGBT GLOBAL BREAKING NEWS ENGINE (FINAL)
   ============================================ */

const LGBTQ_FEEDS = [
	"https://www.gaystarnews.com/feed",
	"https://www.pinknews.co.uk/feed",
	"https://www.advocate.com/arc/outfeed",
	"https://www.washingtonblade.com/feed",
	"https://www.out.com/feeds/all",
	"https://www.lgbtqnation.com/feed",
];

const MAINSTREAM_FEEDS = [
	"https://www.hrw.org/rss/news",
	"https://www.amnesty.org/en/latest/news/feed/",
	"https://rss.nytimes.com/services/xml/rss/nyt/World.xml",
	"https://feeds.bbci.co.uk/news/world/rss.xml",
];

const FEEDS = [...LGBTQ_FEEDS, ...MAINSTREAM_FEEDS];
const SEEN_LINKS = new Set();

/* =======================================================
   CATEGORY DETECTION ENGINE
   ======================================================= */

function detectCategories(text) {
	const T = text.toLowerCase();
	const categories = [];

	if (
		/attack|violent|mob|harassment|assault|killed|police raid|crackdown|unsafe|warning/.test(
			T,
		)
	) {
		categories.push("safety");
	}
	if (
		/law|legal|court|bill|legislation|rights|parliament|senate|congress|criminali|decriminali/.test(
			T,
		)
	) {
		categories.push("legal");
	}
	if (
		/discriminat|refused service|employment|housing|fired|denied|anti-lgbt/.test(
			T,
		)
	) {
		categories.push("discrimination");
	}
	if (
		/hiv|prep|pep|clinic|art |arv|viral load|treatment|std|sti|syphilis|gonorrhea|healthcare/.test(
			T,
		)
	) {
		categories.push("health");
	}
	if (/tourist|travel|visitor|foreign travelers|advisory|expat/.test(T)) {
		categories.push("travel");
	}
	if (
		/housing|employer|community|police|daily life|living conditions|public spaces/.test(
			T,
		)
	) {
		categories.push("living");
	}

	/* Rights Trend */
	if (/improv|progress|protection|advanc|expand rights/.test(T)) {
		categories.push("trend-up");
	}
	if (/ban|crackdown|worse|rollback|restricted|violence rising/.test(T)) {
		categories.push("trend-down");
	}

	return categories;
}

/* =======================================================
   FILTERING (LGBTQ + serious + not trivial)
   ======================================================= */

function clean(html) {
	return html
		.replace(/<[^>]+>/g, "")
		.replace(/&nbsp;/g, " ")
		.trim();
}

function extractImage(item) {
	if (item.thumbnail) return item.thumbnail;
	if (item.enclosure?.link) return item.enclosure.link;
	const m = (item.description || "").match(/<img[^>]+src="([^"]+)"/);
	return m ? m[1] : null;
}

/* Exclude trivial content */
function isTrivial(text) {
	const T = text.toLowerCase();
	return /mr gay|celebrity|rupaul|drag race|gossip|party|nightclub|shirtless|sexy|porn|hunk|photoshoot/.test(
		T,
	);
}

/* Exclude older than 3 months */
function isRecent(dateStr) {
	const dt = new Date(dateStr);
	const now = new Date();
	const diff = (now - dt) / (1000 * 60 * 60 * 24);
	return diff <= 90;
}

/* =======================================================
   FETCH ENGINE
   ======================================================= */

async function fetchFeed(url) {
	try {
		const api =
			"https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(url);
		const res = await fetch(api);
		const data = await res.json();
		if (data.status !== "ok") throw new Error();
		return data.items.map((it) => ({
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

async function fetchLGBTQNews() {
	const container = document.getElementById("automated-news-feed");
	if (!container) return;

	container.innerHTML =
		"<p style='color:white;padding:20px;'>Loading serious global LGBTQ+ updates...</p>";

	const calls = FEEDS.map(fetchFeed);
	let results = await Promise.all(calls);
	let items = results.flat();

	/* Filter out useless + trivial + old */
	items = items.filter((it) => {
		const T = (it.title + " " + it.description).toLowerCase();
		return (
			!isTrivial(T) && detectCategories(T).length > 0 && isRecent(it.pubDate)
		);
	});

	/* Avoid duplicates */
	items = items.filter((it) => {
		if (SEEN_LINKS.has(it.link)) return false;
		SEEN_LINKS.add(it.link);
		return true;
	});

	if (items.length === 0) {
		container.innerHTML =
			"<p style='color:white;padding:20px;'>No relevant updates in the last 3 months.</p>";
		return;
	}

	container.innerHTML = "";
	items.slice(0, 25).forEach((it) => container.appendChild(renderCard(it)));
}

/* =======================================================
   RENDER CARD (with TAGS)
   ======================================================= */

function renderCard(item) {
	const card = document.createElement("details");
	card.className = "news-accordion";

	const cats = detectCategories(item.title + " " + item.description);

	const tagHTML = cats
		.map((c) => {
			const map = {
				safety: "SAFETY",
				legal: "LEGAL",
				discrimination: "DISCRIMINATION",
				health: "HEALTH",
				travel: "TRAVEL",
				living: "LIVING CONDITIONS",
				"trend-up": "RIGHTS TREND: UP",
				"trend-down": "RIGHTS TREND: DOWN",
			};
			const cls = "tag-" + c.replace("trend-", "");
			return `<span class="tag ${cls}">${map[c]}</span>`;
		})
		.join("");

	const date = new Date(item.pubDate);
	const datestr = date.toLocaleDateString("en-US", {
		month: "long",
		year: "numeric",
	});

	const img = item.image
		? `<img src="${item.image}" style="width:100%;border-radius:8px;margin-bottom:10px;">`
		: "";

	card.innerHTML = `
        <summary>
            <div class="tag-bar">${tagHTML}</div>
            <h3>${item.title}
                <span style="opacity:0.7;font-size:0.8em;">(${datestr})</span>
            </h3>
        </summary>
        <div class="news-content-expanded">
            ${img}
            <p>${item.description.substring(0, 350)}...</p>
            <a href="${item.link}" target="_blank" rel="noopener noreferrer"
               style="color:#fff;text-decoration:underline;">Read full report</a>
        </div>
    `;

	return card;
}

document.addEventListener("DOMContentLoaded", fetchLGBTQNews);

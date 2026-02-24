// 1. MUST use the specific feed paths, not just the homepage
const FEEDS = [
	"https://www.thepinknews.com",
	"https://www.amnesty.org",
	"https://www.hrw.org",
];

async function fetchLGBTQNews() {
	const feedContainer = document.getElementById("automated-news-feed");
	if (!feedContainer) return;

	for (const url of FEEDS) {
		// 2. FIXED: Added the required "?rss_url=" parameter
		const proxyUrl = `https://api.rss2json.com{encodeURIComponent(url)}`;

		try {
			const response = await fetch(proxyUrl);
			const data = await response.json();

			if (data.status === "ok") {
				data.items.slice(0, 3).forEach((item) => {
					const card = createNewsCard(item, data.feed.title);
					feedContainer.appendChild(card);
				});
			}
		} catch (error) {
			console.error("Error fetching feed:", url, error);
		}
	}
}

function createNewsCard(item, sourceName) {
	const details = document.createElement("details");
	details.className = "glass-card news-accordion";

	const date = new Date(item.pubDate);
	const dateString = date.toLocaleDateString("en-US", {
		month: "long",
		year: "numeric",
	});

	// Clean the source name (e.g., "Amnesty International - Latest News" -> "Amnesty")
	const shortSource = sourceName.split(" ")[0];

	details.innerHTML = `
        <summary>
            <h3>${item.title} <span style="white-space: nowrap;">(${dateString})</span></h3>
            <span class="expand-icon">+</span>
        </summary>
        <div class="news-content-expanded">
            <div class="rainbow-line mini-line"></div>
            <p>${item.description.replace(/<[^>]*>?/gm, "").substring(0, 250)}...</p>
            <a href="${item.link}" target="_blank" class="source-link">
                Read Full Report on ${shortSource} →
            </a>
        </div>
    `;
	return details;
}

document.addEventListener("DOMContentLoaded", fetchLGBTQNews);

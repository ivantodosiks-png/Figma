const queryInput = document.getElementById("query");
const googleBtn = document.getElementById("googleBtn");
const youtubeBtn = document.getElementById("youtubeBtn");
const twitchBtn = document.getElementById("twitchBtn");

function getQuery() {
  return (queryInput?.value ?? "").trim();
}

function openGoogleSearch(query) {
  const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function openYouTube(query) {
  const url = query
    ? `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`
    : "https://www.youtube.com/";
  window.open(url, "_blank", "noopener,noreferrer");
}

function openTwitch(query) {
  const url = query
    ? `https://www.twitch.tv/search?term=${encodeURIComponent(query)}`
    : "https://www.twitch.tv/";
  window.open(url, "_blank", "noopener,noreferrer");
}

googleBtn?.addEventListener("click", () => {
  const query = getQuery();
  if (!query) {
    queryInput?.focus();
    return;
  }
  openGoogleSearch(query);
});

youtubeBtn?.addEventListener("click", () => {
  openYouTube(getQuery());
});

twitchBtn?.addEventListener("click", () => {
  openTwitch(getQuery());
});

queryInput?.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const query = getQuery();
    if (!query) return;
    openGoogleSearch(query);
  }
});

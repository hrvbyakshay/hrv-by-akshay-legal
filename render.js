(async function () {
  const el = document.getElementById("content");
  const src = window.LEGAL_MD;
  if (!el || !src) return;
  // Bust CDN / browser cache when docs change (GitHub Pages caches ~10 min).
  const bust = window.LEGAL_MD_V || "2";
  const url = src + (src.indexOf("?") >= 0 ? "&" : "?") + "v=" + encodeURIComponent(bust);
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error("Could not load " + src);
    const md = await res.text();
    el.innerHTML = marked.parse(md);
  } catch (e) {
    el.innerHTML = "<p>Could not load this document. Open the matching <code>.md</code> file in the repository.</p>";
  }
})();

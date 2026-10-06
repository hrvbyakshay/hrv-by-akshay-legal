(function () {
  /** GitHub-like slug so TOC anchors match headings. */
  function slugify(text) {
    return String(text || "")
      .trim()
      .toLowerCase()
      .replace(/['"`]/g, "")
      .replace(/[^a-z0-9\s-_]/g, " ")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
  }

  function assignHeadingIds(root) {
    const used = Object.create(null);
    root.querySelectorAll("h1, h2, h3, h4").forEach(function (h) {
      if (h.id) {
        used[h.id] = (used[h.id] || 0) + 1;
        return;
      }
      var base = slugify(h.textContent);
      if (!base) return;
      var id = base;
      var n = used[base] || 0;
      if (n > 0) id = base + "-" + n;
      used[base] = n + 1;
      h.id = id;
    });
  }

  function brandParam() {
    try {
      return new URLSearchParams(window.location.search).get("brand");
    } catch (e) {
      return null;
    }
  }

  function scrollToTarget() {
    var brand = brandParam();
    var hash = (window.location.hash || "").replace(/^#/, "");
    var id = brand ? "brand-" + brand.replace(/^brand-/, "") : hash;
    if (!id) return;
    var el = document.getElementById(id);
    if (!el) {
      // Fallback: try heading slug match
      el = document.getElementById(slugify(id));
    }
    if (!el) return;
    // Highlight brand section briefly
    el.classList.add("anchor-target");
    setTimeout(function () {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 40);
  }

  async function run() {
    var el = document.getElementById("content");
    var src = window.LEGAL_MD;
    if (!el || !src) return;
    // Bust CDN / browser cache when docs change (GitHub Pages caches ~10 min).
    var bust = window.LEGAL_MD_V || "2";
    var url = src + (src.indexOf("?") >= 0 ? "&" : "?") + "v=" + encodeURIComponent(bust);
    try {
      var res = await fetch(url, { cache: "no-store" });
      if (!res.ok) throw new Error("Could not load " + src);
      var md = await res.text();
      el.innerHTML = marked.parse(md);
      assignHeadingIds(el);
      scrollToTarget();
      window.addEventListener("hashchange", scrollToTarget);
    } catch (e) {
      el.innerHTML =
        "<p>Could not load this document. Open the matching <code>.md</code> file in the repository.</p>";
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();

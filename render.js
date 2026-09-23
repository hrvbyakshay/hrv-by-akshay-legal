(async function () {
  const el = document.getElementById("content");
  const src = window.LEGAL_MD;
  if (!el || !src) return;
  try {
    const res = await fetch(src);
    if (!res.ok) throw new Error("Could not load " + src);
    const md = await res.text();
    el.innerHTML = marked.parse(md);
  } catch (e) {
    el.innerHTML = "<p>Could not load this document. Open the matching <code>.md</code> file in the repository.</p>";
  }
})();

(function () {
  const normalize = path =>
    path.replace(/\/+$/, "").replace(/^\/+/, "");

  const current = normalize(window.location.pathname);

  document.querySelectorAll(".nav-links a").forEach(link => {
    const href = link.getAttribute("href");
    if (!href) return;

    const linkPath = normalize(
      new URL(href, window.location.origin).pathname
    );

    if (linkPath === current) {
      link.classList.add("active");
    }
  });
})();

(function () {

  /* =========================
     CHARGEMENT HEADER
     ========================= */

  fetch("/partials/header.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("site-header").innerHTML = html;

      // ⚠️ tout ce qui dépend du header doit être ici
      setActiveNav();
      setupLangSwitch();
    });



  /* =========================
     NAV ACTIVE LINK
     ========================= */

  const normalize = path =>
    path.replace(/\/+$/, "").replace(/^\/+/, "");

  function setActiveNav() {
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
  }



  /* =========================
     LANGUAGE SWITCH
     ========================= */

  function setupLangSwitch() {
    const switcher = document.querySelector(".lang-switch");
    if (!switcher) return;

    const path = window.location.pathname;

    const isEnglish = path.startsWith("/en/");
    const current = path.replace(/^\/en/, "");

    switcher.innerHTML = isEnglish
      ? `<a href="${current}">FR</a> / <a class="active" href="${path}">EN</a>`
      : `<a class="active" href="${path}">FR</a> / <a href="/en${current}">EN</a>`;
  }

})();

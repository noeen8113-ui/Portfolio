/* 1. Texto que se escribe y borra solo (efecto "typing") */
(function () {
  const palabras = ["montar servidores", "cuidar las redes", "defender sistemas", "aprender cada día"];
  const el = document.getElementById("typed");
  let p = 0, c = 0, borrando = false;

  function tick() {
    const palabra = palabras[p];
    el.textContent = palabra.slice(0, c);
    let delay = borrando ? 45 : 90;
    if (!borrando && c === palabra.length) { delay = 1600; borrando = true; }
    else if (borrando && c === 0) { borrando = false; p = (p + 1) % palabras.length; delay = 400; }
    else { c += borrando ? -1 : 1; }
    setTimeout(tick, delay);
  }
  tick();
})();

/* 2. Aparición suave de las tarjetas al hacer scroll */
(function () {
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("visible"); observador.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => observador.observe(el));
})();

/* 3. Botón "volver arriba" que aparece al bajar */
(function () {
  const btn = document.getElementById("topBtn");
  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 400);
  });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
})();

/* 4. Resaltar en el menú la sección que estás viendo */
(function () {
  const enlaces = document.querySelectorAll("nav a");
  const secciones = [...enlaces]
    .map(a => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(e => {
      if (e.isIntersecting) {
        enlaces.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  secciones.forEach(s => observador.observe(s));
})();


/* =========================================================
   Portafolio de Gustavo Quiroz — interacciones
   Cada función se encarga de una sola cosa y se inicia al final.
   ========================================================= */

document.documentElement.classList.add("js");

/** Menú móvil: abrir/cerrar, cerrar con Esc o al elegir una opción. */
function initMobileMenu() {
  const toggle = document.querySelector(".nav__toggle");
  const menu = document.getElementById("menu");
  if (!toggle || !menu) return;

  const setOpen = (open) => {
    menu.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  };

  toggle.addEventListener("click", () => setOpen(!menu.classList.contains("is-open")));
  menu.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menu.classList.contains("is-open")) { setOpen(false); toggle.focus(); }
  });
}

/** Marca en el menú la sección que se está viendo (ninguna mientras estás en el inicio). */
function initActiveSection() {
  const links = [...document.querySelectorAll('.nav__links a[href^="#"]')];
  const sections = links.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  if (!sections.length) return;

  const update = () => {
    const line = window.innerHeight * 0.45; // punto de referencia: un poco antes de la mitad de la pantalla
    let current = null;
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= line) current = section;
    });
    links.forEach((a) => {
      const isActive = current && a.getAttribute("href") === `#${current.id}`;
      if (isActive) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  };

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}

/** Aparición suave de los bloques al hacer scroll. */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { items.forEach((el) => el.classList.add("is-visible")); return; }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); obs.unobserve(entry.target); }
    });
  }, { threshold: 0.12 });

  items.forEach((el) => observer.observe(el));
}

/** Botón "volver arriba": aparece después de bajar un poco. */
function initBackToTop() {
  const button = document.querySelector("[data-to-top]");
  if (!button) return;
  const update = () => button.classList.toggle("is-visible", window.scrollY > 600);
  window.addEventListener("scroll", update, { passive: true });
  update();
}

/** Botón de CV: si el archivo aún no existe, se oculta para no mostrar un enlace roto. */
async function initCvButton() {
  const links = document.querySelectorAll("[data-cv]");
  if (!links.length || location.protocol === "file:") return;
  try {
    const res = await fetch(links[0].getAttribute("href"), { method: "HEAD" });
    if (!res.ok) links.forEach((a) => (a.hidden = true));
  } catch {
    links.forEach((a) => (a.hidden = true));
  }
}

/** Formulario de contacto: valida y envía a Formspree sin recargar la página. */
function initContactForm() {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;
  const status = form.querySelector(".form__status");
  const button = form.querySelector('button[type="submit"]');

  const showStatus = (text, type) => {
    status.textContent = text;
    status.className = `form__status is-${type}`;
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Validación con los atributos del HTML (required, type="email", minlength…)
    let firstInvalid = null;
    form.querySelectorAll("input:not([name='_gotcha']), textarea").forEach((field) => {
      const valid = field.checkValidity();
      field.setAttribute("aria-invalid", String(!valid));
      if (!valid && !firstInvalid) firstInvalid = field;
    });
    if (firstInvalid) {
      showStatus("Revisa los campos marcados: nombre, un correo válido y un mensaje de al menos 10 caracteres.", "error");
      firstInvalid.focus();
      return;
    }

    button.disabled = true;
    showStatus("Enviando…", "ok");

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      form.reset();
      showStatus("¡Gracias! Tu mensaje fue enviado. Te responderé pronto.", "ok");
    } catch {
      showStatus("No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme a gustavodiego550@gmail.com.", "error");
    } finally {
      button.disabled = false;
    }
  });
}

/** Año actual en el pie de página. */
function initYear() {
  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
}

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initActiveSection();
  initReveal();
  initBackToTop();
  initCvButton();
  initContactForm();
  initYear();
});

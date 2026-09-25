document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (toggle) toggle.addEventListener("click", () => nav.classList.toggle("open"));

  document.querySelectorAll(".nav-dropdown .nav-parent").forEach(parent => {
    parent.addEventListener("click", e => {
      if (window.innerWidth <= 900) {
        const wrap = parent.closest(".nav-dropdown");
        if (wrap) { e.preventDefault(); wrap.classList.toggle("open"); }
      }
    });
  });

  const form = document.querySelector("#contactForm");
  const notice = document.querySelector("#formNotice");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      if (notice) {
        notice.style.display = "block";
        notice.textContent = "Thanks — your message is ready to be connected to your preferred email service.";
      }
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const el = document.querySelector(a.getAttribute("href"));
      if (el) { e.preventDefault(); el.scrollIntoView({behavior:"smooth"}); }
    });
  });
});

import "./style.css";
import { initParticles } from "./particles.js";
import { initCursor } from "./cursor.js";
import { initTerminal } from "./terminal.js";
import { initGitHubStats } from "./ghstats.js";
import { initGuestbook } from "./guestbook.js";
import { initContactForm } from "./form.js";
import { renderCarousel } from "./carousel.js";
import { en, ru, t } from "./i18n.js";
import { heroPage } from "./pages/hero.js";
import { bioPage } from "./pages/bio.js";
import { stackPage } from "./pages/stack.js";
import { projectsPage } from "./pages/projects.js";
import { contactPage } from "./pages/contact.js";

const routes = {
  "/": heroPage, "/bio": bioPage, "/stack": stackPage,
  "/projects": projectsPage, "/contact": contactPage,
};

let currentPath = "";
let currentLang = localStorage.getItem("lang") || "en";
let currentTheme = localStorage.getItem("theme") || "dark";
let cleanupParticles = null;
let cleanupCursor = null;

function getPathFromHash() { return window.location.hash.replace(/^#/, "") || "/"; }
function getTranslations() { return currentLang === "ru" ? ru : en; }

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  currentTheme = theme;
  localStorage.setItem("theme", theme);
  const char = theme === "dark" ? "{" : "}";
  document.querySelectorAll("#theme-icon, #theme-icon-mobile").forEach((el) => {
    el.textContent = char;
    el.className = theme === "dark" ? "theme-icon text-lg" : "theme-icon light text-lg";
  });
}

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.langBtn === lang);
  });
  render(currentPath, false);
  const footer = document.getElementById("footer-text");
  if (footer) { const tr = getTranslations(); footer.textContent = tr.common.footer; }
}

function getPageHTML(path) { const route = routes[path] || routes["/"]; return route(getTranslations()); }

function navigate(path) {
  if (!path.startsWith("/")) path = "/" + path;
  if (path === currentPath) return;
  location.hash = "#" + path;
}

async function render(path, animate) {
  const content = document.getElementById("page-content");
  if (!content) return;
  if (animate) {
    content.style.transition = "none";
    content.style.opacity = "0";
    content.style.transform = "translateY(16px) scale(0.97)";
    void content.offsetHeight;
    content.style.transition = "opacity 0.2s ease, transform 0.2s ease";
    await new Promise((r) => setTimeout(r, 200));
  }
  content.innerHTML = getPageHTML(path);
  currentPath = path;
  if (animate) {
    content.style.transition = "opacity 0.55s ease, transform 0.55s cubic-bezier(0.16,1,0.3,1)";
    content.style.opacity = "0";
    content.style.transform = "translateY(16px) scale(0.97)";
    void content.offsetHeight;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        content.style.opacity = "1";
        content.style.transform = "translateY(0) scale(1)";
      });
    });
  }
  if (path === "/") {
    setTimeout(() => initTerminal("terminal-container", currentLang), 300);
    setTimeout(() => initGitHubStats("gh-stats-container"), 500);
  }
  if (path === "/contact") {
    setTimeout(() => initContactForm("contact-form-container", getTranslations()), 200);
    setTimeout(() => initGuestbook("guestbook-container", getTranslations()), 300);
  }
  if (path === "/projects") {
    setTimeout(() => {
      const tr = getTranslations();
      if (tr.projects?.items) renderCarousel("carousel-container", tr.projects.items);
    }, 200);
  }
  updateActiveNav();
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu) mobileMenu.classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
  setTimeout(initScrollReveal, 100);
}

function updateActiveNav() {
  document.querySelectorAll("[data-nav]").forEach((el) => {
    const href = el.getAttribute("href").replace(/^#/, "");
    el.classList.toggle("active", href === currentPath);
  });
}

function handleNavClick(e) {
  const path = e.currentTarget.getAttribute("href").replace(/^#/, "");
  if (path && routes[path]) { e.preventDefault(); navigate(path); }
}

function rebindNavLinks() {
  document.querySelectorAll("[data-nav]").forEach((el) => {
    el.removeEventListener("click", handleNavClick);
    el.addEventListener("click", handleNavClick);
  });
  updateActiveNav();
}

function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll(".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale").forEach((el) => observer.observe(el));
}

function initMobileMenu() {
  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("mobile-menu");
  if (btn && menu) btn.addEventListener("click", () => menu.classList.toggle("hidden"));
}

function initThemeToggle() {
  document.querySelectorAll("#theme-toggle, #theme-toggle-mobile").forEach((btn) => {
    btn.addEventListener("click", () => applyTheme(currentTheme === "dark" ? "light" : "dark"));
  });
}

function initLangToggle() {
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => { const l = btn.dataset.langBtn; if (l && l !== currentLang) applyLang(l); });
  });
}

function initScrollProgress() {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;
  function update() {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = h > 0 ? Math.min((window.scrollY / h) * 100, 100) + "%" : "0%";
  }
  window.addEventListener("scroll", update, { passive: true });
  update();
}

function initCardTilt() {
  document.addEventListener("mousemove", (e) => {
    document.querySelectorAll(".card-tilt").forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2, cy = rect.height / 2;
      const dx = (x - cx) / cx, dy = (y - cy) / cy;
      card.style.transform = `rotateX(${-dy * 8}deg) rotateY(${dx * 8}deg)`;
    });
  });
  document.addEventListener("mouseleave", () => {
    document.querySelectorAll(".card-tilt").forEach((card) => {
      card.style.transform = "";
    });
  });
}

function init() {
  applyTheme(currentTheme);
  applyLang(currentLang);
  cleanupParticles = initParticles();
  cleanupCursor = initCursor();
  initMobileMenu();
  initThemeToggle();
  initLangToggle();
  initScrollProgress();
  initCardTilt();
  const spaPath = sessionStorage.getItem("spa:path");
  if (spaPath) { sessionStorage.removeItem("spa:path"); location.hash = "#" + spaPath; return; }
  currentPath = getPathFromHash();
  render(currentPath, false);
  rebindNavLinks();
  window.addEventListener("hashchange", onHashChange);
}

function onHashChange() { const path = getPathFromHash(); if (path === currentPath) return; render(path, true); }

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
else init();

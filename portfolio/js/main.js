/* ============================================================
   main.js — Portfolio Interactivity
   Features:
   1. Navbar: scroll effect, active link highlight, mobile menu
   2. Typewriter effect
   3. Scroll-reveal animations
   4. Tech Stack accordion (expand/collapse)
   5. Project modal
   6. Smooth scroll for anchor links
============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  /* ──────────────────────────────────────────
     1. NAVBAR
  ────────────────────────────────────────── */
  const navbar    = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navLinks  = document.getElementById("navLinks");
  const allNavLinks = document.querySelectorAll(".nav-link");

  // Scroll → add .scrolled class
  const handleNavScroll = () => {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };
  window.addEventListener("scroll", handleNavScroll, { passive: true });
  handleNavScroll(); // run once on load

  // Mobile hamburger toggle
  hamburger?.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("open");
  });

  // Close mobile menu when a link is clicked
  allNavLinks.forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      navLinks.classList.remove("open");
    });
  });

  // Active nav link on scroll (Intersection Observer per section)
  const sections = document.querySelectorAll("section[id], footer[id]");

  const navObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          allNavLinks.forEach(link => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${id}`
            );
          });
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );

  sections.forEach(sec => navObserver.observe(sec));


  /* ──────────────────────────────────────────
     2. TYPEWRITER EFFECT
  ────────────────────────────────────────── */
  const typewriterEl = document.getElementById("typewriter");
  let twIndex    = 0;
  let charIndex  = 0;
  let isDeleting = false;
  let twTimeout  = null;
  let twLang     = currentLang || "en";

  function getRoles() {
    return typewriterRoles[twLang] || typewriterRoles["en"];
  }

  function typeLoop() {
    const roles       = getRoles();
    const currentRole = roles[twIndex % roles.length];

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    typewriterEl.textContent = currentRole.substring(0, charIndex);

    let delay = isDeleting ? 60 : 110;

    if (!isDeleting && charIndex === currentRole.length) {
      delay = 1800; // pause at full word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      twIndex++;
      delay = 400;
    }

    twTimeout = setTimeout(typeLoop, delay);
  }

  // Start typewriter
  twTimeout = setTimeout(typeLoop, 600);

  // Expose restart function for language switch
  window.restartTypewriter = (lang) => {
    clearTimeout(twTimeout);
    twLang     = lang;
    twIndex    = 0;
    charIndex  = 0;
    isDeleting = false;
    if (typewriterEl) typewriterEl.textContent = "";
    twTimeout  = setTimeout(typeLoop, 400);
  };


  /* ──────────────────────────────────────────
     3. SCROLL REVEAL (Timeline items)
  ────────────────────────────────────────── */
  const revealItems = document.querySelectorAll(".timeline-item");

  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.15 }
  );

  revealItems.forEach(item => revealObserver.observe(item));


  /* ──────────────────────────────────────────
     4. TECH STACK ACCORDION
  ────────────────────────────────────────── */
  const stackBtns = document.querySelectorAll(".stack-cat-btn");

  stackBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      const isOpen = targetEl.classList.contains("open");

      // Close all
      document.querySelectorAll(".stack-category").forEach(cat => {
        cat.classList.remove("open");
      });

      // Toggle clicked (open if it was closed)
      if (!isOpen) {
        targetEl.classList.add("open");
      }
    });
  });

  // Open first category by default
  const firstCat = document.querySelector(".stack-category");
  if (firstCat) firstCat.classList.add("open");


  /* ──────────────────────────────────────────
     5. PROJECT MODAL
  ────────────────────────────────────────── */
  const modalOverlay = document.getElementById("projectModal");
  const modalClose   = document.getElementById("modalClose");

  let activeProjectIndex = null;

  function openModal(index) {
    activeProjectIndex = index;
    const lang = currentLang || "en";
    renderModal(index, lang);
    modalOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modalOverlay.classList.remove("open");
    document.body.style.overflow = "";
    activeProjectIndex = null;
  }

  
function renderModal(index, lang) {
  const data = projectData[lang]?.[index];
  if (!data) return;

  // Project Image
  const imageEl = document.getElementById("modalProjectImage");
  if (imageEl) {
    imageEl.src = data.image || "";
    imageEl.alt = `${data.title} Preview`;
  }

  // Type
  const typeEl = document.getElementById("modalType");
  if (typeEl) typeEl.textContent = data.type;

  // Title
  const titleEl = document.getElementById("modalTitle");
  if (titleEl) titleEl.textContent = data.title;

  // Description
  const descEl = document.getElementById("modalDesc");
  if (descEl) descEl.textContent = data.desc;

  // Features
  const featuresEl = document.getElementById("modalFeatures");
  if (featuresEl) {
    featuresEl.innerHTML = data.features
      .map(f => `<li>${f}</li>`)
      .join("");
  }

  // Tags
  const tagsEl = document.getElementById("modalTags");
  if (tagsEl) {
    tagsEl.innerHTML = data.tags
      .map(t => `<span class="tag">${t}</span>`)
      .join("");
  }

  // Links
  const linksEl = document.getElementById("modalLinks");
  if (linksEl) {
    let linksHtml = "";

    if (data.github) {
      linksHtml += `
        <a href="${data.github}" target="_blank" class="btn btn-outline" rel="noopener">
          <i class="fab fa-github"></i> GitHub
        </a>`;
    }

    if (data.live) {
      linksHtml += `
        <a href="${data.live}" target="_blank" class="btn btn-primary" rel="noopener">
          <i class="fas fa-external-link-alt"></i> Live Demo
        </a>`;
    }

    linksEl.innerHTML = linksHtml;
  }
}


  // Open via card click or "View Details" button
  document.querySelectorAll(".btn-view-project, .project-card").forEach(el => {
    el.addEventListener("click", (e) => {
      // If clicking a project-link anchor inside the card, don't open modal
      if (e.target.closest(".project-links")) return;

      const index = parseInt(el.getAttribute("data-project"), 10);
      if (!isNaN(index)) openModal(index);
    });
  });

  // Prevent modal close when clicking inside modal content
  modalOverlay?.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  modalClose?.addEventListener("click", closeModal);

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("open")) {
      closeModal();
    }
  });

  // Expose for language refresh
  window.refreshOpenModal = (lang) => {
    if (activeProjectIndex !== null && modalOverlay.classList.contains("open")) {
      renderModal(activeProjectIndex, lang);
    }
  };


  /* ──────────────────────────────────────────
     6. SMOOTH SCROLL (fallback for older browsers)
  ────────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (targetId === "#") return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue("--nav-height"),
          10
        ) || 68;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });


  /* ──────────────────────────────────────────
     7. MISC — Close mobile nav on outside click
  ────────────────────────────────────────── */
  document.addEventListener("click", (e) => {
    if (
      navLinks.classList.contains("open") &&
      !navLinks.contains(e.target) &&
      !hamburger.contains(e.target)
    ) {
      hamburger.classList.remove("open");
      navLinks.classList.remove("open");
    }
  });
/* DIGITAL CLOCK */
const clockEl = document.getElementById("digitalClock");

function updateClock() {
  if (!clockEl) return;

  const now = new Date();

  clockEl.textContent = now.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "Asia/Jakarta"
  });
}

updateClock();
setInterval(updateClock, 1000);
});

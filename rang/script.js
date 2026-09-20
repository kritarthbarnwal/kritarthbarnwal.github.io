/* ========================================
   HEADER SCROLL EFFECT
======================================== */

const header = document.querySelector(".site-header");

function handleHeaderScroll() {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", handleHeaderScroll);

handleHeaderScroll();


/* ========================================
   SMOOTH ANCHOR SCROLL
======================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", event => {

    const href = link.getAttribute("href");

    if (!href || href === "#") {
      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

      return;
    }

    const target = document.querySelector(href);

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  });

});


/* ========================================
   MOBILE MENU
======================================== */

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuToggle && mobileMenu) {

  menuToggle.addEventListener("click", () => {

    const isOpen = mobileMenu.classList.toggle("open");

    menuToggle.classList.toggle("active", isOpen);

    menuToggle.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

    document.body.classList.toggle("menu-open", isOpen);

  });


  document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

      mobileMenu.classList.remove("open");
      menuToggle.classList.remove("active");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      document.body.classList.remove("menu-open");

    });

  });

}


/* ========================================
   SCROLL REVEAL
======================================== */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        revealObserver.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);


revealElements.forEach(element => {
  revealObserver.observe(element);
});


/* ========================================
   DISABLE REVEAL FOR REDUCED MOTION
======================================== */

const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);

if (reducedMotion.matches) {

  revealElements.forEach(element => {
    element.classList.add("visible");
  });

}

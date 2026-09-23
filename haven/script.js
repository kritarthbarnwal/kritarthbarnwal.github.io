/* =========================================
   ELARA DENTAL STUDIO
========================================= */


/* =========================================
   HEADER SCROLL EFFECT
========================================= */

const header = document.getElementById("siteHeader");

function updateHeader() {
  if (window.scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", updateHeader);

updateHeader();


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {

  const isOpen = mainNav.classList.toggle("active");

  menuToggle.classList.toggle("active", isOpen);

  menuToggle.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

});


/* Close mobile navigation after clicking a link */

const navLinks = mainNav.querySelectorAll("a");

navLinks.forEach((link) => {

  link.addEventListener("click", () => {

    mainNav.classList.remove("active");

    menuToggle.classList.remove("active");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

  });

});


/* Close menu when clicking outside */

document.addEventListener("click", (event) => {

  const clickedInsideNav =
    mainNav.contains(event.target);

  const clickedMenu =
    menuToggle.contains(event.target);

  if (
    !clickedInsideNav &&
    !clickedMenu &&
    mainNav.classList.contains("active")
  ) {

    mainNav.classList.remove("active");

    menuToggle.classList.remove("active");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

  }

});


/* =========================================
   REVEAL ANIMATIONS
========================================= */

const revealElements =
  document.querySelectorAll(".reveal");

const revealObserver =
  new IntersectionObserver(
    (entries, observer) => {

      entries.forEach((entry) => {

        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);

      });

    },
    {
      threshold: 0.12
    }
  );


revealElements.forEach((element) => {

  revealObserver.observe(element);

});


/* =========================================
   APPOINTMENT DATE
========================================= */

const dateInput =
  document.getElementById("date");

if (dateInput) {

  const today =
    new Date().toISOString().split("T")[0];

  dateInput.min = today;

}


/* =========================================
   APPOINTMENT FORM
========================================= */

const appointmentForm =
  document.getElementById("appointmentForm");

const formSuccess =
  document.getElementById("formSuccess");


appointmentForm.addEventListener(
  "submit",
  (event) => {

    event.preventDefault();

    const formData =
      new FormData(appointmentForm);

    const name =
      formData.get("name");

    const phone =
      formData.get("phone");

    const date =
      formData.get("date");

    const time =
      formData.get("time");

    const service =
      formData.get("service");


    if (
      !name ||
      !phone ||
      !date ||
      !time ||
      !service
    ) {

      return;

    }


    formSuccess.classList.add("active");

    appointmentForm.reset();


    formSuccess.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });


    setTimeout(() => {

      formSuccess.classList.remove("active");

    }, 8000);

  }
);


/* =========================================
   SMOOTH ANCHOR SCROLLING
========================================= */

document
  .querySelectorAll('a[href^="#"]')
  .forEach((link) => {

    link.addEventListener("click", (event) => {

      const targetId =
        link.getAttribute("href");

      if (
        !targetId ||
        targetId === "#"
      ) {
        return;
      }

      const target =
        document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      const headerHeight =
        header.offsetHeight;

      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });

    });

  });


/* =========================================
   FAQ
========================================= */

const faqItems =
  document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

  item.addEventListener("toggle", () => {

    if (!item.open) {
      return;
    }

    faqItems.forEach((otherItem) => {

      if (
        otherItem !== item &&
        otherItem.open
      ) {

        otherItem.open = false;

      }

    });

  });

});


/* =========================================
   IMAGE ERROR HANDLING
========================================= */

document
  .querySelectorAll("img")
  .forEach((image) => {

    image.addEventListener("error", () => {

      image.style.background =
        "linear-gradient(135deg, #dce7df, #f5f2ea)";

      image.style.minHeight = "200px";

    });

  });


/* =========================================
   CURRENT YEAR
========================================= */

const year =
  new Date().getFullYear();

const footerText =
  document.querySelector(".footer-bottom");

if (footerText) {

  footerText.innerHTML =
    footerText.innerHTML.replace(
      "© 2026",
      `© ${year}`
    );

}

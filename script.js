const contactForm = document.getElementById("contact-form");
const reviewForm = document.querySelector(".review-form");


// =========================
// CONTACT FORM
// =========================

if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const status = document.getElementById("form-status");
    const button = contactForm.querySelector("button");

    button.disabled = true;
    button.textContent = "Sending...";

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        status.textContent = "Message sent successfully. I'll get back to you soon.";
        contactForm.reset();
      } else {
        status.textContent = "Something went wrong. Please try again.";
      }

    } catch (error) {
      status.textContent = "Something went wrong. Please try again.";
    }

    button.disabled = false;
    button.textContent = "Send Message ↗";
  });
}


// =========================
// REVIEW FORM
// =========================

if (reviewForm) {
  reviewForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const button = reviewForm.querySelector("button");

    // Create status message if it doesn't exist
    let status = document.getElementById("review-status");

    if (!status) {
      status = document.createElement("p");
      status.id = "review-status";
      status.className = "review-note";

      reviewForm.appendChild(status);
    }

    button.disabled = true;
    button.textContent = "Submitting...";

    try {
      const response = await fetch(reviewForm.action, {
        method: "POST",
        body: new FormData(reviewForm),
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        status.textContent = "Thank you! Your review has been submitted.";
        reviewForm.reset();
      } else {
        status.textContent = "Something went wrong. Please try again.";
      }

    } catch (error) {
      status.textContent = "Something went wrong. Please try again.";
    }

    button.disabled = false;
    button.textContent = "Submit Review ↗";
  });
}

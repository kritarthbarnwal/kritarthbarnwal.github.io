const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const button = form.querySelector("button");
  button.disabled = true;
  button.textContent = "Sending...";

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    });

    if (response.ok) {
      status.textContent = "Message sent! I'll get back to you soon.";
      form.reset();
    } else {
      status.textContent = "Something went wrong. Please try again.";
    }
  } catch {
    status.textContent = "Connection error. Please try again.";
  }

  button.disabled = false;
  button.textContent = "Send Message ↗";
});
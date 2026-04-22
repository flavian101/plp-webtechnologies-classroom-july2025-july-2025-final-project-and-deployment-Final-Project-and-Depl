const form = document.getElementById("contact-form");
const statusEl = document.getElementById("form-status");

function setError(input, message) {
  const small = input.parentElement.querySelector(".error");
  small.textContent = message || "";
  input.setAttribute("aria-invalid", message ? "true" : "false");
}

function clearErrors() {
  form.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
  form
    .querySelectorAll("[aria-invalid]")
    .forEach((el) => el.removeAttribute("aria-invalid"));
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    clearErrors();

    const name = form.name;
    const email = form.email;
    const message = form.message;
    const submitBtn = form.querySelector("[type='submit']");
    let valid = true;

    // ── Validation ────────────────────────────────────────────────
    if (!name.value.trim()) {
      setError(name, "Please enter your name.");
      valid = false;
    }

    if (!email.value.trim() || !isValidEmail(email.value.trim())) {
      setError(email, "Please enter a valid email address.");
      valid = false;
    }

    if (!message.value.trim() || message.value.trim().length < 10) {
      setError(message, "Please write at least 10 characters.");
      valid = false;
    }

    if (!valid) {
      statusEl.textContent = "Please fix the errors above.";
      statusEl.style.color = "#f87171";
      return;
    }

    // ── Submit to Formspree ───────────────────────────────────────
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending…";
    statusEl.textContent = "";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (response.ok) {
        statusEl.textContent =
          "Thanks! Your message has been sent. I'll get back to you soon.";
        statusEl.style.color = "#34d399";
        form.reset();
      } else {
        const data = await response.json();
        // Formspree returns field-level errors in data.errors
        if (data?.errors) {
          const msg = data.errors.map((err) => err.message).join(", ");
          statusEl.textContent = `Submission error: ${msg}`;
        } else {
          statusEl.textContent = "Something went wrong. Please try again.";
        }
        statusEl.style.color = "#f87171";
      }
    } catch {
      statusEl.textContent =
        "Network error. Please check your connection and try again.";
      statusEl.style.color = "#f87171";
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send message";
    }
  });
}

// Client-side validation for Contact form

const form = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');

function setError(input, message) {
  const small = input.parentElement.querySelector('.error');
  small.textContent = message || '';
  input.setAttribute('aria-invalid', message ? 'true' : 'false');
}

function isValidEmail(email) {
  // Simple, readable email pattern
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();

    const name = form.name;
    const email = form.email;
    const message = form.message;

    let valid = true;

    if (!name.value.trim()) {
      setError(name, 'Please enter your name.');
      valid = false;
    } else {
      setError(name);
    }

    if (!email.value.trim() || !isValidEmail(email.value.trim())) {
      setError(email, 'Please enter a valid email address.');
      valid = false;
    } else {
      setError(email);
    }

    if (!message.value.trim() || message.value.trim().length < 10) {
      setError(message, 'Please write at least 10 characters.');
      valid = false;
    } else {
      setError(message);
    }

    if (!valid) {
      statusEl.textContent = 'Please fix the errors above.';
      statusEl.style.color = '#ff6b6b';
      return;
    }

    // Simulate submission (since no backend). In production, integrate an endpoint.
    statusEl.textContent = 'Thanks! Your message has been sent (demo).';
    statusEl.style.color = '#7aa2ff';
    form.reset();
  });
}
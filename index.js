const form = document.querySelector('form#contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('input[name="name"]');
    const email = form.querySelector('input[name="email"]');
    const message = form.querySelector('textarea[name="message"]');
    let valid = true;
    if (!name.value.trim()) {
      alert('Please enter your name.');
      valid = false;
      name.focus();
    } else if (!email.value.trim() || !validateEmail(email.value)) {
      alert('Please enter a valid email.');
      valid = false;
      email.focus();
    } else if (!message.value.trim()) {
      alert('Please enter your message.');
      valid = false;
      message.focus();
    }
    if (valid) {
      alert('Thank you for contacting us! We will get back to you soon.');
      form.reset();
    }
  });
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}
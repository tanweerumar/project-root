// Dark/Light mode toggle
function toggleTheme() {
  document.body.classList.toggle('dark');
  // Optional: save preference to localStorage
  if(document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}

// On page load: apply saved theme if any
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('theme');
  if(saved === 'dark') {
    document.body.classList.add('dark');
  }

  // Form validation
  const form = document.querySelector('form');
  if(form) {
    form.addEventListener('submit', validateForm);
  }
});

function validateForm(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name) {
    alert("Please enter your name.");
    document.getElementById('name').focus();
    return false;
  }
  if (!email || !emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    document.getElementById('email').focus();
    return false;
  }
  if (!message || message.length < 10) {
    alert("Message must be at least 10 characters.");
    document.getElementById('message').focus();
    return false;
  }

  alert(`Thanks, ${name}! We'll be in touch.`);
  event.target.reset();
  return true;
}

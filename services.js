// Smooth scroll for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Mobile menu toggle (if you add a burger icon)
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav ul');

if (burger && nav) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
  });
}
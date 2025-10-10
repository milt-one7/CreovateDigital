// Smooth scroll for CTA button
document.querySelector('.cta-btn')?.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('.services-preview')?.scrollIntoView({ behavior: 'smooth' });
});

// Scroll animation for service cards
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  },
  { threshold: 0.2 }
);
cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = 'translateY(30px)';
  observer.observe(card);
});

// Mobile nav toggle
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
menuBtn?.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Hero text fade-in animation
window.addEventListener('load', () => {
  const heroText = document.querySelector('.hero-text');
  if (heroText) {
    heroText.style.opacity = 1;
    heroText.style.transform = 'translateY(0)';
  }
});
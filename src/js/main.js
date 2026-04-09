/* ─── GLOBAL UTILITIES ─── */

document.addEventListener('DOMContentLoaded', () => {
  // Fade-up observer common to all pages
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.fade-up').forEach(el => {
    observer.observe(el);
  });
});

// script.js - Optimización de Rendimiento para EDITABLE
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.15, // Se activa cuando el 15% del elemento es visible
  };

  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        // Una vez revelado, dejamos de observarlo para ahorrar recursos
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Seleccionamos todos los elementos con la clase .reveal
  const elementsToReveal = document.querySelectorAll(".reveal");
  elementsToReveal.forEach((el) => revealOnScroll.observe(el));
});

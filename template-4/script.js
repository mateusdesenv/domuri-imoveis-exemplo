// Parallax + revelar elementos ao rolar
(function () {
  const parallaxElements = document.querySelectorAll("[data-parallax]");
  const revealElements = document.querySelectorAll("[data-reveal]");

  function updateParallax() {
    const winH = window.innerHeight;
    parallaxElements.forEach((el) => {
      const rate = parseFloat(el.dataset.parallax);
      const parent = el.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const total = winH + rect.height;
      const progress = (winH - rect.top) / total;
      const maxOffset = rect.height * rate;
      const offset = (progress - 0.5) * 2 * maxOffset;
      el.style.transform = `translate3d(0, ${-offset}px, 0) scale(1.08)`;
    });
  }

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateParallax();
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );

  updateParallax();
})();

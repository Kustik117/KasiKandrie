// ============================================
// KASI KANDRIERA — появление блоков при скролле
// ============================================

(function () {
  'use strict';

  const revealElements = document.querySelectorAll('.reveal');

  // Если IntersectionObserver не поддерживается — показываем всё сразу
  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Небольшая задержка между элементами внутри одного экрана
        const delay = index * 120;
        setTimeout(() => {
          entry.target.classList.add('is-visible');
        }, delay);

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
})();
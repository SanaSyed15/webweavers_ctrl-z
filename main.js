document.addEventListener("DOMContentLoaded", () => {
  // --- Mobile Navigation Toggle ---
  const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  const mainNav = document.querySelector(".main-nav");
  if (mobileNavToggle && mainNav) {
    mobileNavToggle.addEventListener("click", () => {
      mainNav.classList.toggle("is-open");
    });
  }

  // --- Scroll-triggered Animations (staggered) ---
  const scrollElements = document.querySelectorAll(".animate-on-scroll");
  function elementInView(el, dividend = 1) {
    return el.getBoundingClientRect().top <= (window.innerHeight / dividend);
  }
  function displayScrollElement(element, index) {
    setTimeout(() => { element.classList.add("is-visible"); }, index * 100);
  }
  function handleScrollAnimation() {
    scrollElements.forEach((el, idx) => {
      if (elementInView(el, 1.25) && !el.classList.contains("is-visible")) {
        displayScrollElement(el, idx);
      }
    });
  }
  window.addEventListener("scroll", handleScrollAnimation);
  handleScrollAnimation();

  // --- Dynamic Header Background ---
  const header = document.querySelector('.site-header');
  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 100) {
      header.style.background = "rgba(255,255,255,0.98)";
      header.style.boxShadow = "0 4px 25px rgba(0,0,0,0.15)";
    } else {
      header.style.background = "rgba(255,255,255,0.95)";
      header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.10)";
    }
  });

  // --- Button Ripple Effect ---
  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function (e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      ripple.classList.add('ripple');
      ripple.style.width = ripple.style.height = size + "px";
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
});

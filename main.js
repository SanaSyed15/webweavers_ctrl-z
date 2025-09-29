document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  const mainNav = document.querySelector(".main-nav");
  if (mobileNavToggle && mainNav) {
    mobileNavToggle.addEventListener("click", () => {
      mainNav.classList.toggle("is-open");
    });
  }

  // Scroll-triggered animation with stagger and easing
  const scrollElements = document.querySelectorAll(".animate-on-scroll");
  const handleScrollAnimation = () => {
    scrollElements.forEach((el, idx) => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.8 && !el.classList.contains("is-visible")) {
        setTimeout(() => el.classList.add("is-visible"), idx * 120);
      }
    });
  };
  window.addEventListener("scroll", handleScrollAnimation);
  handleScrollAnimation();

  // Dynamic Header
  const header = document.querySelector('.site-header');
  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 100) {
      header.style.background = "rgba(255,255,255,0.98)";
      header.style.backdropFilter = "blur(15px)";
      header.style.boxShadow = "0 12px 40px rgba(0,0,0,0.18)";
    } else {
      header.style.background = "rgba(255,255,255,0.95)";
      header.style.backdropFilter = "blur(0)";
      header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.1)";
    }
  });

  // Buttons ripple effect
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

  // 3D tilt effect on about-section cards
  const tiltElements = document.querySelectorAll('.about-section');
  tiltElements.forEach(el => {
    el.addEventListener('mousemove', e => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = (-y / rect.height) * 15; // max 15deg
      const rotateY = (x / rect.width) * 15;
      el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = "";
    });
  });
});

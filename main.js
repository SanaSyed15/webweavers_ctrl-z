document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Navigation Toggle ---
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', () => {
            mainNav.classList.toggle('is-open');
        });
    }

    // --- Enhanced Typewriter Effect ---
    const h1 = document.querySelector('.hero h1');
    if (h1) {
        const typewriterSpan = h1.querySelector('.typewriter');
        const text = h1.getAttribute('data-text') || 'Advancing Technology for Humanity';
        
        if (typewriterSpan) {
            let index = 0;
            typewriterSpan.textContent = '';
            
            const typeChar = () => {
                if (index < text.length) {
                    typewriterSpan.textContent += text.charAt(index);
                    index++;
                    setTimeout(typeChar, 100);
                }
            };
            
            setTimeout(typeChar, 500);
        }
    }
    
    // --- Enhanced Particle System ---
    const particlesContainer = document.querySelector('.particles');
    if (particlesContainer) {
        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');

            const size = Math.random() * 6 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.animationDuration = `${Math.random() * 20 + 15}s`;
            particle.style.animationDelay = `${Math.random() * 30}s`;

            particlesContainer.appendChild(particle);
        }
    }

    // --- Scroll-triggered Animations with Stagger ---
    const scrollElements = document.querySelectorAll('.animate-on-scroll');
    
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
    };

    const displayScrollElement = (element, index) => {
        setTimeout(() => {
            element.classList.add('is-visible');
        }, index * 100);
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el, index) => {
            if (elementInView(el, 1.25) && !el.classList.contains('is-visible')) {
                displayScrollElement(el, index);
            }
        });
    };

    // --- Dynamic Header Background ---
    const header = document.querySelector('.site-header');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 4px 25px rgba(0,0,0,0.15)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        }
        
        handleScrollAnimation();
    });

    // --- Button Ripple Effects ---
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // --- Smooth Scrolling ---
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    handleScrollAnimation();
});

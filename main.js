/* 
   LuxeHome Interactivity & Mobile Logic
*/

document.addEventListener('DOMContentLoaded', () => {
    // 1. Handle Scroll Effects for Header
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply reveal animation to elements
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 3. Subtle Mouse Parallax for Hero
    const hero = document.getElementById('hero');
    if (hero && window.innerWidth > 1024) {
        hero.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const moveX = (clientX - window.innerWidth / 2) / 60;
            const moveY = (clientY - window.innerHeight / 2) / 60;

            const overlay = document.querySelector('.hero-background-overlay');
            if (overlay) {
                overlay.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
            }
        });
    }

    // 4. Mobile Menu Simulation (Simplistic)
    const mobileBtn = document.getElementById('mobile-cta');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            mobileBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            mobileBtn.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // 5. Smooth Internal Links for Single Page Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

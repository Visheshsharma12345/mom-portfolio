// GSAP Animations for advanced effects
window.addEventListener('DOMContentLoaded', () => {
    // Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animate sections on scroll with stagger effect
    gsap.utils.toArray('.cyber-section').forEach((section, i) => {
        gsap.from(section, {
            y: 80,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            delay: 0.2 + i * 0.2
        });
    });

    // Animate nav links with stagger
    gsap.from('.header-nav li', {
        y: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        delay: 0.7
    });

    // Animate social icons
    gsap.from('.social-icon', {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        delay: 1
    });

    // Animate LIC logo
    gsap.to('.lic-logo', {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
    });
});

// Glitch effect (extra cyberpunk)
setInterval(() => {
    const glitch = document.querySelector('.glitch');
    if (glitch) {
        glitch.style.transform = `translate(${Math.random()*4-2}px, ${Math.random()*4-2}px)`;
    }
    setTimeout(() => {
        if (glitch) glitch.style.transform = '';
    }, 80);
}, 600);

// Language Switcher with smooth transition
function setLanguage(lang) {
    try {
        gsap.to('[data-en]', {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
                document.querySelectorAll('[data-en]').forEach(el => {
                    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                        el.placeholder = el.getAttribute('data-' + lang) || el.placeholder;
                    } else if (el.tagName === 'BUTTON') {
                        el.textContent = el.getAttribute('data-' + lang) || el.textContent;
                    } else {
                        el.textContent = el.getAttribute('data-' + lang) || el.textContent;
                    }
                });
                gsap.to('[data-en]', {
                    opacity: 1,
                    duration: 0.3
                });
            }
        });

        document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.getElementById('lang-' + lang);
        if (activeBtn) {
            activeBtn.classList.add('active');
        }
    } catch (error) {
        console.error('Error switching language:', error);
    }
}

// Add event listeners for language switching
const langEnBtn = document.getElementById('lang-en');
const langHiBtn = document.getElementById('lang-hi');

if (langEnBtn) {
    langEnBtn.addEventListener('click', () => setLanguage('en'));
}
if (langHiBtn) {
    langHiBtn.addEventListener('click', () => setLanguage('hi'));
}

// Mobile navigation toggle with animation
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileNavMenu = document.querySelector('.mobile-nav-menu');

if (hamburgerMenu && mobileNavMenu) {
    hamburgerMenu.addEventListener('click', () => {
        mobileNavMenu.classList.toggle('active');
        document.body.classList.toggle('mobile-nav-open');
        
        // Animate mobile menu items
        if (mobileNavMenu.classList.contains('active')) {
            gsap.from('.mobile-nav-menu li', {
                x: -50,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: 'power2.out'
            });
        }
    });

    // Close mobile nav when a link is clicked
    document.querySelectorAll('.mobile-nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNavMenu.classList.remove('active');
            document.body.classList.remove('mobile-nav-open');
        });
    });
}

// Form submission handling with animation
const contactForm = document.getElementById('contactForm');
const beemaInterestForm = document.getElementById('beemaInterestForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const button = contactForm.querySelector('button');
        gsap.to(button, {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1
        });
        // Add your form submission logic here
        console.log('Contact form submitted');
    });
}

if (beemaInterestForm) {
    beemaInterestForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const button = beemaInterestForm.querySelector('button');
        gsap.to(button, {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1
        });
        // Add your form submission logic here
        console.log('Beema interest form submitted');
    });
} 

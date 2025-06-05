// GSAP Animations for advanced effects
window.addEventListener('DOMContentLoaded', () => {
    // Animate LIC logo
    gsap.from('.lic-logo', {
        y: -80,
        opacity: 0,
        duration: 1.2,
        ease: 'bounce.out',
        delay: 0.2
    });

    // Animate glitch header
    gsap.from('.glitch', {
        scale: 0.7,
        opacity: 0,
        duration: 1.1,
        ease: 'elastic.out(1, 0.5)',
        delay: 0.5
    });

    // Animate sections on scroll
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

    // Animate nav links
    gsap.from('.header-nav li', {
        y: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        delay: 0.7
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

// Language Switcher
function setLanguage(lang) {
    try {
        document.querySelectorAll('[data-en]').forEach(el => {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = el.getAttribute('data-' + lang) || el.placeholder;
            } else if (el.tagName === 'BUTTON') {
                el.textContent = el.getAttribute('data-' + lang) || el.textContent;
            } else {
                el.textContent = el.getAttribute('data-' + lang) || el.textContent;
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

// Mobile navigation toggle
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileNavMenu = document.querySelector('.mobile-nav-menu');

if (hamburgerMenu && mobileNavMenu) {
    hamburgerMenu.addEventListener('click', () => {
        mobileNavMenu.classList.toggle('active');
        document.body.classList.toggle('mobile-nav-open');
    });

    // Close mobile nav when a link is clicked
    document.querySelectorAll('.mobile-nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNavMenu.classList.remove('active');
            document.body.classList.remove('mobile-nav-open');
        });
    });
}

// Form submission handling
const contactForm = document.getElementById('contactForm');
const beemaInterestForm = document.getElementById('beemaInterestForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Contact form submitted');
    });
}

if (beemaInterestForm) {
    beemaInterestForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Beema interest form submitted');
    });
} 

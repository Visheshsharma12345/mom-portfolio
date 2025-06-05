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

    // Enhanced testimonials animations with visibility fix
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    // Ensure testimonials are visible initially
    gsap.set(testimonialCards, {
        opacity: 1,
        y: 0
    });

    // Initial animation for all cards with visibility check
    function initializeTestimonials() {
        gsap.from(testimonialCards, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: {
                amount: 0.8,
                from: "start"
            },
            ease: "power2.out",
            scrollTrigger: {
                trigger: "#testimonials",
                start: "top 90%",
                toggleActions: "play none none reverse",
                once: true,
                onEnter: () => {
                    // Ensure cards are visible when entering viewport
                    gsap.set(testimonialCards, { opacity: 1 });
                }
            }
        });
    }

    // Initialize testimonials immediately and after page load
    initializeTestimonials();
    window.addEventListener('load', initializeTestimonials);

    // Add continuous animations for each card
    testimonialCards.forEach((card, index) => {
        // Initial state with visibility
        gsap.set(card, {
            y: 0,
            scale: 1,
            rotation: 0,
            opacity: 1
        });

        // Hover animation
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.03,
                y: -10,
                rotation: 0.5,
                duration: 0.3,
                ease: "power2.out",
                boxShadow: "0 8px 25px rgba(0, 255, 234, 0.2)"
            });

            // Animate content
            gsap.to(card.querySelector('.testimonial-content'), {
                y: -5,
                duration: 0.2,
                ease: "power2.out"
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                y: 0,
                rotation: 0,
                duration: 0.3,
                ease: "power2.out",
                boxShadow: "0 4px 15px rgba(0, 255, 234, 0.1)"
            });

            // Reset content position
            gsap.to(card.querySelector('.testimonial-content'), {
                y: 0,
                duration: 0.2,
                ease: "power2.out"
            });
        });

        // Add floating animation with faster timing
        gsap.to(card, {
            y: -5,
            duration: 1.5 + index * 0.1,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: index * 0.05
        });

        // Animate testimonial content with visibility check
        const content = card.querySelector('.testimonial-content');
        gsap.from(content, {
            opacity: 0,
            y: 20,
            duration: 0.6,
            delay: 0.1 + index * 0.05,
            scrollTrigger: {
                trigger: content,
                start: "top 95%",
                toggleActions: "play none none reverse",
                once: true,
                onEnter: () => {
                    gsap.set(content, { opacity: 1 });
                }
            }
        });

        // Animate author information with visibility check
        const author = card.querySelector('.testimonial-author');
        gsap.from(author, {
            opacity: 0,
            x: -20,
            duration: 0.4,
            delay: 0.2 + index * 0.05,
            scrollTrigger: {
                trigger: author,
                start: "top 95%",
                toggleActions: "play none none reverse",
                once: true,
                onEnter: () => {
                    gsap.set(author, { opacity: 1 });
                }
            }
        });
    });

    // Add scroll-triggered animations for testimonial section with visibility check
    gsap.from("#testimonials .section-title", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        scrollTrigger: {
            trigger: "#testimonials",
            start: "top 90%",
            toggleActions: "play none none reverse",
            once: true,
            onEnter: () => {
                gsap.set("#testimonials .section-title", { opacity: 1 });
            }
        }
    });

    // Add a subtle glow effect on hover with faster timing
    testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                boxShadow: "0 0 30px rgba(0, 255, 234, 0.3)",
                duration: 0.2,
                ease: "power2.out"
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                boxShadow: "0 4px 15px rgba(0, 255, 234, 0.1)",
                duration: 0.2,
                ease: "power2.out"
            });
        });
    });

    // Ensure testimonials are visible after page load
    window.addEventListener('load', () => {
        gsap.set(testimonialCards, { opacity: 1 });
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

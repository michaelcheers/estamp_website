// E-Stamp Website Animations
// Using GSAP for smooth, performant animations

document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Initialize all animations
    initNavigation();
    initHeroAnimations();
    initScrollAnimations();
    initCounterAnimations();
    initFormHandling();
    initMobileMenu();
});

// Navigation effects
function initNavigation() {
    const navbar = document.querySelector('.navbar');

    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = target.offsetTop - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const mobileMenu = document.querySelector('.nav-links');
                if (mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                }
            }
        });
    });

    // Active nav link highlighting
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        let current = '';
        const navHeight = navbar.offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Hero section animations
function initHeroAnimations() {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from('.hero h1', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2
    })
    .from('.hero-subtitle', {
        opacity: 0,
        y: 20,
        duration: 0.6
    }, '-=0.4')
    .from('.hero-stat', {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1
    }, '-=0.3')
    .fromTo('.hero-cta .btn-primary',
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5 },
        '-=0.2'
    )
    .fromTo('.hero-cta .btn-secondary',
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5 },
        '-=0.3'
    )
    .from('.hero-trusted', {
        opacity: 0,
        y: 20,
        duration: 0.6
    }, '-=0.2');

    // Animate hero visual
    gsap.fromTo('.hero-visual',
        { opacity: 0, scale: 0.9 },
        { opacity: 0.4, scale: 1, duration: 1, delay: 0.5, ease: 'power2.out' }
    );

    // Subtle floating animation for stamp demo
    gsap.to('.stamp-demo', {
        y: 15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
}

// Scroll-triggered animations
function initScrollAnimations() {
    // Trust bar
    gsap.from('.trust-bar .container > *', {
        scrollTrigger: {
            trigger: '.trust-bar',
            start: 'top 90%'
        },
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1
    });

    // Section headers
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header.children, {
            scrollTrigger: {
                trigger: header,
                start: 'top 85%'
            },
            opacity: 0,
            y: 30,
            duration: 0.6,
            stagger: 0.15
        });
    });

    // Problem cards
    gsap.utils.toArray('.problem-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 90%'
            },
            opacity: 0,
            y: 40,
            duration: 0.6,
            delay: i * 0.1
        });
    });

    // Flow steps
    gsap.from('.flow-step', {
        scrollTrigger: {
            trigger: '.verification-flow',
            start: 'top 80%'
        },
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.2
    });

    gsap.from('.flow-arrow', {
        scrollTrigger: {
            trigger: '.verification-flow',
            start: 'top 80%'
        },
        opacity: 0,
        scale: 0,
        duration: 0.3,
        stagger: 0.2,
        delay: 0.3
    });

    // Benefit items
    gsap.utils.toArray('.benefit-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 90%'
            },
            opacity: 0,
            x: -30,
            duration: 0.5,
            delay: i * 0.1
        });
    });

    // Feature cards
    gsap.utils.toArray('.feature-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 90%'
            },
            opacity: 0,
            y: 40,
            duration: 0.6,
            delay: (i % 3) * 0.1
        });
    });

    // Deployment cards
    gsap.fromTo('.deployment-card',
        { opacity: 0, y: 40 },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.deployments-grid',
                start: 'top 80%'
            }
        }
    );

    // Global content
    gsap.from('.global-problem, .global-vision', {
        scrollTrigger: {
            trigger: '.global-content',
            start: 'top 80%'
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.2
    });

    // Region cards
    gsap.from('.region', {
        scrollTrigger: {
            trigger: '.regions-grid',
            start: 'top 85%'
        },
        opacity: 0,
        scale: 0.9,
        duration: 0.4,
        stagger: 0.1
    });

    // Use case cards
    gsap.utils.toArray('.use-case').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 90%'
            },
            opacity: 0,
            y: 40,
            duration: 0.6,
            delay: (i % 2) * 0.15
        });
    });

    // CTA section
    gsap.from('.cta-content > *', {
        scrollTrigger: {
            trigger: '.section-cta',
            start: 'top 75%'
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.15
    });

    gsap.from('.contact-form', {
        scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 85%'
        },
        opacity: 0,
        y: 40,
        duration: 0.8
    });
}

// Counter animations for stats
function initCounterAnimations() {
    const stats = document.querySelectorAll('.hero-stat .stat-number');

    stats.forEach(stat => {
        const text = stat.textContent.trim();
        const hasPlus = text.includes('+');
        const numericValue = parseInt(text.replace(/[^0-9]/g, ''));

        if (!isNaN(numericValue) && numericValue > 10) {
            // Store original text and set starting value
            const finalValue = numericValue;
            let currentValue = { val: 0 };

            gsap.to(currentValue, {
                val: finalValue,
                duration: 2,
                delay: 0.5,
                ease: 'power2.out',
                onUpdate: function() {
                    const displayVal = Math.round(currentValue.val);
                    stat.textContent = displayVal.toLocaleString() + (hasPlus ? '+' : '');
                },
                onComplete: function() {
                    stat.textContent = text;
                }
            });
        }
    });

    // Deployment stats animation - trigger on the grid, animate all at once
    ScrollTrigger.create({
        trigger: '.deployments-grid',
        start: 'top 80%',
        onEnter: () => {
            gsap.utils.toArray('.dep-number').forEach(stat => {
                const text = stat.textContent.trim();
                const hasPlus = text.includes('+');
                const numericValue = parseInt(text.replace(/[^0-9]/g, ''));

                if (!isNaN(numericValue)) {
                    let currentValue = { val: 0 };
                    gsap.to(currentValue, {
                        val: numericValue,
                        duration: 1.5,
                        ease: 'power2.out',
                        onUpdate: function() {
                            stat.textContent = Math.round(currentValue.val) + (hasPlus ? '+' : '');
                        },
                        onComplete: function() {
                            stat.textContent = text;
                        }
                    });
                }
            });
        },
        once: true
    });
}

// Form handling
function initFormHandling() {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');

    if (!form) return;

    const submitBtn = form.querySelector('.btn-submit');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const originalText = submitBtn.textContent;

        // Show loading state
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Clear previous status
        status.className = 'form-status';
        status.textContent = '';

        // Collect form data - map to API fields
        const org = form.organization ? form.organization.value.trim() : '';
        const role = form.role ? form.role.value.trim() : '';
        const reasonParts = [org, role].filter(Boolean);
        const formData = {
            name: form.name.value.trim(),
            email: form.email.value.trim(),
            reason: reasonParts.join(' - ') || '',
            message: form.message.value.trim() + '\n\n[Sent from LynxSeal.com]'
        };

        // Basic validation
        if (!formData.name || !formData.email) {
            showStatus('error', 'Please fill in all required fields.');
            resetSubmitButton();
            return;
        }

        try {
            const response = await fetch('https://plugin.supertranslations.com/api/contact?source=portfolio', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok && result.success) {
                showStatus('success', result.message);
                form.reset();
            } else {
                showStatus('error', result.message || 'An error occurred. Please try again.');
            }
        } catch (error) {
            console.error('Contact form error:', error);
            showStatus('error', 'An error occurred. Please try again later.');
        }

        resetSubmitButton();

        // Hide status after 5 seconds
        setTimeout(() => {
            gsap.to(status, {
                opacity: 0,
                duration: 0.3,
                onComplete: () => {
                    status.className = 'form-status';
                    status.style.opacity = '';
                }
            });
        }, 5000);
    });

    function showStatus(type, message) {
        status.className = `form-status ${type}`;
        status.textContent = message;
        gsap.from(status, {
            opacity: 0,
            y: -10,
            duration: 0.4
        });
    }

    function resetSubmitButton() {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
    }

    // Input focus animations
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            gsap.to(input, {
                scale: 1.01,
                duration: 0.2
            });
        });

        input.addEventListener('blur', () => {
            gsap.to(input, {
                scale: 1,
                duration: 0.2
            });
        });
    });
}

// Mobile menu
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (!menuBtn || !navLinks) return;

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuBtn.classList.toggle('active');

        // Animate menu button
        const spans = menuBtn.querySelectorAll('span');
        if (menuBtn.classList.contains('active')) {
            gsap.to(spans[0], { rotation: 45, y: 7, duration: 0.3 });
            gsap.to(spans[1], { opacity: 0, duration: 0.2 });
            gsap.to(spans[2], { rotation: -45, y: -7, duration: 0.3 });
        } else {
            gsap.to(spans[0], { rotation: 0, y: 0, duration: 0.3 });
            gsap.to(spans[1], { opacity: 1, duration: 0.2 });
            gsap.to(spans[2], { rotation: 0, y: 0, duration: 0.3 });
        }
    });
}

// Add mobile menu styles dynamically
const mobileMenuStyles = document.createElement('style');
mobileMenuStyles.textContent = `
    @media (max-width: 768px) {
        .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(15, 23, 42, 0.98);
            flex-direction: column;
            padding: 20px;
            gap: 8px;
            display: none;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav-links.active {
            display: flex;
        }

        .nav-links a {
            width: 100%;
            text-align: center;
            padding: 12px 16px;
        }

        .nav-links .nav-cta {
            margin-top: 8px;
        }
    }
`;
document.head.appendChild(mobileMenuStyles);

// Hover effects for cards
document.querySelectorAll('.problem-card, .feature-card, .deployment-card, .use-case').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            y: -4,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Button hover effects
document.querySelectorAll('.btn-primary, .btn-secondary, .btn-submit').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        gsap.to(btn, {
            scale: 1.02,
            duration: 0.2
        });
    });

    btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
            scale: 1,
            duration: 0.2
        });
    });
});

// Parallax effect for hero background pattern
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroPattern = document.querySelector('.hero-bg-pattern');
    if (heroPattern && scrollY < window.innerHeight) {
        heroPattern.style.transform = `translateY(${scrollY * 0.3}px)`;
    }
});

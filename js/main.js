// Main JavaScript for Emoji Language Research Website

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animation classes to elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.card, .feature, .key-finding');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('fade-in');
            }
        });
    };

    // Run animation check on load and scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);

    // Mobile navigation toggle
    const createMobileNav = function() {
        const header = document.querySelector('header');
        const navMenu = document.querySelector('.nav-menu');
        
        if (header && navMenu && !document.querySelector('.mobile-toggle')) {
            const mobileToggle = document.createElement('button');
            mobileToggle.classList.add('mobile-toggle');
            mobileToggle.innerHTML = '☰';
            mobileToggle.setAttribute('aria-label', 'Toggle navigation menu');
            
            mobileToggle.addEventListener('click', function() {
                navMenu.classList.toggle('active');
                this.innerHTML = navMenu.classList.contains('active') ? '✕' : '☰';
            });
            
            header.querySelector('.header-container').insertBefore(
                mobileToggle, 
                navMenu
            );
            
            // Add mobile styles if not already in the CSS
            if (!document.querySelector('#mobile-styles')) {
                const mobileStyles = document.createElement('style');
                mobileStyles.id = 'mobile-styles';
                mobileStyles.textContent = `
                    @media (max-width: 768px) {
                        .mobile-toggle {
                            display: block;
                            background: none;
                            border: none;
                            color: white;
                            font-size: 1.5rem;
                            cursor: pointer;
                        }
                        .nav-menu {
                            display: none;
                            flex-direction: column;
                            width: 100%;
                            text-align: center;
                            margin-top: 1rem;
                        }
                        .nav-menu.active {
                            display: flex;
                        }
                        .nav-menu li {
                            margin: 0.5rem 0;
                        }
                    }
                    @media (min-width: 769px) {
                        .mobile-toggle {
                            display: none;
                        }
                    }
                `;
                document.head.appendChild(mobileStyles);
            }
        }
    };

    // Check if we need mobile navigation
    if (window.innerWidth <= 768) {
        createMobileNav();
    }

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            createMobileNav();
        }
    });

    // Emoji animation for the hero section
    const emojiDisplay = document.querySelector('.emoji-display');
    if (emojiDisplay) {
        const emojis = emojiDisplay.textContent.split(' ');
        emojiDisplay.innerHTML = '';
        
        emojis.forEach((emoji, index) => {
            const span = document.createElement('span');
            span.textContent = emoji;
            span.style.opacity = '0';
            span.style.transform = 'translateY(20px)';
            span.style.transition = 'all 0.5s ease';
            span.style.transitionDelay = `${index * 0.2}s`;
            emojiDisplay.appendChild(span);
            
            // Add a space after each emoji except the last one
            if (index < emojis.length - 1) {
                emojiDisplay.appendChild(document.createTextNode(' '));
            }
        });
        
        // Trigger animation after a short delay
        setTimeout(() => {
            const spans = emojiDisplay.querySelectorAll('span');
            spans.forEach(span => {
                span.style.opacity = '1';
                span.style.transform = 'translateY(0)';
            });
        }, 300);
    }
});

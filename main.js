document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');
    const container = document.querySelector('.container');

    // Update active nav link based on scroll
    container.addEventListener('scroll', () => {
        let current = '';
        const scrollPositions = Array.from(sections).map(section => {
            return {
                id: section.getAttribute('id'),
                offset: section.offsetTop,
                height: section.offsetHeight
            };
        });

        const currentScroll = container.scrollTop + container.clientHeight / 2;

        scrollPositions.forEach(pos => {
            if (currentScroll >= pos.offset && currentScroll < pos.offset + pos.height) {
                current = pos.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Handle smooth scrolling for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                container.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Handle form submission to prevent page reload
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Just clear the form for now
            contactForm.reset();
            alert('Message sent successfully!');
        });
    }

    // Parallax
    const parallaxImages = document.querySelectorAll('.parallax-img');
    container.addEventListener('scroll', () => {
        window.requestAnimationFrame(() => {
            parallaxImages.forEach(img => {
                const rect = img.parentElement.getBoundingClientRect();
                const offset = (rect.top + rect.height/2 - window.innerHeight/2) * 0.15;
                img.style.transform = `translateY(${offset}px)`;
            });
        });
    });

    // Text Scramble
    const title = document.getElementById('name-title');
    if (title) {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const originalText = title.dataset.value;
        
        let iterations = 0;
        const interval = setInterval(() => {
            title.innerText = originalText.split("")
                .map((letter, index) => {
                    if (index < iterations) {
                        return originalText[index];
                    }
                    if (originalText[index] === " ") return " ";
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");
            
            if (iterations >= originalText.length) {
                clearInterval(interval);
            }
            iterations += 1/6;
        }, 60);
    }

    // 3D Tilt Init
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll('.card-inner, .contact-form-card, .carousel-item.side'), {
            max: 5,
            speed: 400,
            glare: true,
            "max-glare": 0.1,
        });
    }
});

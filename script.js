// Smooth scrolling and fade-in animations
document.addEventListener('DOMContentLoaded', function() {
    // Navbar visibility on scroll
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.classList.add('visible');
        } else {
            navbar.classList.remove('visible');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for navbar height
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add active class to navigation links
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset <= sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
    
    // Add parallax effect to hero background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Add hover effects to timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Add click effect to reason cards
    document.querySelectorAll('.reason-card').forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-10px)';
            }, 150);
        });
    });
    
    // Gallery item click effect
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', function() {
            const placeholder = this.querySelector('.photo-placeholder');
            placeholder.style.transform = 'scale(1.1) rotate(5deg)';
            setTimeout(() => {
                placeholder.style.transform = 'scale(1)';
            }, 300);
        });
    });
    
    // Add floating hearts animation
    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '<i class="fas fa-heart"></i>';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.bottom = '-50px';
        heart.style.fontSize = Math.random() * 20 + 15 + 'px';
        heart.style.color = '#ff6b6b';
        heart.style.opacity = '0.7';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '999';
        heart.style.animation = 'floatUp 8s linear forwards';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 8000);
    }
    
    // Create floating hearts periodically
    setInterval(createFloatingHeart, 3000);
    
    // Photo upload functionality
    function handlePhotoUpload(input, container) {
        const file = input.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                // Create image element
                const img = document.createElement('img');
                img.src = e.target.result;
                img.alt = 'Uploaded photo';
                
                // Clear the container and add the image
                const icon = container.querySelector('i');
                const span = container.querySelector('span');
                const button = container.querySelector('.upload-btn');
                
                if (icon) icon.style.display = 'none';
                if (span) span.style.display = 'none';
                
                // Remove existing image if any
                const existingImg = container.querySelector('img');
                if (existingImg) existingImg.remove();
                
                container.insertBefore(img, button);
                container.classList.add('photo-uploaded');
                
                if (button) {
                    button.textContent = 'Change Photo';
                    button.style.opacity = '0';
                }
            };
            reader.readAsDataURL(file);
        }
    }
    
    // Add event listeners to all photo uploads
    document.querySelectorAll('.photo-upload').forEach(input => {
        input.addEventListener('change', function() {
            const container = this.closest('.timeline-photo') || this.closest('.photo-placeholder');
            if (container) {
                handlePhotoUpload(this, container);
            }
        });
    });
    
    // Add CSS for floating hearts animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatUp {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 0.7;
            }
            50% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
        
        .nav-links a.active {
            background: #87CEEB;
            color: white;
        }
    `;
    document.head.appendChild(style);
});

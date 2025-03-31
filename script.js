// Smooth Scroll Function (unchanged)
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Cart Functionality (enhanced with animation)
let cartTotal = 0;

function addToCart(itemName, price) {
    cartTotal += price;
    const cartAmount = document.querySelector('.cart-amount');
    cartAmount.textContent = `$${cartTotal.toFixed(2)}`;
    
    // Animate cart total update
    cartAmount.classList.remove('cart-pulse');
    void cartAmount.offsetWidth; // Trigger reflow
    cartAmount.classList.add('cart-pulse');
    
    alert(`${itemName} added to cart! Total: $${cartTotal.toFixed(2)}`);
}

// Scroll Animation for Elements
const elementsToAnimate = document.querySelectorAll(
    '.benefit-card, .step-card, .product-card, .testimonial-card, .gallery-img, .sustain-card, .contact-form, .footer-section'
);

// Intersection Observer with staggered animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            const element = entry.target;
            // Assign animation type based on class
            if (element.classList.contains('benefit-card') || element.classList.contains('product-card')) {
                element.style.animationDelay = `${index * 0.1}s`; // Stagger effect
                element.classList.add('animate-scale');
            } else if (element.classList.contains('gallery-img')) {
                element.style.animationDelay = `${index * 0.15}s`;
                element.classList.add('animate-zoom');
            } else if (element.classList.contains('step-card') || element.classList.contains('sustain-card')) {
                element.style.animationDelay = `${index * 0.12}s`;
                element.classList.add('animate-slide');
            } else if (element.classList.contains('testimonial-card')) {
                element.style.animationDelay = `${index * 0.1}s`;
                element.classList.add('animate-fade');
            } else if (element.classList.contains('contact-form') || element.classList.contains('footer-section')) {
                element.style.animationDelay = `${index * 0.05}s`;
                element.classList.add('animate-rise');
            }
            observer.unobserve(element); // Stop observing once animated
        }
    });
}, { threshold: 0.3 });

elementsToAnimate.forEach(element => {
    element.style.opacity = '0'; // Ensure elements start invisible
    observer.observe(element);
});

// Inject Enhanced Animation Styles
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    /* Scale Animation for Benefits and Products */
    .animate-scale {
        animation: scaleUp 0.8s ease-out forwards;
    }
    @keyframes scaleUp {
        from {
            opacity: 0;
            transform: scale(0.9) translateY(30px);
        }
        to {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
    }

    /* Zoom Animation for Gallery Images */
    .animate-zoom {
        animation: zoomIn 1s ease-out forwards;
    }
    @keyframes zoomIn {
        from {
            opacity: 0;
            transform: scale(0.8);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }

    /* Slide Animation for Steps and Sustainability */
    .animate-slide {
        animation: slideUp 0.9s ease-out forwards;
    }
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Fade Animation for Testimonials */
    .animate-fade {
        animation: fadeIn 1.2s ease-out forwards;
    }
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Rise Animation for Contact Form and Footer */
    .animate-rise {
        animation: riseUp 1s ease-out forwards;
    }
    @keyframes riseUp {
        from {
            opacity: 0;
            transform: translateY(40px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Cart Pulse Animation */
    .cart-pulse {
        animation: pulse 0.5s ease-in-out;
    }
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(styleSheet);

// Basic Form Submission Handling (enhanced with animation)
document.querySelector('.contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    form.classList.add('form-submit');
    setTimeout(() => {
        alert('Thank you for your message! We’ll get back to you soon.');
        form.classList.remove('form-submit');
        form.reset();
    }, 500); // Match animation duration
});

// Additional Form Animation Style
const formStyleSheet = document.createElement('style');
formStyleSheet.textContent = `
    .form-submit {
        animation: formSuccess 0.5s ease-in-out;
    }
    @keyframes formSuccess {
        0% { transform: scale(1); }
        50% { transform: scale(1.02); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(formStyleSheet);
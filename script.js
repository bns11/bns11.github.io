// script.js
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img.fade-in');

    const observerOptions = {
        root: null, // viewport as root
        rootMargin: '0px',
        threshold: 0.1
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    images.forEach(image => {
        imageObserver.observe(image);
    });
});

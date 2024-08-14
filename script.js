
// Example: Simple star twinkling effect (Placeholder for more dynamic effects)
document.addEventListener('DOMContentLoaded', (event) => {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        setInterval(() => {
            star.style.opacity = Math.random();
        }, 1000);
    });
});

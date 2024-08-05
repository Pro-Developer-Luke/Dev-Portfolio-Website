document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 200}ms`; // Stagger the animation
    });
});
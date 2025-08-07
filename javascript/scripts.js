// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the class 'timeline-item' 
    const timelineItems = document.querySelectorAll('.timeline-item');

    // Iterate over each timeline item and apply staggered animation delays
    timelineItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 200}ms`; // Stagger the animation delay by 200ms per item
    });
});

// Select the 'to-top' button element
const toTop = document.querySelector(".to-top");

// Add an event listener to the window to listen for scroll events
window.addEventListener("scroll", () => {
    // Check if the page has been scrolled more than 500px
    if(window.pageYOffset > 500) {
        // If yes, add the 'active' class to the 'to-top' button to make it visible
        toTop.classList.add("active");
    } else {
        // Otherwise, remove the 'active' class to hide the button
        toTop.classList.remove("active");
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 200}ms`; // Stagger the animation
    });
});

const toTop = document.querySelector(".to-top");
window.addEventListener("scroll", () => {
	if(window.pageYOffset > 500) {
		toTop.classList.add("active");
	} else{
		toTop.classList.remove("active");
	}
})
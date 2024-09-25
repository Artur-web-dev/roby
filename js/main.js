const burgerMenu = document.querySelector(".burger-menu");
const popupMenuClose = document.querySelector(".popup-menu__close");
const popupMenu = document.querySelector(".popup-menu");
const popupBg = document.querySelector(".popup__bg");
const body = document.body;

burgerMenu.addEventListener("click", () => {
	body.style.overflow = "hidden";
	popupMenu.classList.add("active");
});
popupMenuClose.addEventListener("click", () => {
	popupMenu.classList.remove("active");
	body.style.overflow = "visible";
});
popupBg.addEventListener("click", () => {
	popupMenu.classList.remove("active");
	body.style.overflow = "visible";
});
const swiper = new Swiper(".swiper", {
	// Optional parameters
	loop: true,
	slidesPerView: 3,
	spaceBetween: 30,
	centeredSlides: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		577: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		1001: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
});

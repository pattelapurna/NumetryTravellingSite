var swiper = new Swiper(".swiper-container", {
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

function goBack() {
	window.history.back();
}

function openContactMeModal() {
	document.getElementById("contactMeModal").classList.remove("hidden");
}

function closeContactMeModal() {
	document.getElementById("contactMeModal").classList.add("hidden");
}

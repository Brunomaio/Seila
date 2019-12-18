// Project
const menuBtn = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
	menu.classList.toggle("menu__list--open");
});

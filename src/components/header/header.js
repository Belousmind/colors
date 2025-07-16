const menuButton = document.querySelector(".header__burger-button");
const menu = document.querySelector(".header__menu");

export function menuIsOpen() {
  return menu.classList.contains("open");
}

menuButton.addEventListener("click", () => {
  menu.classList.toggle("open");
  menuButton.classList.toggle("open");
  document.body.classList.toggle("no-scroll");
});

export function closeMenu() {
  menu.classList.remove("open");
  menuButton.classList.remove("open");
  document.body.classList.remove("no-scroll");
}

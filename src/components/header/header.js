import { body } from "../../main";
const menuButton = document.querySelector(".header__burger-button");
const menu = document.querySelector(".header__menu");

export function menuIsOpen() {
  return menu.classList.contains("open");
}

menuButton.addEventListener("click", () => {
  menu.classList.toggle("open");
  menuButton.classList.toggle("open");
  body.classList.toggle("no-scroll");
});

export function closeMenu() {
  menu.classList.remove("open");
  menuButton.classList.remove("open");
  body.classList.remove("no-scroll");
}

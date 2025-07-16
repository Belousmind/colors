import { updateCartItem, clearCart } from "../../store/index";
import { renderCart } from "./cart-render";
import { openModal, closeModal } from "../modal/modal";
import { menuIsOpen, closeMenu } from "../header/header";

export const cartItemsContainer = document.querySelector(".cart__items");
const cartItemTemplate = document.querySelector("#cart-item-template");

export function CartItemsRender({ good, quantity, removed }) {
  const { id, name, price, imageSrc } = good;

  const item = cartItemTemplate.content.cloneNode(true);

  const restoreButton = item.querySelector(".cart__restore-button");
  const removeButton = item.querySelector(".cart__remove-button");

  if (removed) {
    const card = item.querySelector(".cart__item");
    card.classList.add("removed");

    restoreButton.style.display = "block";
    removeButton.style.display = "none";
  } else {
    restoreButton.style.display = "none";
    removeButton.style.display = "block";
  }

  const img = item.querySelector(".cart__item-image");
  img.src = imageSrc;
  img.alt = name;

  const title = item.querySelector(".cart__item-title");
  title.textContent = name;

  const itemPrice = item.querySelector(".cart__item-price");
  itemPrice.textContent = `${price.rub} ₽`;

  const quantitySpan = item.querySelector(".cart__quantity-value");
  quantitySpan.textContent = quantity;

  const buttons = item.querySelectorAll("[data-action]");
  buttons.forEach((btn) => {
    btn.setAttribute("data-id", id);
  });

  cartItemsContainer.appendChild(item);
}

cartItemsContainer.addEventListener("click", (event) => {
  const target = event.target;
  const id = target.dataset.id;
  const action = target.dataset.action;

  if (!id || !action) return;

  updateCartItem(id, action);
  renderCart();
});

const clearButton = document.querySelector(".cart__clear-button");

clearButton.addEventListener("click", () => {
  clearCart();
  renderCart();
});

const cartButton = document.querySelector(".header__cart-button");
const cartMenu = document.querySelector(".cart");
const cartCloseButton = document.querySelector(".cart__close-button");

cartButton.addEventListener("click", () => {
  if (menuIsOpen()) {
    closeMenu();
  }
  openModal(cartMenu);
});

cartCloseButton.addEventListener("click", () => {
  closeModal();
});

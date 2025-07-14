import { updateCartItem, clearCart } from "../../store/cart-store";
import { renderCart } from "./cart-render";

export const cartItemsContainer = document.querySelector(".cart__items");
const cartItemTemplate = document.querySelector("#cart-item-template");

export function CartItemsRender({ good, quantity, removed }) {
  const { id, name, price, imageSrc } = good;

  const item = cartItemTemplate.content.cloneNode(true);

  if (removed) {
    const card = item.querySelector(".cart__item");
    card.classList.add("removed");
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

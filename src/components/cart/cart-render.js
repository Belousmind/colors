import { cart } from "../../store/cart-store";
import { getTotalItems, getItemWord, getTotalPrice } from "../../utils";
import { cartItemsContainer, CartItemsRender } from "./cart";

const totalCountElement = document.querySelector(".cart__info");
const totalSumElement = document.querySelector(".cart__total-value");

const totalSumHeader = document.querySelector(".header__cart-button");
const emptyTemplate = document.querySelector("#cart-empty-template");

export function renderCart() {
  cartItemsContainer.innerHTML = "";

  const items = Object.values(cart);

  if (items.length === 0) {
    const clone = emptyTemplate.content.cloneNode(true);
    cartItemsContainer.appendChild(clone);
  } else {
    items.forEach((item) => {
      CartItemsRender(item);
    });
  }

  const totalCount = getTotalItems(cart);
  const word = getItemWord(totalCount);
  const totalPrice = getTotalPrice(cart);

  totalSumHeader.textContent = totalCount;
  totalSumElement.textContent = `${totalPrice.toLocaleString("ru-RU")} ₽`;
  totalCountElement.textContent = `${totalCount} ${word}`;
}

import { cart } from "../../store/cart-store";
import { getTotalItems, getItemWord, getTotalPrice } from "../../utils";
import { cartItemsContainer, CartItemsRender } from "./cart";

const totalCountElement = document.querySelector(".cart__info");
const totalSumElement = document.querySelector(".cart__total-value");

export function renderCart() {
  cartItemsContainer.innerHTML = "";

  Object.values(cart).forEach((item) => {
    CartItemsRender(item);
  });

  const totalCount = getTotalItems(cart);
  const word = getItemWord(totalCount);
  const totalPrice = getTotalPrice(cart);

  totalSumElement.textContent = `${totalPrice.toLocaleString("ru-RU")} ₽`;
  totalCountElement.textContent = `${totalCount} ${word}`;
}

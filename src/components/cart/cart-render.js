import { cart } from '../../store/cart-store';
import {
  getTotalItems,
  getItemWord,
  getTotalPrice,
  stateMessage,
} from '../../utils';
import { cartItemsContainer, CartItemsRender } from './cart';
import { messages } from '../../constants';

const totalCountElement = document.querySelector('.cart__info');
const totalSumElement = document.querySelector('.cart__total-value');

const totalSumHeader = document.querySelector('.header__cart-button');

export function renderCart() {
  cartItemsContainer.innerHTML = '';

  const items = Object.values(cart);

  if (items.length === 0) {
    stateMessage(cartItemsContainer, messages.emptyCart);
  } else {
    items.forEach((item) => {
      CartItemsRender(item);
    });
  }

  const totalCount = getTotalItems(cart);
  const word = getItemWord(totalCount);
  const totalPrice = getTotalPrice(cart);

  totalSumHeader.textContent = totalCount;
  totalSumElement.textContent = `${totalPrice.toLocaleString('ru-RU')} ₽`;
  totalCountElement.textContent = `${totalCount} ${word}`;
}

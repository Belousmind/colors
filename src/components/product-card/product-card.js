import { colorsStore, addToCart } from '../../store';
import { stateMessage } from '../../utils';
import { renderCart } from '../cart/cart-render';
import { messages } from '../../constants';

const cardTemplate = document.querySelector('#product-card-template');
export const cardsContainer = document.querySelector('.product-list');

export function CardsRender(data, error = false) {
  cardsContainer.innerHTML = '';

  if (error && data.length === 0) {
    stateMessage(cardsContainer, messages.error);
    return;
  }

  if (data.length === 0) {
    stateMessage(cardsContainer, messages.notFound);
  } else {
    data.forEach((color) => {
      const card = cardTemplate.content.cloneNode(true);

      const image = card.querySelector('.product-card__image');
      image.src = color.imageSrc;
      image.alt = color.name;

      const title = card.querySelector('.product-card__title');
      title.textContent = color.name;

      const price = card.querySelector('.product-card__price');
      price.textContent = `${color.price.rub} ₽`;

      const button = card.querySelector('.product-card__button');
      button.setAttribute('data-id', color.id);

      cardsContainer.appendChild(card);
    });
  }
}

cardsContainer.addEventListener('click', (event) => {
  const target = event.target;

  if (target.classList.contains('product-card__button')) {
    const id = Number(target.dataset.id);

    const good = colorsStore.get().find((color) => color.id === id);

    if (good) {
      addToCart(good);
      renderCart();
    }
  }
});

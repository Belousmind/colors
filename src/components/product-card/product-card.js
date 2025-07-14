import colors from "../../../colors.json";

const cardTemplate = document.querySelector("#product-card-template");

export const cardsContainer = document.querySelector(".product-list");

function CardsRender() {
  colors.forEach((color) => {
    const card = cardTemplate.content.cloneNode(true);

    const image = card.querySelector(".product-card__image");
    image.src = color.imageSrc;
    image.alt = color.name;

    const title = card.querySelector(".product-card__title");
    title.textContent = color.name;

    const price = card.querySelector(".product-card__price");
    price.textContent = `${color.price.rub} ₽`;

    const button = card.querySelector(".product-card__button");
    button.setAttribute("data-id", color.id);

    cardsContainer.appendChild(card);
  });
}

CardsRender();

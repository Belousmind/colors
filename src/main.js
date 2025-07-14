import "./style.scss";

import colors from "../colors.json";

import { cardsContainer } from "./components/product-card/product-card";

const cart = {};

cardsContainer.addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("product-card__button")) {
    const id = event.target.dataset.id;
    console.log("ID товара:", id);
    addToCart(id);

    console.log(cart);
  }
});

function addToCart(id) {
  const good = getGood(id);
  if (cart[id]) {
    cart[id].quantity += 1;
  } else {
    cart[id] = {
      good,
      quantity: 1,
    };
  }
}

function getGood(id) {
  return colors.find((item) => item.id === Number(id));
}


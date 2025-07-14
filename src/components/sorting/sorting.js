import { setSort } from "../../store/catalog-store";
import { renderFilteredCards } from "../../utils/filters-and-sorting";

import colors from "../../../colors.json";

const sortContainer = document.querySelector(".catalog__sort");

const sortingOptions = {
  expensive: "Сначала дорогие",
  cheap: "Сначала недорогие",
  popular: "Сначала популярные",
  new: "Сначала новые",
};

Object.entries(sortingOptions).forEach(([key, label]) => {
  const button = document.createElement("button");
  button.textContent = label;
  button.dataset.sort = key;
  sortContainer.appendChild(button);
});

sortContainer.addEventListener("click", (event) => {
  const target = event.target;
  if (target.tagName === "BUTTON") {
    const selectedSort = target.dataset.sort;
    setSort(selectedSort);
    renderFilteredCards(colors);
  }
});

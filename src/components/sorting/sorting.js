import { setSort } from "../../store/catalog-store";
import { renderFilteredCards } from "../../utils/filters-and-sorting";

import colors from "../../../colors.json";

const sortContainer = document.querySelector(".catalog__sort-list");
const sortLabel = document.querySelector(".catalog__sort-label");

const sortingOptions = {
  expensive: "Сначала дорогие",
  cheap: "Сначала недорогие",
  popular: "Сначала популярные",
  new: "Сначала новые",
};

Object.entries(sortingOptions).forEach(([key, label], index) => {
  const button = document.createElement("button");
  button.textContent = label;
  button.dataset.sort = key;
  button.classList.add("catalog__sort-option");

  if (index === 0) {
    button.classList.add("selected");
    setSort(key);
    sortLabel.textContent = label;
    renderFilteredCards(colors);
  }

  sortContainer.appendChild(button);
});

sortContainer.addEventListener("click", (event) => {
  const target = event.target;
  if (target.tagName === "BUTTON") {
    const selectedSort = target.dataset.sort;

    
    setSort(selectedSort);

    
    document.querySelectorAll(".catalog__sort-option").forEach((btn) => {
      btn.classList.remove("selected");
    });


    target.classList.add("selected");


    sortLabel.textContent = target.textContent;

    renderFilteredCards(colors);


    sortContainer.classList.remove("open");
    modalOverlay.classList.remove("visible");
    document.body.classList.remove("no-scroll");
  }
});

const sortButton = document.querySelector(".catalog__sort-toggle");
const modalOverlay = document.querySelector(".modal-overlay");

sortButton.addEventListener("click", (e) => {
  sortContainer.classList.toggle("open");
  modalOverlay.classList.toggle("visible");
  document.body.classList.toggle("no-scroll");
});

modalOverlay.addEventListener("click", () => {
  sortContainer.classList.toggle("open");
  modalOverlay.classList.toggle("visible");
  document.body.classList.toggle("no-scroll");
});

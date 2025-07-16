import { colorsStore } from "../../store/data-store";
import { setSort } from "../../store/catalog-store";
import { renderFilteredCards } from "../../utils/filters-and-sorting";
import { openModal, closeModal } from "../modal/modal";

const sortContainer = document.querySelector(".catalog__sort-list");
const sortLabel = document.querySelector(".catalog__sort-label");

const sortButton = document.querySelector(".catalog__sort-toggle");

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

    const colors = colorsStore.get();
    if (colors) renderFilteredCards(colors);
  }

  sortContainer.appendChild(button);
});

sortButton.addEventListener("click", () => {
  openModal(sortContainer);
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

    const colors = colorsStore.get();
    if (colors) renderFilteredCards(colors);
    closeModal();
  }
});

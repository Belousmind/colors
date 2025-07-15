import colors from "../../../colors.json";

import { setFilters } from "../../store/catalog-store";
import { renderFilteredCards } from "../../utils/filters-and-sorting";

const toggleTemplate = document.querySelector("#toggle-template");
const toggleContainer = document.querySelector(".catalog__filters-panel");

const filters = {
  new: "Новинки",
  quantity: "Есть в наличии",
  contract: "Контрактные",
  exclusive: "Эксклюзивные",
  sale: "Распродажа",
};

Object.entries(filters).forEach(([filterKey, labelText]) => {
  const clone = toggleTemplate.content.cloneNode(true);
  const input = clone.querySelector(".toggle__input");
  const label = clone.querySelector(".toggle__label");

  input.id = `toggle-${filterKey}`;
  input.dataset.filter = filterKey;
  label.textContent = labelText;

  input.addEventListener("change", () => {
    const activeFilters = [...document.querySelectorAll(".toggle__input")]
      .filter((el) => el.checked)
      .map((el) => el.dataset.filter);

    setFilters(activeFilters);
    renderFilteredCards(colors);
  });

  toggleContainer.append(clone);
});

const filtersButton = document.querySelector(".catalog__filters-button");
const modalOverlay = document.querySelector(".modal-overlay");

filtersButton.addEventListener("click", (e) => {
  toggleContainer.classList.toggle("open");
  modalOverlay.classList.toggle("visible");
  document.body.classList.toggle("no-scroll");
});

modalOverlay.addEventListener("click", () => {
  modalOverlay.classList.toggle("visible");
  toggleContainer.classList.toggle("open");
  document.body.classList.toggle("no-scroll");
});

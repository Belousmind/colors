import { colorsStore, setFilters } from "../../store/index";
import { renderFilteredCards } from "../../utils/index";
import { openModal } from "../modal/modal";

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
    renderFilteredCards(colorsStore.get());
  });

  toggleContainer.append(clone);
});

const filtersButton = document.querySelector(".catalog__filters-button");

filtersButton.addEventListener("click", (e) => {
  openModal(toggleContainer);
});

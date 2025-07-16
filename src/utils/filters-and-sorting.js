import { getFilters, getSort } from "../store/catalog-store";
import {
  CardsRender,
  cardsContainer,
} from "../components/product-card/product-card";
import { getItemWord } from "./get-item-word";
import { catalogCount } from "../main";

export function applyFilters(data, activeFilters) {
  return data.filter((item) =>
    activeFilters.every((key) => {
      if (key === "quantity") return item.quantity > 0;
      return Boolean(item[key]);
    })
  );
}

export function applySorting(data, sortKey) {
  const sorted = [...data];

  switch (sortKey) {
    case "expensive":
      return sorted.sort((a, b) => b.price.rub - a.price.rub);
    case "cheap":
      return sorted.sort((a, b) => a.price.rub - b.price.rub);
    case "popular":
      return sorted.sort((a, b) => Number(b.popular) - Number(a.popular));
    case "new":
      return sorted.sort((a, b) => Number(b.new) - Number(a.new));
    default:
      return data;
  }
}

export function renderFilteredCards(data) {
  let filtered = applyFilters(data, getFilters());

  const sortKey = getSort();

  if (sortKey) {
    filtered = applySorting(filtered, sortKey);
  }
  catalogCount.textContent = `${filtered.length} ${getItemWord(filtered)}`;
  cardsContainer.innerHTML = "";
  CardsRender(filtered);
}

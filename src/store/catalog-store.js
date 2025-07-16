let activeFilters = [];
let activeSort = null;

export function setFilters(filters) {
  activeFilters = filters;
}

export function getFilters() {
  return activeFilters;
}

export function setSort(sortKey) {
  activeSort = sortKey;
}

export function getSort() {
  return activeSort;
}

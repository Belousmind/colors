import './style.scss';
import './components/header/header';
import './components/filters/filters';
import './components/sorting/sorting';
import './components/slider/slider';
import './components/breadcrumbs/breadcrumbs';

import { CardsRender } from './components/product-card/product-card';
import { getItemWord } from './utils/index';
import { loadData } from './api/load-data';
import { colorsStore } from './store/data-store';

const BASE_URL = 'https://api.jsonbin.io/v3/b/6873eecc6063391d31acdc2c';
const API_KEY = '$2a$10$cJfNvI6eOjFmFBVgFY9WouMjG1S.NMP1oDxFZ.IMNIdYshMKYArEq';

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

export const body = document.querySelector('body');
export const catalogCount = document.querySelector('.catalog__count');

async function initApp() {
  try {
    const colorsData = await loadData(BASE_URL, {
      headers: { 'X-Master-Key': API_KEY },
    });

    const colors = colorsData.data.record;
    colorsStore.set(colors);
    catalogCount.textContent = `${colors.length} ${getItemWord(colors)}`;
    CardsRender(colorsStore.get());
  } catch (e) {
    console.error('Ошибка загрузки данных:', e);
    CardsRender([], true);
  }
}

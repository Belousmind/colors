const breadcrumbsContainer = document.querySelector('.breadcrumbs');
const breadcrumbTemplate = document.querySelector('#breadcrumbs-item-template');

const route = ['Главная', 'Продукты', 'Краски'];

route.forEach((label) => {
  const clone = breadcrumbTemplate.content.cloneNode(true);
  const link = clone.querySelector('.breadcrumbs__link');

  link.innerText = label;

  breadcrumbsContainer.appendChild(clone);
});

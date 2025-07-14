const cartButton = document.querySelector(".header__cart-button");
const cartModal = document.querySelector(".cart-modal");
const overlay = document.querySelector(".cart-modal__overlay");
const closeButton = document.querySelector(".cart__close-button");

cartButton.addEventListener("click", () => {
  cartModal.classList.add("active");
  document.body.classList.add("no-scroll");
});

closeButton.addEventListener("click", () => {
  cartModal.classList.remove("active");
  document.body.classList.remove("no-scroll");
});

overlay.addEventListener("click", () => {
  cartModal.classList.remove("active");
  document.body.classList.remove("no-scroll");
});

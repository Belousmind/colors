export const cart = {};

export function addToCart(good) {
  const id = good.id;

  if (!id) return;

  if (cart[id]) {
    cart[id].quantity += 1;
    cart[id].removed = false;
  } else {
    cart[id] = {
      good,
      quantity: 1,
      removed: false,
    };
  }
}

export function updateCartItem(id, action) {
  const item = cart[id];
  if (!item) return;

  switch (action) {
    case "increase":
      item.quantity += 1;
      item.removed = false;
      break;

    case "decrease":
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        item.removed = true;
      }
      break;

    case "remove":
      item.removed = true;
      break;

    case "restore":
      item.removed = false;
      break;

    default:
      break;
  }
}

export function clearCart() {
  Object.keys(cart).forEach((key) => {
    delete cart[key];
  });
}

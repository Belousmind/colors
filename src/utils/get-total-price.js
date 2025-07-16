export function getTotalPrice(cart) {
  return Object.values(cart)
    .filter((item) => !item.removed)
    .reduce((sum, item) => sum + item.good.price.rub * item.quantity, 0);
}

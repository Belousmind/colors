export function getTotalItems(cart) {
  return Object.values(cart)
    .filter((item) => !item.removed)
    .reduce((sum, item) => sum + item.quantity, 0);
}

export function createStore(initialValue = null) {
  let data = initialValue;

  return {
    get() {
      return data;
    },
    set(newValue) {
      data = newValue;
    },
    reset() {
      data = initialValue;
    },
  };
}

export const colorsStore = createStore(null);
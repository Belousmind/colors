const emptyTemplate = document.querySelector('#empty-template');

export function stateMessage(parentContainer, message) {
  const clone = emptyTemplate.content.cloneNode(true);

  const span = clone.querySelector('.empty-message');
  span.textContent = message;

  parentContainer.appendChild(clone);
}

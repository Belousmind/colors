import { body } from "../../main";
const modalOverlay = document.querySelector(".modal-overlay");

let currentTarget = null;

export function openModal(targetContainer) {
  const isOpen = targetContainer.classList.contains("open");

  if (isOpen) {
    closeModal();
    return;
  }

  currentTarget = targetContainer;

  currentTarget.classList.add("open");
  modalOverlay.classList.add("visible");
  body.classList.add("no-scroll");
}

export function closeModal() {
  if (!currentTarget) return;

  currentTarget.classList.remove("open");
  modalOverlay.classList.remove("visible");
  body.classList.remove("no-scroll");

  currentTarget = null;
}

modalOverlay.addEventListener("click", closeModal);

const modalOverlay = document.querySelector(".modal-overlay");

function openModal(targetContainer) {
  targetContainer.classList.add("open");
  modalOverlay.classList.add("visible");
  document.body.classList.add("no-scroll");

  modalOverlay.dataset.activeTarget = targetContainer.classList[0];
}

function closeModal() {
  const activeTargetClass = modalOverlay.dataset.activeTarget;
  const activeTarget = document.querySelector(`.${activeTargetClass}`);

  if (activeTarget) activeTarget.classList.remove("open");

  modalOverlay.classList.remove("visible");
  document.body.classList.remove("no-scroll");

  delete modalOverlay.dataset.activeTarget;
}

function toggleModal(targetContainer) {
  const isOpen = targetContainer.classList.contains("open");

  if (isOpen) {
    closeModal();
  } else {
    openModal(targetContainer);
  }
}

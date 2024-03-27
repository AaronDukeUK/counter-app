import { updateCountDisplay, DEFAULT_COUNT } from "./counter.js";

const resetModal = document.getElementById("reset-modal");
const confirmResetButton = document.getElementById("confirm-reset");
const cancelResetButton = document.getElementById("cancel-reset");

export const resetCount = () => {
  resetModal.style.display = "block";
  confirmResetButton.addEventListener("click", () => {
    updateCountDisplay(DEFAULT_COUNT);
    resetModal.style.display = "none";
  });
  cancelResetButton.addEventListener("click", () => {
    resetModal.style.display = "none";
  });
};

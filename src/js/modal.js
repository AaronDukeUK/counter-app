import { resetCount } from "./counter.js";

const resetModal = document.getElementById("reset-modal");
const confirmResetButton = document.getElementById("confirm-reset");
const cancelResetButton = document.getElementById("cancel-reset");

export const showResetModal = () => {
  resetModal.style.display = "block";
  confirmResetButton.addEventListener("click", () => {
    resetCount();
    resetModal.style.display = "none";
  });
  cancelResetButton.addEventListener("click", () => {
    resetModal.style.display = "none";
  });
};

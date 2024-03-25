// buttons.js
import { resetCount, adjustCount } from "./counter.js";
import { toggleInputVisibility } from "./input.js";
import { showMenu } from "./menu.js";

export const initializeButtons = () => {
  // Event listeners for buttons
  document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;
      if (action === "reset") {
        resetCount();
      } else if (action === "menu") {
        showMenu();
      } else if (action === "edit") {
        toggleInputVisibility();
      } else if (action === "up") {
        adjustCount(true);
      } else if (action === "down") {
        adjustCount(false);
      }
    });
  });
};

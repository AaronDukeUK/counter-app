import * as Counter from "./counter.js";
import * as Input from "./counter-input.js";
import * as Menu from "./menu.js";

const actions = {
  reset: Counter.resetCount,
  menu: Menu.showMenu,
  edit: Input.toggleInputVisibility,
  up: () => Counter.adjustCount(true),
  down: () => Counter.adjustCount(false),
};

export const initializeButtons = () => {
  document.querySelectorAll(".button").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;
      executeAction(action);
    });
  });
};

const executeAction = (action) => {
  const actionFunction = actions[action];
  if (actionFunction) {
    actionFunction();
  }
};

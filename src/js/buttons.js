import * as Counter from "./counter.js";
import * as Input from "./counter-input.js";
import * as Menu from "./menu.js";

import { showResetModal } from "./modal.js";
import { animateBubblesDown, animateBubblesUp } from "./animations.js";

const actions = {
  reset: showResetModal,
  menu: Menu.showMenu,
  edit: Input.toggleInputVisibility,
  "close-input": Input.hideInputField,
  up: () => {
    Counter.adjustCount(true);
    animateBubblesUp();
  },
  down: () => {
    Counter.adjustCount(false);
    animateBubblesDown();
  },
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

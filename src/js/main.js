// script.js
import { showOverlay } from "./splash.js";
import { initializeCounter } from "./counter.js";
import { initializeInput } from "./counter-input.js";
import { initializeButtons } from "./buttons.js";
import { initializeSwipeArea } from "./swipe-area.js";
import {
  initializeMenuInputs,
  initializeDisplayInputs,
  showMenu,
} from "./menu.js";
import { InitializeAddToHomeScreen } from "./add-to-homescreen.js";

// Initialize counter on window load
window.onload = () => {
  showOverlay();
  showMenu();
  InitializeAddToHomeScreen();
  initializeCounter();
  initializeInput();
  initializeButtons();
  initializeSwipeArea();
  initializeMenuInputs();
  initializeDisplayInputs();
};

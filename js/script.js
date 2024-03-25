// script.js
import { showOverlay } from "./splash.js";
import { initializeCounter } from "./counter.js";
import { initializeInput } from "./input.js";
import { initializeButtons } from "./buttons.js";
import { initializeSwipeArea } from "./swipe-area.js";

// Initialize counter on window load
window.onload = () => {
  showOverlay();
  initializeCounter();
  initializeInput();
  initializeButtons();
  initializeSwipeArea();
};

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

// Initialize counter on window load
window.onload = () => {
  showOverlay();
  showMenu();
  initializeCounter();
  initializeInput();
  initializeButtons();
  initializeSwipeArea();
  initializeMenuInputs();
  initializeDisplayInputs();
};

let installPrompt = null;
const installButton = document.querySelector("#install-button");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  installButton.removeAttribute("hidden");
});

installButton.addEventListener("click", async () => {
  if (!installPrompt) return;

  const result = await installPrompt.prompt();
  console.log(`Install prompt was: ${result.outcome}`);
  disableInAppInstallPrompt();
});

function disableInAppInstallPrompt() {
  installPrompt = null;
  installButton.setAttribute("hidden", "");
}

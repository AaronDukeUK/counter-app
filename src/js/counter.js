import { saveToLocalStorage, getFromLocalStorage } from "./local-storage.js";

export const getCountFromLocalStorage = () => {
  const count = getFromLocalStorage("count");
  return count ? parseInt(count) : 0;
};

export const getMaxCountFromLocalStorage = () => {
  const maxCount = getFromLocalStorage("select-number");
  return maxCount ? parseInt(maxCount) : 100;
};

export const updateCountDisplay = (count) => {
  const displayElement = document.querySelector(".count-display");
  const maxCount = getFromLocalStorage("select-number");
  displayElement.textContent = count;
  saveToLocalStorage("count", count);
  if (count == maxCount) {
    if ("vibrate" in navigator) {
      navigator.vibrate(500);
    }
  }
};

export const adjustCount = (increment) => {
  const maxCount = getMaxCountFromLocalStorage();
  let count = getCountFromLocalStorage();
  count = Math.max(0, Math.min(maxCount, count + (increment ? 1 : -1)));
  updateCountDisplay(count);
};

export const resetCount = () => {
  updateCountDisplay(0);
};

export const initializeCounter = () => {
  const count = getCountFromLocalStorage();
  updateCountDisplay(count);
};

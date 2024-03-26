import { saveToLocalStorage, getFromLocalStorage } from "./local-storage.js";

const DEFAULT_COUNT = 0;
const MAX_COUNT = 100;

export const getCountFromLocalStorage = () => {
  const count = getFromLocalStorage("count");
  return count ? parseInt(count) : DEFAULT_COUNT;
};

export const updateCountDisplay = (count) => {
  const displayElement = document.querySelector(".count-display");
  displayElement.textContent = count;
  saveToLocalStorage("count", count);
};

export const adjustCount = (increment) => {
  let count = getCountFromLocalStorage();
  count = Math.max(0, Math.min(MAX_COUNT, count + (increment ? 1 : -1)));
  updateCountDisplay(count);
};

export const resetCount = () => {
  if (confirm("Are you sure you want to reset the counter?")) {
    updateCountDisplay(DEFAULT_COUNT);
  }
};

export const initializeCounter = () => {
  const count = getCountFromLocalStorage();
  updateCountDisplay(count);
};

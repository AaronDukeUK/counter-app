// counter.js
export const getCountFromSessionStorage = () =>
  sessionStorage.getItem("count")
    ? parseInt(sessionStorage.getItem("count"))
    : 0;

export const updateCountDisplay = (count) => {
  document.querySelector(".count-display").textContent = count;
  sessionStorage.setItem("count", count);
};

export const adjustCount = (increment) => {
  let count = getCountFromSessionStorage();
  count = Math.max(0, Math.min(100, count + (increment ? 1 : -1)));
  updateCountDisplay(count);
};

export const resetCount = () => {
  if (confirm("Are you sure you want to reset the counter?")) {
    updateCountDisplay(0);
  }
};

export const initializeCounter = () => {
  const count = getCountFromSessionStorage();
  updateCountDisplay(count);
};

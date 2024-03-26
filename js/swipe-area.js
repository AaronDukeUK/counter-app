import { handleTouchStart, handleTouchEnd } from "./touch-handlers.js";

export const initializeSwipeArea = () => {
  const swipeArea = document.querySelector(".swipe-area");

  swipeArea.addEventListener("touchstart", handleTouchStart);
  swipeArea.addEventListener("touchend", handleTouchEnd);
  swipeArea.addEventListener("touchmove", preventPageRefresh, {
    passive: false,
  });
};

const preventPageRefresh = (event) => {
  if (event.target.closest(".swipe-area")) {
    event.preventDefault();
  }
};

// swipe-area.js

import { handleTouchStart, handleTouchEnd } from "./touch-handlers.js";

export const initializeSwipeArea = () => {
  // Add touch event listeners to the swipe area
  const swipeArea = document.querySelector(".swipe-area");
  swipeArea.addEventListener("touchstart", handleTouchStart);
  swipeArea.addEventListener("touchend", handleTouchEnd);

  // Prevent page refresh on swipe down inside the swipe area
  swipeArea.addEventListener(
    "touchmove",
    (event) => {
      if (event.target.closest(".swipe-area")) {
        event.preventDefault();
      }
    },
    { passive: false }
  );
};

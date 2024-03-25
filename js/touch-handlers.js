// touch-handlers.js
import { adjustCount } from "./counter.js";
import { animateBubblesUp } from "./animations.js";

let startY;
export const handleTouchStart = (event) => {
  startY = event.touches[0].clientY;
};

export const handleTouchEnd = (event) => {
  const endY = event.changedTouches[0].clientY;
  const deltaY = startY - endY;
  if (deltaY > 50) {
    adjustCount(true);
    animateBubblesUp();
  } else if (deltaY < -50) {
    adjustCount(false);
  }
};

const initializeBubbleStyles = (bubble) => {
  bubble.style.opacity = "0";
  bubble.style.transform = "translateY(100px)";
};

const animateBubble = (bubble, animation, delay) => {
  setTimeout(() => {
    bubble.style.animation = `${animation} 0.2s cubic-bezier(0.25, 0.1, 0.25, 1) forwards`;
  }, delay);
  bubble.addEventListener("animationend", () => {
    bubble.style.animation = "";
    bubble.style.transform = "translateY(0)";
    bubble.style.opacity = "1";
  });
};

export const animateBubblesUp = () => {
  const bubbles = document.querySelectorAll(".bubble");
  bubbles.forEach((bubble, index) => {
    initializeBubbleStyles(bubble);
    animateBubble(bubble, "moveThroughBubblesUp", index * 100);
  });
};

export const animateBubblesDown = () => {
  const bubbles = document.querySelectorAll(".bubble");
  bubbles.forEach((bubble, index) => {
    initializeBubbleStyles(bubble);
    animateBubble(bubble, "moveThroughBubblesDown", index * 100);
  });
};

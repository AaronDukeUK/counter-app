// animations.js
export const animateBubblesUp = () => {
  const bubbles = document.querySelectorAll(".bubble");
  bubbles.forEach((bubble, index) => {
    bubble.style.animation = `moveThroughBubbles 0.5s ease forwards ${
      index * 0.1
    }s`;
    // Listen for animationend event
    bubble.addEventListener("animationend", () => {
      // Reset bubble properties
      bubble.style.animation = "";
      bubble.style.transform = "translateY(0)";
      bubble.style.opacity = "1";
    });
  });
};

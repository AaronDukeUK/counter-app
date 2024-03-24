// Initialize counter function
const initializeCounter = () => {
  const count = getCountFromSessionStorage();
  renderCounter(count);
};

// Get count from sessionStorage
const getCountFromSessionStorage = () =>
  sessionStorage.getItem("count")
    ? parseInt(sessionStorage.getItem("count"))
    : 0;

// Render counter function
const renderCounter = (count) => {
  const odometer = new Odometer({
    el: document.querySelector(".odometer"),
    value: count,
    duration: 100,
    animation: "count",
  });
  odometer.render();
  updateCountDisplay(count);
};

// Update count display function
const updateCountDisplay = (count) => {
  document.getElementById("countDisplay").textContent = count;
  sessionStorage.setItem("count", count);
};

// Handle touch start
let startY;
const handleTouchStart = (event) => {
  startY = event.touches[0].clientY;
};

// Handle touch end
const handleTouchEnd = (event) => {
  const endY = event.changedTouches[0].clientY;
  const deltaY = startY - endY;

  if (deltaY > 50) {
    adjustCount(true);
    animateBubblesUp();
  } else if (deltaY < -50) {
    adjustCount(false);
  }
};

const animateBubblesUp = () => {
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

// Adjust count function
const adjustCount = (increment) => {
  let count = getCountFromSessionStorage();
  count = Math.max(0, Math.min(100, count + (increment ? 1 : -1)));
  updateCountDisplay(count);
};

// Reset count function
const resetCount = () => {
  if (confirm("Are you sure you want to reset the counter?")) {
    updateCountDisplay(0);
  }
};

// Hide input on pageload
document.getElementById("counterInput").style.display = "none";

// Toggle input visibility function
const toggleInputVisibility = () => {
  const inputField = document.getElementById("counterInput");
  inputField.readOnly = !inputField.readOnly;
  inputField.style.display = inputField.readOnly ? "none" : "block";

  if (!inputField.readOnly) {
    inputField.type = "number";
    inputField.value = getCountFromSessionStorage();
    inputField.focus();
  }
};

// Event listener for input field
document.getElementById("counterInput").addEventListener("input", (event) => {
  let newValue = event.target.value.replace(/\D/g, "");
  newValue = newValue === "" ? 0 : Math.min(100, parseInt(newValue));
  event.target.value = newValue;
  updateCountDisplay(newValue);
});

// Event listener for Enter key press
document.getElementById("counterInput").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    toggleInputVisibility();
  }
});

// Event listeners for buttons
document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;
    if (action === "reset") {
      resetCount();
    } else if (action === "edit") {
      toggleInputVisibility();
    } else if (action === "up") {
      adjustCount(true);
    } else if (action === "down") {
      adjustCount(false);
    }
  });
});

// Prevent page refresh on swipe down inside the swipe area
document.querySelector(".swipe-area").addEventListener(
  "touchmove",
  (event) => {
    if (event.target.closest(".swipe-area")) {
      event.preventDefault();
    }
  },
  { passive: false }
);

// const modal = document.getElementById("infoModal");
// const infoButton = document.getElementById("infoButton");
// const closeButton = modal.querySelector(".close");

// // When the user clicks the button, open the modal
// infoButton.addEventListener("click", () => {
//   modal.style.display = "block";
// });

// // When the user clicks on the close button, close the modal
// closeButton.addEventListener("click", () => {
//   modal.style.display = "none";
// });

// // When the user clicks anywhere outside of the modal, close it
// window.addEventListener("click", (event) => {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// });

// Function to show overlay
const showOverlay = () => {
  const overlay = document.getElementById("overlay");
  overlay.style.display = "flex";

  setTimeout(() => {
    overlay.style.opacity = "0";
    setTimeout(() => {
      overlay.style.display = "none";
    }, 1000);
  }, 1000);
};

// Initialize counter on window load
window.onload = () => {
  initializeCounter();
  showOverlay();
};

// Initialize counter on window load
window.onload = function () {
  setTimeout(() => {
    initializeCounter();
  }, 100);
};

// Initialize counter function
function initializeCounter() {
  let count = getCountFromSessionStorage();
  renderCounter(count);
}

// Get count from sessionStorage
function getCountFromSessionStorage() {
  return sessionStorage.getItem("count")
    ? parseInt(sessionStorage.getItem("count"))
    : 0;
}

// Render counter function
function renderCounter(count) {
  let odometer = new Odometer({
    el: document.querySelector(".odometer"),
    value: count,
    duration: 100,
    animation: "count",
  });
  odometer.render();
  updateCountDisplay(count);
}

// Update count display function
function updateCountDisplay(count) {
  document.getElementById("countDisplay").textContent = count;
  sessionStorage.setItem("count", count);
}

// Handle touch start
function handleTouchStart(event) {
  startY = event.touches[0].clientY;
}

// Handle touch end
function handleTouchEnd(event) {
  let endY = event.changedTouches[0].clientY;
  let deltaY = startY - endY;

  if (deltaY > 50) {
    adjustCount(getDropdownValue());
  } else if (deltaY < -50) {
    adjustCount(-getDropdownValue());
  }
}

// Get dropdown value
function getDropdownValue() {
  return parseInt(document.getElementById("dropdown").value);
}

// Adjust count function
function adjustCount(value) {
  let count = getCountFromSessionStorage();
  count = Math.max(0, Math.min(100, count + value));
  updateCountDisplay(count);
}

// Reset count function
function resetCount() {
  if (confirm("Are you sure you want to reset the counter?")) {
    updateCountDisplay(0);
  }
}

// Hide input on pageload
document.getElementById("counterInput").style.display = "none";

// Toggle input visibility function
function toggleInputVisibility() {
  let inputField = document.getElementById("counterInput");
  inputField.readOnly = !inputField.readOnly;
  inputField.style.display = inputField.readOnly ? "none" : "block";
  if (!inputField.readOnly) {
    inputField.value = getCountFromSessionStorage();
    inputField.focus();
  }
}

// Event listener for input field
document
  .getElementById("counterInput")
  .addEventListener("input", function (event) {
    let newValue = this.value.replace(/\D/g, "");
    newValue = newValue === "" ? 0 : Math.min(100, parseInt(newValue));
    this.value = newValue;
    updateCountDisplay(newValue);
  });

// Event listener for Enter key press
document
  .getElementById("counterInput")
  .addEventListener("keydown", function (event) {
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
      adjustCount(parseInt(getDropdownValue()));
    } else if (action === "down") {
      adjustCount(-parseInt(getDropdownValue()));
    }
  });
});

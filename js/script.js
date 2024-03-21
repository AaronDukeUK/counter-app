window.onload = function () {
  setTimeout(function () {
    let odometer = new Odometer({
      el: document.querySelector(".odometer"),
      value: count,
      duration: 100,
      animation: "count",
    });
    odometer.render();
  }, 100);
};

let count = sessionStorage.getItem("count")
  ? parseInt(sessionStorage.getItem("count"))
  : 0;
document.getElementById("countDisplay").textContent = count;

let startY;

function handleTouchStart(event) {
  startY = event.touches[0].clientY;
}

function handleTouchEnd(event) {
  let endY = event.changedTouches[0].clientY;
  let deltaY = startY - endY;

  if (deltaY > 50) {
    increaseCount(1);
  } else if (deltaY < -50) {
    decreaseCount(1);
  }
}

function increaseCount(value) {
  if (count + value <= 100) {
    count += value;
  } else {
    count = 100;
  }
  updateCountDisplay();
}

function decreaseCount(value) {
  count -= value;
  if (count < 0) count = 0;
  updateCountDisplay();
}

function resetCount() {
  count = 0;
  updateCountDisplay();
}

function updateCountDisplay() {
  let counterElement = document.getElementById("countDisplay");
  counterElement.textContent = count;
  sessionStorage.setItem("count", count);
}

document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.querySelector("span").textContent;
    if (action === "+5") {
      increaseCount(5);
    } else if (action === "+10") {
      increaseCount(10);
    } else if (action === "Reset") {
      resetCount();
    }
  });
});

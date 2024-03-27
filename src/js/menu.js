import { saveToLocalStorage, getFromLocalStorage } from "./local-storage.js";
import { resetCount } from "./modal.js";

const menu = document.querySelector(".menu");
const closeMenuButton = document.querySelector(".menu--close");
const formInputs = document.querySelectorAll(".menu input");
const startButton = document.querySelector(".button--start");
const checkbox = document.getElementById("landscape-checkbox");

export const showMenu = () => {
  menu.style.display = "flex";
  setTimeout(() => {
    menu.style.opacity = "1";
  }, 0);
};

const hideMenu = () => {
  menu.style.opacity = "0";
  setTimeout(() => {
    menu.style.display = "none";
  }, 500);
};

const saveInputToLocalStorage = (input) => {
  const inputValue = input.value;
  const inputName = input.name;
  saveToLocalStorage(inputName, inputValue);
};

const handleNumberInputChange = (input) => {
  let value = parseInt(input.value);
  if (isNaN(value)) {
    input.value = "";
  } else if (value > 1000) {
    input.value = "1000";
    value = 1000;
  }
  saveInputToLocalStorage(input);
};

const handleDjzikrInputChange = (input) => {
  if (input.value.length > 15) {
    input.value = input.value.slice(0, 15);
  }
  saveInputToLocalStorage(input);
};

const handleCheckboxChange = (input) => {
  // Check landscape mode from local storage
  const landscapeMode = getFromLocalStorage("landscape-mode");
  if (landscapeMode === "true") {
    // Apply rotation if landscape mode is true
    document.querySelector(".bubble-container").style.transform =
      "rotate(90deg)";
  } else {
    // Reset rotation if landscape mode is false
    document.querySelector(".bubble-container").style.transform =
      "rotate(0deg)";
  }
  saveToLocalStorage("landscape-mode", input.checked);
};

formInputs.forEach((input) => {
  if (input.name === "select-number") {
    input.addEventListener("input", () => {
      handleNumberInputChange(input);
    });
  }
  if (input.name === "select-djzikr") {
    input.addEventListener("input", () => {
      handleDjzikrInputChange(input);
    });
  }
  if (input.name === "landscape-checkbox") {
    input.addEventListener("change", () => {
      handleCheckboxChange(input);
    });
  }
});

closeMenuButton.addEventListener("click", () => {
  hideMenu();
  updateTextAndNumberDisplay();
});

startButton.addEventListener("click", () => {
  hideMenu();
  resetCount();
  updateTextAndNumberDisplay();
});

const updateTextAndNumberDisplay = (text, number) => {
  const djzikrText = getFromLocalStorage("select-djzikr");
  const targetNumber = getFromLocalStorage("select-number");

  displayDjzikrText(djzikrText || getDefaultInputValue("select-djzikr"));
  displayTargetNumber(targetNumber || getDefaultInputValue("select-number"));
};

export const initializeMenuInputs = () => {
  formInputs.forEach((input) => {
    const savedValue = getFromLocalStorage(input.name);
    if (savedValue) {
      input.value = savedValue;
    } else {
      const defaultValue = getDefaultInputValue(input.name);
      input.value = defaultValue;
      saveInputToLocalStorage(input);
    }
  });
};

export const initializeDisplayInputs = () => {
  const selectDjzikrDisplay = document.querySelector(".select-djzikr-display");
  const selectNumberDisplay = document.querySelector(".select-number-display");

  const savedDjzikrText = getFromLocalStorage("select-djzikr");
  const savedTargetNumber = getFromLocalStorage("select-number");

  // Initialize .select-djzikr-display
  if (savedDjzikrText) {
    selectDjzikrDisplay.textContent = savedDjzikrText;
  } else {
    const defaultDjzikrText = getDefaultInputValue("select-djzikr");
    selectDjzikrDisplay.textContent = defaultDjzikrText;
    saveToLocalStorage("select-djzikr", defaultDjzikrText);
  }

  // Initialize .select-number-display
  if (savedTargetNumber) {
    selectNumberDisplay.textContent = savedTargetNumber;
  } else {
    const defaultTargetNumber = getDefaultInputValue("select-number");
    selectNumberDisplay.textContent = defaultTargetNumber;
    saveToLocalStorage("select-number", defaultTargetNumber);
  }
};

const getDefaultInputValue = (inputName) => {
  const defaultValues = {
    "select-djzikr": "SubhanAllah",
    "select-number": "100",
  };
  return defaultValues[inputName] || "";
};

const displayDjzikrText = (text) => {
  const djzikrDisplay = document.querySelector(".select-djzikr-display");
  djzikrDisplay.textContent = text;
};

const displayTargetNumber = (number) => {
  const targetNumberDisplay = document.querySelector(".select-number-display");
  targetNumberDisplay.textContent = number;
};

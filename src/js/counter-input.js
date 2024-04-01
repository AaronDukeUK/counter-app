import {
  getCountFromLocalStorage,
  getMaxCountFromLocalStorage,
  updateCountDisplay,
} from "./counter.js";

const inputContainer = document.querySelector(".count-input-container");
const inputField = document.querySelector(".count-input");

export const initializeInput = () => {
  hideInputField();
  inputField.addEventListener("input", handleInput);
  inputField.addEventListener("keydown", handleEnterKeyPress);
};

const hideInputField = () => {
  inputContainer.style.display = "none";
  inputField.removeEventListener("keydown", handleKeyDown);
};

const showInputField = () => {
  inputContainer.style.display = "block";
};

const handleInput = (event) => {
  const newValue = parseInputValue(event.target.value);
  updateInputValue(newValue);
};

const parseInputValue = (value) => {
  const maxCount = getMaxCountFromLocalStorage();
  const parsedValue = value.replace(/\D/g, "");
  return parsedValue === "" ? 0 : Math.min(maxCount, parseInt(parsedValue));
};

const updateInputValue = (value) => {
  inputField.value = value;
  updateCountDisplay(value);
};

const handleEnterKeyPress = (event) => {
  if (event.key === "Enter") {
    toggleInputVisibility();
  }
};

export const toggleInputVisibility = () => {
  if (inputContainer.style.display === "none") {
    showInputField();
    inputField.value = getCountFromLocalStorage();
    inputField.focus();

    inputField.addEventListener("keydown", handleKeyDown);
  } else {
    hideInputField();
  }
};

const handleKeyDown = (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    hideInputField();
  }
};

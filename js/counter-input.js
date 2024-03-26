import { getCountFromLocalStorage, updateCountDisplay } from "./counter.js";

const inputField = document.querySelector(".count-input");

export const initializeInput = () => {
  hideInputField();
  inputField.addEventListener("input", handleInput);
  inputField.addEventListener("keydown", handleEnterKeyPress);
};

const hideInputField = () => {
  inputField.style.display = "none";
};

const handleInput = (event) => {
  const newValue = parseInputValue(event.target.value);
  updateInputValue(newValue);
};

const parseInputValue = (value) => {
  const parsedValue = value.replace(/\D/g, "");
  return parsedValue === "" ? 0 : Math.min(100, parseInt(parsedValue));
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
  inputField.readOnly = !inputField.readOnly;
  inputField.style.display = inputField.readOnly ? "none" : "block";

  if (!inputField.readOnly) {
    inputField.type = "number";
    inputField.value = getCountFromLocalStorage();
    inputField.focus();
  }
};

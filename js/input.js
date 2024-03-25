// input.js
import { getCountFromSessionStorage, updateCountDisplay } from "./counter.js";

export const initializeInput = () => {
  // Hide input on pageload
  document.querySelector(".count-input").style.display = "none";

  // Event listener for input field
  document.querySelector(".count-input").addEventListener("input", (event) => {
    let newValue = event.target.value.replace(/\D/g, "");
    newValue = newValue === "" ? 0 : Math.min(100, parseInt(newValue));
    event.target.value = newValue;
    updateCountDisplay(newValue);
  });

  // Event listener for Enter key press
  document
    .querySelector(".count-input")
    .addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        toggleInputVisibility();
      }
    });
};

export const toggleInputVisibility = () => {
  const inputField = document.querySelector(".count-input");
  inputField.readOnly = !inputField.readOnly;
  inputField.style.display = inputField.readOnly ? "none" : "block";

  if (!inputField.readOnly) {
    inputField.type = "number";
    inputField.value = getCountFromSessionStorage();
    inputField.focus();
  }
};

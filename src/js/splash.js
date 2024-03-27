export const showOverlay = () => {
  const overlay = document.querySelector(".splash");
  setTimeout(() => {
    overlay.style.opacity = "0";
    setTimeout(() => {
      overlay.style.display = "none";
    }, 1000);
  }, 1000);
};

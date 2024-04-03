export const initializePWA = () => {
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    showInstallPrompt(deferredPrompt);
  });
};

const showInstallPrompt = (deferredPrompt) => {
  document.querySelector(".install-button").style.display = "block";
  document.querySelector(".install-button").addEventListener("click", () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
  });
};

let installPrompt = null;
const installButton = document.querySelector("#install-button");

export const initializePWA = () => {
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    installPrompt = event;
    installButton.style.display = "flex";
  });
};

installButton.addEventListener("click", async () => {
  if (!installPrompt) return;

  await installPrompt.prompt();
  disableInAppInstallPrompt();
});

function disableInAppInstallPrompt() {
  installPrompt = null;
  installButton.style.display = "none";
}

// Step 1: Detect support for installable PWAs
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (event) => {
  // Prevent the default installation prompt
  event.preventDefault();
  // Stash the event so it can be triggered later
  deferredPrompt = event;
  // Show the install button
  showInstallButton();
});

// Step 2: Listen for the "beforeinstallprompt" event

function showInstallButton() {
  // Get a reference to your custom install button
  const installButton = document.getElementById("installButton");

  // Add click event listener to the install button
  installButton.addEventListener("click", () => {
    // Trigger the installation prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
      // Clear the deferredPrompt variable
      deferredPrompt = null;
    });
  });
}

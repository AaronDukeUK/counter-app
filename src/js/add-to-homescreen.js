export const InitializeAddToHomeScreen = () => {
  window.AddToHomeScreenInstance = new window.AddToHomeScreen({
    appName: "Dhikr",
    appIconUrl: "/assets/images/512x512.png",
    assetUrl:
      "https://cdn.jsdelivr.net/gh/philfung/add-to-homescreen@1.8/dist/assets/img/",
    showErrorMessageForUnsupportedBrowsers:
      window.AddToHomeScreen.SHOW_ERRMSG_UNSUPPORTED.ALL,
    allowUserToCloseModal: true,
    maxModalDisplayCount: -1,
  });
};

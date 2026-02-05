(() => {
  console.warn(
    "The get-latest.html layout is deprecated. Please use the get-latest.js script instead."
  );

  const scriptEl = document.currentScript;

  const API_LATEST_RELEASE_URL =
    scriptEl?.dataset.apiLatest ||
    "https://api.github.com/repos/opengisch/QField/releases/latest";

  const BROWSER_LATEST_RELEASE_URL =
    scriptEl?.dataset.browserLatest ||
    "https://github.com/opengisch/QField/releases/latest";

  const redirect = (url) => window.location.replace(url);

  try {
    const params = new URLSearchParams(window.location.search);
    const platform = params.get("platform");

    if (!platform) throw new Error('No "platform" parameter provided');

    const storeTargets = {
      android: "https://play.google.com/store/apps/details?id=ch.opengis.qfield",
      ios: "https://apps.apple.com/app/qfield-for-qgis/id1531726814"
    };

    const storeTarget = storeTargets[platform];
    if (storeTarget) {
      redirect(storeTarget);
      return;
    }

    fetch(API_LATEST_RELEASE_URL)
      .then((response) => {
        if (!response.ok) throw new Error("GitHub API error");
        return response.json();
      })
      .then((json) => {
        const tag = json.tag_name;

        let downloadUrl =
          "https://github.com/opengisch/QField/releases/download/" +
          tag +
          "/qfield-" +
          tag +
          "-";

        if (platform === "windows") downloadUrl += "windows-x64.exe";
        else if (platform === "linux") downloadUrl += "linux-x64.AppImage";
        else if (platform === "macos") downloadUrl += "macos.dmg";
        else return BROWSER_LATEST_RELEASE_URL;

        const exists = (json.assets || []).some(
          (asset) => asset.browser_download_url === downloadUrl
        );

        return exists ? downloadUrl : BROWSER_LATEST_RELEASE_URL;
      })
      .then(redirect)
      .catch(() => redirect(BROWSER_LATEST_RELEASE_URL));
  } catch {
    redirect(BROWSER_LATEST_RELEASE_URL);
  }
})();

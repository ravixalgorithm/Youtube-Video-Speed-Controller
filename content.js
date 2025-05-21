const observer = new MutationObserver(() => {
  const video = document.querySelector("video");
  if (video && !video.hasAttribute("data-gati")) {
    video.setAttribute("data-gati", "true");
    chrome.storage.local.get("gatiSpeed", ({ gatiSpeed }) => {
      if (gatiSpeed) video.playbackRate = gatiSpeed;
    });
    video.addEventListener("ratechange", () => {
      chrome.storage.local.set({ gatiSpeed: video.playbackRate });
    });
  }
});
observer.observe(document, { subtree: true, childList: true });
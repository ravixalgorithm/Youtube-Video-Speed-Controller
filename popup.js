document.getElementById("applySpeed").addEventListener("click", async () => {
  const speed = parseFloat(document.getElementById("speedInput").value);
  if (speed >= 0.1 && speed <= 5.0) {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: (speed) => {
        const video = document.querySelector("video");
        if (video) video.playbackRate = speed;
      },
      args: [speed]
    });
  }
});

document.getElementById("speedRange").addEventListener("input", e => {
  document.getElementById("speedInput").value = e.target.value;
});
document.getElementById("speedInput").addEventListener("input", e => {
  document.getElementById("speedRange").value = e.target.value;
});
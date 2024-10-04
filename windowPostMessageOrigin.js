const WINDOW_URL = "https://www.google.com"

function openSecondChannel() {
  window.open(WINDOW_URL);
}

const channelRenderer = document.getElementById("channel-renderer");

window.addEventListener("message", (e) => {
  console.log(e);
  channelRenderer.insertAdjacentText("beforeEnd", "e.data:")
  channelRenderer.insertAdjacentHTML("beforeEnd", "<br />")
  channelRenderer.insertAdjacentText("beforeEnd", JSON.stringify(e.data, null, 2));
  channelRenderer.insertAdjacentHTML("beforeEnd", "<br />")
});

console.log(window);
console.log(window.location.origin);

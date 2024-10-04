const WINDOW_URL = "https://incandescent-frangollo-63d854.netlify.app/"
const WINDOW_URL2 = "https://gilded-kulfi-696033.netlify.app/"

function openSecondChannel() {
  window.open(WINDOW_URL);
}
function openSecondChannel2() {
  window.open(WINDOW_URL2);
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

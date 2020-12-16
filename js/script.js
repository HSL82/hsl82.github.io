const player = document.querySelector("#animationPlayer");
const marker = document.querySelector("#animated-marker");
const cover = document.querySelector("#cover");
const loading = document.querySelector("#loading");
var clicked = false;
var firstVisible = false;
var animationStarted = false;
//init
cover.style.display = "block";

player.addEventListener("animation-finished", function () {
  console.log("done");
  player.setAttribute("animation-mixer", "timeScale: 0");
});

marker.addEventListener("markerFound", function () {
  console.log("marker found");
  player.setAttribute(
    "animation-mixer",
    "clip: All Animations; repetitions: 1; timeScale: 1"
  );

  if (!firstVisible) {
    loading.style.display = "flex";

    setTimeout(() => {
      player.setAttribute("visible", "true");
      firstVisible = true;
      animationStarted = true;
    }, 700);

    setTimeout(() => {
      loading.style.display = "none";
    }, 3000);
  }
});

marker.addEventListener("markerLost", function () {
  console.log("marker lost");
  if (animationStarted == true)
    player.setAttribute("animation-mixer", "timeScale: 0");
});

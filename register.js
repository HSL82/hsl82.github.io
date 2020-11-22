document.addEventListener("DOMContentLoaded", function (event) {
  var scene = document.querySelector("a-scene");
  const player = document.querySelector("#animationPlayer");
  const marker = document.querySelector("#animated-marker");
  //   console.log(marker);
  marker.addEventListener("markerFound", function () {
    console.log("test5");
    player.setAttribute("animation-mixer", {timeScale: 1});
    // player.setAttribute(
    //   "animation-mixer",
    //   "clip: Take 001; repetitions: 1; timeScale: 1"
    // );
  });
  console.log("loaded");
  if (scene.hasLoaded) {
    run();
  } else {
    scene.addEventListener("loaded", run);
  }
});

var audio = new Audio("bgm.mp3");
const player = document.querySelector("#animationPlayer");
const marker = document.querySelector("#animated-marker");
const cover = document.querySelector("#cover");
const loading = document.querySelector("#loading");
const btnStart = document.querySelector("#btnStart");
const btnRefresh = document.querySelector("#btnRefresh");

var clicked = false;
var markerVisible = false;
var firstVisible = false;
var animationStarted = false;
//init
cover.style.display = "block";

function soundhandler() {
  setInterval(() => {
    if (clicked && markerVisible && animationStarted) {
      audio.play();
    } else {
      audio.pause();
    }
  }, 700);
}

btnStart.addEventListener(
  "click",
  function () {
    cover.style.display = "none";
    audio.play();
    audio.pause();
    clicked = true;
  },
  {once: true}
);

btnRefresh.addEventListener(
  "click",
  function () {
    location.reload();
  },
  {once: true}
);

player.addEventListener(
  "animation-finished",
  function () {
    player.setAttribute("animation-mixer", "timeScale: 0");
  },
  {once: true}
);

marker.addEventListener("markerFound", function () {
  console.log("test5");
  markerVisible = true;
  player.setAttribute(
    "animation-mixer",
    "clip: Take 001; repetitions: 1; timeScale: 1"
  );
  if (!firstVisible) {
    loading.style.display = "block";

    setTimeout(() => {
      player.setAttribute("visible", "true");
      player.setAttribute("shadow", "cast: true; receive: true");

      firstVisible = true;
      animationStarted = true;
    }, 700);

    setTimeout(() => {
      loading.style.display = "none";
    }, 3000);
  }
});

marker.addEventListener("markerLost", function () {
  // if (!firstVisible) {
  console.log("test3");
  if (animationStarted == true)
    player.setAttribute("animation-mixer", "timeScale: 0");
  markerVisible = false;

  // }
});

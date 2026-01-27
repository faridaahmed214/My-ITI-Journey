let vd = document.querySelector(".video");
let play = document.getElementById("play");
let pause = document.getElementById("pause");
let mute = document.querySelector(".mute");
let slider = document.getElementById("slider");
let volume = document.getElementById("volume");
let back = document.getElementById("back");
let front = document.getElementById("front");
let toBack = document.getElementById("toBack");
let toFront = document.getElementById("toFront");
let speed = document.getElementById("speed");
let currentTimeDisplay = document.getElementById("currentTime");
let totalTimeDisplay = document.getElementById("totalTime");

let playlist = ["Ratatouille.mp4", "beauty and the beast.mp4", "frozen.mp4"];
let currentVideoIndex = 0; 

vd.src = playlist[currentVideoIndex];

function formatTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return minutes + ":" + seconds;
}

play.addEventListener("click", function () {
  vd.play();
});

pause.addEventListener("click", function () {
  vd.pause();
});

mute.addEventListener("click", function () {
  vd.muted = !vd.muted;
  if (vd.muted) {
    volume.value = 0;
  } else {
    volume.value = vd.volume * 100;
  }
});

vd.addEventListener("loadedmetadata", function () {
  totalTimeDisplay.innerText = formatTime(vd.duration);
});

vd.addEventListener("timeupdate", function () {
  slider.value = (vd.currentTime / vd.duration) * 100;
  currentTimeDisplay.innerText = formatTime(vd.currentTime);
});

slider.addEventListener("input", function () {
  vd.currentTime = (slider.value / 100) * vd.duration;
});

volume.addEventListener("input", function () {
  vd.volume = volume.value / 100;
});

toBack.addEventListener("click", function () {
  currentVideoIndex--; 
  if (currentVideoIndex < 0) {
    currentVideoIndex = playlist.length - 1;
  }
  vd.src = playlist[currentVideoIndex];
  vd.play();
});

toFront.addEventListener("click", function () {
  currentVideoIndex++; 
  if (currentVideoIndex > playlist.length - 1) {
    currentVideoIndex = 0;
  }
  vd.src = playlist[currentVideoIndex];
  vd.play();
});

back.addEventListener("click", function () {
  vd.currentTime -= 10;
});

front.addEventListener("click", function () {
  vd.currentTime += 10;
});

if (vd.volume == 0) {
  volume.value = 0;
} else {
  volume.value = vd.volume * 100;
}

vd.addEventListener("ratechange", function () {
  speed.value = vd.playbackRate;
});

speed.addEventListener("input", function () {
  vd.playbackRate = speed.value;
});
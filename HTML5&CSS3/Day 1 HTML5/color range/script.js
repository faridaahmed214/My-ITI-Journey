const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const text = document.querySelector("h1");

function updateColor() {
  text.style.color = "rgb(" + red.value + "," + green.value + "," + blue.value + ")";
}

red.addEventListener("input", updateColor);
green.addEventListener("input", updateColor);
blue.addEventListener("input", updateColor);
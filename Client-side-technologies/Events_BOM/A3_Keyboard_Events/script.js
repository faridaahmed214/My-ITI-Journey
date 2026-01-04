const input = document.getElementById("inputField");
const typeDisplay = document.getElementById("eventType");
const physDisplay = document.getElementById("physKey");
const charDisplay = document.getElementById("charKey");
const msgDisplay = document.getElementById("msg");

function updateDisplay(event, type) {
  typeDisplay.textContent = type;
  physDisplay.textContent = event.code;
  charDisplay.textContent = event.key;
  msgDisplay.textContent = "";
}

input.addEventListener("keydown", function (event) {
  updateDisplay(event, "keydown");

  if (event.ctrlKey && event.key.toLowerCase() === "s") {
    event.preventDefault();
    msgDisplay.textContent = "Ctrl+S default behavior prevented!";
  }
  if (event.ctrlKey && event.key.toLowerCase() === "w") {
    event.preventDefault();
    msgDisplay.textContent = "Ctrl+W default behavior prevented!";
  }
});

input.addEventListener("keypress", function (event) {
  updateDisplay(event, "keypress");
});

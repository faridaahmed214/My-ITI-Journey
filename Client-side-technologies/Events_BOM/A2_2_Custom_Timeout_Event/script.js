const inputField = document.getElementById("userInput");
const statusMsg = document.getElementById("statusMessage");
const timeoutEvent = new Event("custEvent");

let timer = setTimeout(function () {
  document.dispatchEvent(timeoutEvent);
}, 3000);

inputField.addEventListener("input", function () {
  clearTimeout(timer);
  statusMsg.textContent = "typing...";
  statusMsg.style.color = "green";
});

document.addEventListener("custEvent", function () {
  statusMsg.textContent = "Alert: 3 seconds passed without input!";
  statusMsg.style.color = "red";
  alert("Time is up");
});

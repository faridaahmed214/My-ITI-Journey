let typingMessage = "Hello!";
let i = 0;
function writeInChild() {
  let child = window.open("child.html", self, "width=400,height=400");
  let writeTimer = setInterval(function () {
    let element = child.document.getElementById("child");

    if (element) {
      if (i < typingMessage.length) {
        element.innerText += typingMessage[i];
        i++;
      } else {
        clearInterval(writeTimer);
        setTimeout(function () {
          child.close();
        }, 1000);
      }
    }
  }, 1000);
}

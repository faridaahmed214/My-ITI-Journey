let childWindow;
let timer;
let scrollStep = 5;
let step = 10;

function openChildSetInt() {
  childWindow = window.open(
    "Flying_Window.html",
    "Flying Window",
    "width=250,height=250,scrollbars=yes"
  );

  let screenheight = window.screen.availHeight;
  timer = setInterval(function () {
    let childHeight = childWindow.screenY;
    childWindow.resizeTo(250, 250);
    if (childHeight + 250 >= screenheight) {
      step = -10;
    } else if (childHeight <= 0) {
      step = 10;
    }
    childWindow.moveBy(step, step);
    childWindow.focus();
    childWindow.scrollBy(0, scrollStep);

    let currentBottom = childWindow.scrollY + childWindow.innerHeight;
    let totalHeight = childWindow.document.body.scrollHeight;

    if (currentBottom >= totalHeight) {
      scrollStep = -5;
    } else if (childWindow.scrollY <= 0) {
      scrollStep = 5;
    }
  }, 50);
}
function stopmoveint() {
  clearInterval(timer);
  childWindow.focus();
}

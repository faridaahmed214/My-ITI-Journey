let childWindow2;
let timer2;
let moveStep2 = 9;
let scrollStep2 = 5;

function openChildSetTimeOut() {
  childWindow2 = window.open(
    "Flying_Window.html",
    "Flying Window",
    "width=250,height=250"
  );
  moveChild();
}

function moveChild() {
  let screenheight = window.screen.availHeight;
  if (!childWindow2 || childWindow2.closed) {
    stopmovetimeout();
    return;
  }
  childWindow2.resizeTo(250, 250);

  let childheight = childWindow2.screenY;

  if (childheight + 250 >= screenheight) {
    moveStep2 = -9;
  } else if (childheight <= 0) {
    moveStep2 = 9;
  }
  childWindow2.moveBy(moveStep2, moveStep2);
  childWindow2.focus();

  childWindow2.scrollBy(0, scrollStep2);

  let currentBottom = childWindow2.scrollY + childWindow2.innerHeight;
  let totalHeight = childWindow2.document.body.scrollHeight;

  if (currentBottom >= totalHeight) {
    scrollStep2 = -5;
  } else if (childWindow2.scrollY <= 0) {
    scrollStep2 = 5;
  }
  timer2 = setTimeout(moveChild, 50);
}

function stopmovetimeout() {
  clearTimeout(timer2);
}

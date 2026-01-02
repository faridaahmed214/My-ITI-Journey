let i = 0;
let allMarbels = document.getElementsByClassName("marbel0");
let timer;
let container = document.getElementsByClassName("marbel")[0];

function playAnimation() {
  for (let j = 0; j < allMarbels.length; j++) {
    allMarbels[j].src = "marbel0.png";
  }
  allMarbels[i].src = "marbel" + (i + 1) + ".png";
  i++;
  if (i === allMarbels.length) {
    i = 0;
  }
}

timer = setInterval(playAnimation, 500);

container.onmouseover = function () {
  clearInterval(timer);

  for (let j = 0; j < allMarbels.length; j++) {
    allMarbels[j].src = "marbel0.png";
  }
};

container.onmouseout = function () {
  timer = setInterval(playAnimation, 500);
};

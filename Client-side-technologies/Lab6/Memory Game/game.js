const gameBoard = document.getElementById("game-board");
const cards = document.getElementsByClassName("card");
const msg = document.getElementById("msg");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let score = 0;

let randomCards = [];
for (let i = 0; i < cards.length; i++) {
  randomCards.push(cards[i]);
}

randomCards.sort(function () {
  return 0.5 - Math.random();
});

for (let i = 0; i < randomCards.length; i++) {
  gameBoard.appendChild(randomCards[i]);

  randomCards[i].onclick = function () {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.src = this.getAttribute("name") + ".png";

    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
      return;
    }

    secondCard = this;
    checkForMatch();
  };
}

function checkForMatch() {
  let isMatch =
    firstCard.getAttribute("name") === secondCard.getAttribute("name");
  if (isMatch) {
    disableCards();
  } else {
    unflipCards();
  }
}

function disableCards() {
  firstCard.onclick = null;
  secondCard.onclick = null;

  score++;
  msg.innerText = "Score: " + score;

  if (score === 6) {
    document.querySelector(".game-container").style.opacity = "0.1";
    document.getElementById("winner-msg").style.display = "block";
  }

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(function () {
    firstCard.src = "quest.png";
    secondCard.src = "quest.png";
    resetBoard();
  }, 1000);
}

function resetBoard() {
  hasFlippedCard = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
}

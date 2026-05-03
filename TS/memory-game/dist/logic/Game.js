import { Card } from '../models/Card.js';
import { getRandomSubarray, shuffleArray } from '../utils/math.js';
export class MemoryGame {
    imagesPool;
    soundManager;
    cards = [];
    board;
    movesElement;
    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
    movesCount = 0;
    matchesCount = 0;
    pairsCount = 9;
    constructor(containerId, movesId, imagesPool, soundManager) {
        this.imagesPool = imagesPool;
        this.soundManager = soundManager;
        this.board = document.getElementById(containerId);
        this.movesElement = document.getElementById(movesId);
    }
    start() {
        this.reset();
        const selectedImages = getRandomSubarray(this.imagesPool, this.pairsCount);
        const pairedImages = [...selectedImages, ...selectedImages];
        const shuffled = shuffleArray(pairedImages);
        this.cards = shuffled.map((img, i) => new Card(i, img));
        this.render();
    }
    reset() {
        this.board.innerHTML = '';
        this.cards = [];
        this.movesCount = 0;
        this.matchesCount = 0;
        this.hasFlippedCard = false;
        this.lockBoard = false;
        this.firstCard = null;
        this.secondCard = null;
        this.movesElement.innerText = this.movesCount.toString();
    }
    render() {
        this.cards.forEach(card => {
            card.element.addEventListener('click', () => this.handleFlip(card));
            this.board.appendChild(card.element);
        });
    }
    handleFlip(card) {
        if (this.lockBoard)
            return;
        if (card.isFlipped)
            return;
        if (card === this.firstCard)
            return;
        card.flip();
        this.soundManager.playFlip();
        if (!this.hasFlippedCard) {
            // First click
            this.hasFlippedCard = true;
            this.firstCard = card;
            return;
        }
        // Second click
        this.secondCard = card;
        this.movesCount++;
        this.movesElement.innerText = this.movesCount.toString();
        this.checkForMatch();
    }
    checkForMatch() {
        const isMatch = this.firstCard.value === this.secondCard.value;
        if (isMatch) {
            this.disableCards();
            this.soundManager.playRight();
            this.matchesCount++;
            if (this.matchesCount === this.pairsCount) {
                setTimeout(() => {
                    this.soundManager.playGameOver();
                    const overlay = document.getElementById('game-over-overlay');
                    if (overlay) {
                        overlay.classList.remove('hidden');
                    }
                }, 500);
            }
        }
        else {
            this.soundManager.playWrong();
            this.unflipCards();
        }
    }
    disableCards() {
        this.firstCard.match();
        this.secondCard.match();
        this.resetBoard();
    }
    unflipCards() {
        this.lockBoard = true;
        setTimeout(() => {
            this.firstCard.unflip();
            this.secondCard.unflip();
            this.resetBoard();
        }, 1000); // the exact 1 second requirement
    }
    resetBoard() {
        this.hasFlippedCard = false;
        this.lockBoard = false;
        this.firstCard = null;
        this.secondCard = null;
    }
}
//# sourceMappingURL=Game.js.map
import type { ICard } from '../interfaces/ICard.js';
import type { ISoundManager } from '../interfaces/ISoundManager.js';
import { Card } from '../models/Card.js';
import { getRandomSubarray, shuffleArray } from '../utils/math.js';

export class MemoryGame {
    private cards: ICard[] = [];
    private board: HTMLElement;
    private movesElement: HTMLElement;
    
    private hasFlippedCard: boolean = false;
    private lockBoard: boolean = false;
    private firstCard: ICard | null = null;
    private secondCard: ICard | null = null;
    
    private movesCount: number = 0;
    private matchesCount: number = 0;
    private readonly pairsCount: number = 9; 

    constructor(
        containerId: string, 
        movesId: string,
        private imagesPool: string[],
        private soundManager: ISoundManager
    ) {
        this.board = document.getElementById(containerId)!;
        this.movesElement = document.getElementById(movesId)!;
    }

    public start(): void {
        this.reset();
        
        const selectedImages = getRandomSubarray(this.imagesPool, this.pairsCount);
        const pairedImages = [...selectedImages, ...selectedImages];
        
        const shuffled = shuffleArray(pairedImages);
        
        this.cards = shuffled.map((img, i) => new Card(i, img));
        this.render();
    }

    public reset(): void {
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

    private render(): void {
        this.cards.forEach(card => {
            card.element.addEventListener('click', () => this.handleFlip(card));
            this.board.appendChild(card.element);
        });
    }

    private handleFlip(card: ICard): void {
        if (this.lockBoard) return;
        if (card.isFlipped) return;
        if (card === this.firstCard) return;

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

    private checkForMatch(): void {
        const isMatch = this.firstCard!.value === this.secondCard!.value;

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
        } else {
            this.soundManager.playWrong();
            this.unflipCards();
        }
    }

    private disableCards(): void {
        this.firstCard!.match();
        this.secondCard!.match();
        this.resetBoard();
    }

    private unflipCards(): void {
        this.lockBoard = true;

        setTimeout(() => {
            this.firstCard!.unflip();
            this.secondCard!.unflip();
            this.resetBoard();
        }, 1000); // the exact 1 second requirement
    }

    private resetBoard(): void {
        this.hasFlippedCard = false;
        this.lockBoard = false;
        this.firstCard = null;
        this.secondCard = null;
    }
}
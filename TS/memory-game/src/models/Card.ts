import type { ICard } from '../interfaces/ICard.js';

export class Card implements ICard {
    public element: HTMLElement;
    public isFlipped: boolean = false;
    public isMatched: boolean = false;

    constructor(public id: number, public value: string) {
        this.element = this.createCardElement();
    }

    private createCardElement(): HTMLElement {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.dataset.value = this.value;

        const innerDiv = document.createElement('div');
        innerDiv.classList.add('card-inner');

        const frontDiv = document.createElement('div');
        frontDiv.classList.add('card-front');

        const backDiv = document.createElement('div');
        backDiv.classList.add('card-back');
        const img = document.createElement('img');
        img.src = this.value;
        img.draggable = false;
        backDiv.appendChild(img);

        innerDiv.appendChild(frontDiv);
        innerDiv.appendChild(backDiv);
        cardDiv.appendChild(innerDiv);

        return cardDiv;
    }

    public flip(): void {
        this.isFlipped = true;
        this.element.classList.add('flipped');
    }

    public unflip(): void {
        this.isFlipped = false;
        this.element.classList.remove('flipped');
    }

    public match(): void {
        this.isMatched = true;
        this.element.classList.add('matched');
    }
}
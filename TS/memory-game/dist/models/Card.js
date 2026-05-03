export class Card {
    id;
    value;
    element;
    isFlipped = false;
    isMatched = false;
    constructor(id, value) {
        this.id = id;
        this.value = value;
        this.element = this.createCardElement();
    }
    createCardElement() {
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
    flip() {
        this.isFlipped = true;
        this.element.classList.add('flipped');
    }
    unflip() {
        this.isFlipped = false;
        this.element.classList.remove('flipped');
    }
    match() {
        this.isMatched = true;
        this.element.classList.add('matched');
    }
}
//# sourceMappingURL=Card.js.map
import type { ICard } from '../interfaces/ICard.js';
export declare class Card implements ICard {
    id: number;
    value: string;
    element: HTMLElement;
    isFlipped: boolean;
    isMatched: boolean;
    constructor(id: number, value: string);
    private createCardElement;
    flip(): void;
    unflip(): void;
    match(): void;
}
//# sourceMappingURL=Card.d.ts.map
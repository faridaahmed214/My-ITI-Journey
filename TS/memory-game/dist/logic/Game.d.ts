import type { ISoundManager } from '../interfaces/ISoundManager.js';
export declare class MemoryGame {
    private imagesPool;
    private soundManager;
    private cards;
    private board;
    private movesElement;
    private hasFlippedCard;
    private lockBoard;
    private firstCard;
    private secondCard;
    private movesCount;
    private matchesCount;
    private readonly pairsCount;
    constructor(containerId: string, movesId: string, imagesPool: string[], soundManager: ISoundManager);
    start(): void;
    reset(): void;
    private render;
    private handleFlip;
    private checkForMatch;
    private disableCards;
    private unflipCards;
    private resetBoard;
}
//# sourceMappingURL=Game.d.ts.map
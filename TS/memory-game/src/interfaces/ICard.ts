export interface ICard {
    id: number;
    value: string;
    element: HTMLElement;
    isFlipped: boolean;
    isMatched: boolean;
    flip(): void;
    unflip(): void;
    match(): void;
}

import type { ISoundManager } from '../interfaces/ISoundManager.js';
export declare class SoundManager implements ISoundManager {
    private flipSound;
    private rightSound;
    private wrongSound;
    private gameOverSound;
    private backgroundSound;
    private stopTimeout;
    constructor();
    private stopAll;
    playFlip(): void;
    playRight(): void;
    playWrong(): void;
    playGameOver(): void;
    playBackground(): void;
    private playSound;
}
//# sourceMappingURL=SoundManager.d.ts.map
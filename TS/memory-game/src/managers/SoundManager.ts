import type { ISoundManager } from '../interfaces/ISoundManager.js';

export class SoundManager implements ISoundManager {
    private flipSound: HTMLAudioElement;
    private rightSound: HTMLAudioElement;
    private wrongSound: HTMLAudioElement;
    private gameOverSound: HTMLAudioElement;
    private backgroundSound: HTMLAudioElement;
    
    private stopTimeout: number | undefined;

    constructor() {
        this.flipSound = new Audio('./assets/sounds/flip.mp3');
        this.rightSound = new Audio('./assets/sounds/right.mp3');
        this.wrongSound = new Audio('./assets/sounds/wrong.mp3');
        this.gameOverSound = new Audio('./assets/sounds/gameOver.mp3');
        this.backgroundSound = new Audio('./assets/sounds/background.mp3');
        
        this.backgroundSound.loop = true;
        this.backgroundSound.volume = 0.2; 
        
        this.flipSound.load();
        this.rightSound.load();
        this.wrongSound.load();
        this.gameOverSound.load();
        this.backgroundSound.load();
    }

    private stopAll(): void {
        const sounds = [this.flipSound, this.rightSound, this.wrongSound, this.gameOverSound];
        sounds.forEach(audio => {
            audio.pause();
            audio.currentTime = 0;
        });

        if (this.stopTimeout) {
            clearTimeout(this.stopTimeout);
            this.stopTimeout = undefined;
        }
    }

    public playFlip(): void {
        this.playSound(this.flipSound);
    }

    public playRight(): void {
        this.playSound(this.rightSound, 1);
    }

    public playWrong(): void {
        this.playSound(this.wrongSound);
    }

    public playGameOver(): void {
        this.playSound(this.gameOverSound);
    }

    public playBackground(): void {
        if (this.backgroundSound.paused) {
            this.backgroundSound.play().catch(e => console.warn('Autoplay blocked:', e));
        }
    }

    private playSound(audio: HTMLAudioElement, startTime: number = 0): void {
        this.stopAll();

        audio.currentTime = startTime;

        audio.play().catch(e => {
            console.warn('Audio play failed (maybe no interaction yet): ', e);
        });

        this.stopTimeout = window.setTimeout(() => {
            audio.pause();
            audio.currentTime = 0;
        }, 3000);
    }
}

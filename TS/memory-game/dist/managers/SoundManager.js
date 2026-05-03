export class SoundManager {
    flipSound;
    rightSound;
    wrongSound;
    gameOverSound;
    backgroundSound;
    stopTimeout;
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
    stopAll() {
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
    playFlip() {
        this.playSound(this.flipSound);
    }
    playRight() {
        this.playSound(this.rightSound, 1);
    }
    playWrong() {
        this.playSound(this.wrongSound);
    }
    playGameOver() {
        this.playSound(this.gameOverSound);
    }
    playBackground() {
        if (this.backgroundSound.paused) {
            this.backgroundSound.play().catch(e => console.warn('Autoplay blocked:', e));
        }
    }
    playSound(audio, startTime = 0) {
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
//# sourceMappingURL=SoundManager.js.map
import { MemoryGame } from './logic/Game.js';
import { SoundManager } from './managers/SoundManager.js';
const imagePool = [
    './assets/images/cyber_battery_1775737683982.png',
    './assets/images/cyber_dog_1775737701907.png',
    './assets/images/cyber_goggles_1775737643314.png',
    './assets/images/cyber_helmet_1775737730961.png',
    './assets/images/cyber_hoverboard_1775741488742.png',
    './assets/images/cyber_katana_1775737669421.png',
    './assets/images/cyber_processor_1775737655859.png',
    './assets/images/cyber_soda_1775737717916.png',
    './assets/images/cyber_vr_1775737751241.png'
];
document.addEventListener('DOMContentLoaded', () => {
    const soundManager = new SoundManager();
    const game = new MemoryGame('game-board', 'moves-count', imagePool, soundManager);
    const restartBtn = document.getElementById('restart-btn');
    if (restartBtn) {
        restartBtn.addEventListener('click', () => {
            game.start();
        });
    }
    const playAgainBtn = document.getElementById('play-again-btn');
    const overlay = document.getElementById('game-over-overlay');
    if (playAgainBtn && overlay) {
        playAgainBtn.addEventListener('click', () => {
            overlay.classList.add('hidden');
            game.start();
        });
    }
    document.addEventListener('click', () => {
        soundManager.playBackground();
    }, { once: false });
    game.start();
});
//# sourceMappingURL=app.js.map
class Game {
    constructor() {
        const keys = Array.from(document.querySelectorAll('.key'));
        keys.forEach(key => key.addEventListener('transitionend', this.removeTransition));
        window.addEventListener('keydown', this.playSound);
    }
    removeTransition(e) {
        if (e.propertyName !== 'transform')
            return;
        e.target.classList.remove('playing');
    }
    playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
        if (!audio)
            return;
        key.classList.add('playing');
        audio.currentTime = 0;
        audio.play();
    }
}
let app;
(function () {
    let init = function () {
        app = new Game();
    };
    window.addEventListener('load', init);
})();
//# sourceMappingURL=main.js.map
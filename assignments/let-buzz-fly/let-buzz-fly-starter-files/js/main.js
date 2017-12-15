class Character {
    constructor(name) {
        this._element = document.createElement('img');
        this._name = name;
    }
    update() {
        const container = document.getElementById('container');
        this._element.src = './assets/images/buzz.jpeg';
        this._element.className = 'buzz';
        container.appendChild(this._element);
    }
}
class Game {
    constructor() {
        this._element = document.getElementById('container');
        this._buzz = new Character('Buzz Lightyear');
        window.addEventListener('keydown', this.keyDownHandler);
        this.update();
    }
    update() {
        this._buzz.update();
    }
    keyDownHandler(e) {
        if (e.keyCode === 32) {
            console.log('yup');
        }
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
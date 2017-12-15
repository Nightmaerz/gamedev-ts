class GameItem {
    constructor(name, xPosition = 0, yPosition = 0) {
        this._name = name;
        this._xPos = xPosition;
        this._yPos = yPosition;
    }
    set xPos(xPosition) {
        this._xPos = xPosition;
    }
    set yPos(yPosition) {
        this._yPos = yPosition;
    }
    draw(container) {
        this._element = document.createElement('div');
        this._element.className = this._name;
        this._element.id = this._name;
        this._element.style.transform = `translate(${this._xPos}px, ${this._yPos}px)`;
        const image = document.createElement('img');
        image.src = `./assets/images/${this._name}.png `;
        this._element.appendChild(image);
        container.appendChild(this._element);
    }
    update() {
        this._element.style.transform = `translate(${this._xPos}px, ${this._yPos}px)`;
    }
}
class Character extends GameItem {
    constructor(name, xPosition = 0, yPosition = 0) {
        super(name, xPosition, yPosition);
    }
    move(yPosition) {
        this._yPos -= yPosition;
        this._element.classList.add('flying');
    }
}
class Coin extends GameItem {
    constructor(name, id, xPosition = 0, yPosition = 0) {
        super(name, xPosition, yPosition);
        this._id = id;
    }
    draw(container) {
        this._element = document.createElement('div');
        this._element.className = this._name;
        this._element.id = `${this._name}-${this._id}`;
        this._element.style.transform = `translate(${this._xPos}px, ${this._yPos}px)`;
        const image = document.createElement('img');
        image.src = `./assets/images/${this._name}.png `;
        this._element.appendChild(image);
        container.appendChild(this._element);
    }
    remove(container) {
        const elem = document.getElementById(`${this._name}-${this._id}`);
        container.removeChild(elem);
    }
}
class Game {
    constructor() {
        this._element = document.getElementById('container');
        this.keyDownHandler = (e) => {
            if (e.keyCode === 32) {
                this._buzz.move(50);
                this.update();
            }
        };
        this._buzz = new Character('buzz');
        this._coin = new Coin('coin', 0);
        this._scoreboard = new Scoreboard('scoreboard');
        window.addEventListener('keydown', this.keyDownHandler);
        this.draw();
    }
    collision() {
        const coinRect = document.getElementById('coin-0').getBoundingClientRect();
        const buzzRect = document.getElementById('buzz').getBoundingClientRect();
        if (coinRect.bottom >= buzzRect.top) {
            this._coin.remove(this._element);
            window.removeEventListener('keydown', this.keyDownHandler);
            this._scoreboard.addScore();
        }
        else {
            console.log('no collision');
        }
    }
    draw() {
        this._buzz.draw(this._element);
        this._coin.draw(this._element);
        this._scoreboard.draw(this._element);
    }
    update() {
        this.collision();
        this._buzz.update();
        this._coin.update();
        this._scoreboard.update();
    }
}
let app;
(function () {
    let init = function () {
        app = new Game();
    };
    window.addEventListener('load', init);
})();
class Scoreboard extends GameItem {
    constructor(name) {
        super(name);
        this._score = 0;
    }
    get score() {
        return this._score;
    }
    draw(container) {
        this._element = document.createElement('div');
        this._element.className = this._name;
        this._element.id = this._name;
        const p = document.createElement('p');
        p.innerHTML = 'The score is: ';
        const span = document.createElement('span');
        span.innerHTML = this._score.toString();
        p.appendChild(span);
        this._element.appendChild(p);
        container.appendChild(this._element);
    }
    update() {
        const scoreSpan = this._element.childNodes[0].childNodes[1];
        scoreSpan.innerHTML = this._score.toString();
    }
    addScore() {
        this._score += 1;
    }
}
//# sourceMappingURL=main.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GameItem = (function () {
    function GameItem(name, xPosition, yPosition) {
        if (xPosition === void 0) { xPosition = 0; }
        if (yPosition === void 0) { yPosition = 0; }
        this._name = name;
        this._xPos = xPosition;
        this._yPos = yPosition;
    }
    Object.defineProperty(GameItem.prototype, "xPos", {
        set: function (xPosition) {
            this._xPos = xPosition;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameItem.prototype, "yPos", {
        set: function (yPosition) {
            this._yPos = yPosition;
        },
        enumerable: true,
        configurable: true
    });
    GameItem.prototype.draw = function (container) {
        this._element = document.createElement('div');
        this._element.className = this._name;
        this._element.id = this._name;
        this._element.style.transform = "translate(" + this._xPos + "px, " + this._yPos + "px)";
        var image = document.createElement('img');
        image.src = "./assets/images/" + this._name + ".png ";
        this._element.appendChild(image);
        container.appendChild(this._element);
    };
    GameItem.prototype.update = function () {
        this._element.style.transform = "translate(" + this._xPos + "px, " + this._yPos + "px)";
    };
    return GameItem;
}());
var Character = (function (_super) {
    __extends(Character, _super);
    function Character(name, xPosition, yPosition, id) {
        if (xPosition === void 0) { xPosition = 0; }
        if (yPosition === void 0) { yPosition = 0; }
        if (id === void 0) { id = "asdf"; }
        return _super.call(this, name, xPosition, yPosition) || this;
    }
    Character.prototype.move = function (yPosition) {
        this._yPos -= yPosition;
        this._element.classList.add('flying');
    };
    Character.prototype.movex = function (xPosition) {
        this._xPos += xPosition;
        this._element.classList.add('moving');
    };
    return Character;
}(GameItem));
var Coin = (function (_super) {
    __extends(Coin, _super);
    function Coin(name, id, xPosition, yPosition) {
        if (xPosition === void 0) { xPosition = 0; }
        if (yPosition === void 0) { yPosition = 0; }
        var _this = _super.call(this, name, xPosition, yPosition) || this;
        _this._id = id;
        return _this;
    }
    Coin.prototype.draw = function (container) {
        this._element = document.createElement('div');
        this._element.className = this._name;
        this._element.id = this._name + "-" + this._id;
        this._element.style.transform = "translate(" + this._xPos + "px, " + this._yPos + "px)";
        var image = document.createElement('img');
        image.src = "./assets/images/" + this._name + ".png ";
        this._element.appendChild(image);
        container.appendChild(this._element);
    };
    Coin.prototype.remove = function (container) {
        var elem = document.getElementById(this._name + "-" + this._id);
        container.removeChild(elem);
    };
    return Coin;
}(GameItem));
var Game = (function () {
    function Game() {
        var _this = this;
        this._element = document.getElementById('container');
        this.keyDownHandler = function (e) {
            if (e.keyCode === 32) {
                _this._buzz.move(50);
                _this.theLoop();
                _this.update();
            }
        };
        this._buzz = new Character('buzz');
        this._coin = new Coin('coin', 0);
        this._scoreboard = new Scoreboard('scoreboard');
        window.addEventListener('keydown', this.keyDownHandler);
        this.draw();
    }
    Game.prototype.collision = function () {
        var coinRect = document.getElementById('coin-0').getBoundingClientRect();
        var buzzRect = document.getElementById('buzz').getBoundingClientRect();
        if (coinRect.bottom >= buzzRect.top) {
            this._coin.remove(this._element);
            window.removeEventListener('keydown', this.keyDownHandler);
            this._scoreboard.addScore();
        }
        else {
            console.log('no collision');
        }
    };
    Game.prototype.draw = function () {
        this._buzz.draw(this._element);
        this._coin.draw(this._element);
        this._scoreboard.draw(this._element);
    };
    Game.prototype.update = function () {
        this.collision();
        this._buzz.update();
        this._coin.update();
        this._scoreboard.update();
    };
    Game.prototype.theLoop = function () {
        var _this = this;
        var n = 0;
        var a = -200;
        setInterval(function () {
            if (n == 5) {
                a = 200;
                n -= 1;
            }
            if (n < 5) {
                a = -200;
                n += 1;
            }
            _this._buzz.movex(a);
            console.log(n);
            _this.update();
        }, 2000);
    };
    ;
    return Game;
}());
var app;
(function () {
    var init = function () {
        app = new Game();
    };
    window.addEventListener('load', init);
})();
var Scoreboard = (function (_super) {
    __extends(Scoreboard, _super);
    function Scoreboard(name) {
        var _this = _super.call(this, name) || this;
        _this._score = 0;
        return _this;
    }
    Object.defineProperty(Scoreboard.prototype, "score", {
        get: function () {
            return this._score;
        },
        enumerable: true,
        configurable: true
    });
    Scoreboard.prototype.draw = function (container) {
        this._element = document.createElement('div');
        this._element.className = this._name;
        this._element.id = this._name;
        var p = document.createElement('p');
        p.innerHTML = 'The score is: ';
        var span = document.createElement('span');
        span.innerHTML = this._score.toString();
        p.appendChild(span);
        this._element.appendChild(p);
        container.appendChild(this._element);
    };
    Scoreboard.prototype.update = function () {
        var scoreSpan = this._element.childNodes[0].childNodes[1];
        scoreSpan.innerHTML = this._score.toString();
    };
    Scoreboard.prototype.addScore = function () {
        this._score += 1;
    };
    return Scoreboard;
}(GameItem));
//# sourceMappingURL=main.js.map
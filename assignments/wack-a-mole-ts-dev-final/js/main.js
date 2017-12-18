var app;
(function () {
    var init = function () {
        app = new Game();
    };
    window.addEventListener('load', init);
})();
var Events = (function () {
    function Events() {
    }
    Events.on = function (eventName, fn) {
        Events.topics[eventName] = Events.topics[eventName] || [];
        Events.topics[eventName].push(fn);
    };
    Events.off = function (eventName, fn) {
        if (this.topics[eventName]) {
            for (var i = 0; i < this.topics[eventName].length; i++) {
                if (this.topics[eventName][i] === fn) {
                    this.topics[eventName].splice(i, 1);
                    break;
                }
            }
            ;
        }
    };
    Events.trigger = function (eventName, data) {
        if (Events.topics[eventName]) {
            Events.topics[eventName].forEach(function (fn) {
                fn(data);
            });
        }
    };
    return Events;
}());
Events.topics = {};
var Game = (function () {
    function Game() {
        var _this = this;
        this._holes = [];
        this._mole = new Mole(this._holes);
        this._timeUp = false;
        this._el = document.querySelector('#body');
        this.clickHandler = function (e) {
            if (String(e.srcElement.className) == 'mole up') {
                Events.trigger('addScore', { temp: 'someInformation' });
            }
        };
        this.startHandler = function (e) {
            Events.trigger('startingPosition', { temp: 'someInformation' });
            _this._timeUp = false;
            _this.loop();
            setTimeout(function () { return _this._timeUp = true; }, 10000);
        };
        for (var i = 0; i < 6; i++) {
            this._holes[i] = new Hole(i);
        }
        this.render();
    }
    Game.prototype.randomTime = function (min, max) {
        return Math.round(Math.random() * (max - min) + min);
    };
    Game.prototype.render = function () {
        var playingField = document.createElement('div');
        playingField.addEventListener('click', this.clickHandler);
        playingField.classList.add('game');
        this._el.appendChild(playingField);
        for (var index in this._holes) {
            this._holes[index].render(playingField);
        }
        var gameInformation = document.createElement('div');
        gameInformation.className = 'gameInformation';
        var button = document.createElement('button');
        button.id = 'start';
        button.innerHTML = 'start';
        button.addEventListener('click', this.startHandler);
        gameInformation.appendChild(button);
        this._el.appendChild(gameInformation);
        this._scoreboard = new Scoreboard(gameInformation);
    };
    Game.prototype.loop = function () {
        var _this = this;
        var time = this.randomTime(200, 1000);
        this._mole.render();
        setTimeout(function () {
            if (!_this._timeUp)
                _this.loop();
        }, time);
    };
    return Game;
}());
var Hole = (function () {
    function Hole(id) {
        this._baseClass = 'hole';
        this._id = id;
        this._className = this._baseClass + this._id;
    }
    Object.defineProperty(Hole.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Hole.prototype.render = function (parent) {
        var holeDomElement = document.createElement('div');
        holeDomElement.classList.add(this._baseClass, this._className);
        parent.appendChild(holeDomElement);
    };
    return Hole;
}());
var Mole = (function () {
    function Mole(holes) {
        this._className = 'mole';
        this._allHoles = holes;
    }
    Mole.prototype.randomHole = function () {
        var idx = Math.floor(Math.random() * this._allHoles.length);
        var hole = this._allHoles[idx];
        if (hole === this._lastHole) {
            console.log('Ah nah thats the same one bud');
            return this.randomHole();
        }
        this._lastHole = hole;
        return hole;
    };
    Mole.prototype.render = function () {
        if (this._lastHole !== undefined) {
            var remLastHole = document.querySelector('.hole' + this._lastHole.id);
            remLastHole.innerHTML = '';
        }
        var currentHole = this.randomHole();
        var holeEl = document.querySelector('.hole' + currentHole.id);
        var moleElement = document.createElement('div');
        moleElement.classList.add(this._className, 'up');
        holeEl.appendChild(moleElement);
    };
    return Mole;
}());
var Scoreboard = (function () {
    function Scoreboard(element) {
        var _this = this;
        this._score = 0;
        this._parent = element;
        this.render();
        Events.on('startingPosition', function () { return _this.resetScore(0); });
        Events.on('addScore', function () { return _this.addScore(); });
    }
    Scoreboard.prototype.resetScore = function (score) {
        this._score = score;
        this._el.innerHTML = String(this._score);
    };
    Scoreboard.prototype.addScore = function () {
        this._score++;
        this._el.innerHTML = String(this._score);
    };
    Scoreboard.prototype.render = function () {
        this._el = document.createElement('div');
        this._el.className = 'score';
        this._el.innerHTML = String(this._score);
        this._parent.appendChild(this._el);
    };
    return Scoreboard;
}());
//# sourceMappingURL=main.js.map
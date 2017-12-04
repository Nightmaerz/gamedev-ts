var app;
(function () {
    var init = function () {
        app = new Game();
    };
    window.addEventListener('load', init);
})();
var Game = (function () {
    function Game() {
        this._playingGrid = new PlayingGrid(16);
        this.render();
    }
    Game.prototype.randomTile = function (min, max) {
        return Math.round(Math.random() * (max - min) + min);
    };
    Game.prototype.render = function () {
        this._playingGrid.render(document.getElementById('grid'));
    };
    return Game;
}());
var GameItem = (function () {
    function GameItem(name, id) {
        this._name = name;
        this._id = id;
    }
    Object.defineProperty(GameItem.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameItem.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    return GameItem;
}());
var PlayingGrid = (function () {
    function PlayingGrid(numberOfGridItems) {
        this._grid = [];
        for (var index = 1; index <= numberOfGridItems; index++) {
            this._grid[index] = new GameItem('grass', index);
        }
    }
    PlayingGrid.prototype.render = function (gridPosition) {
        var playingField = "\n            <div class=\"gridElements\">\n            " + this._grid.map(function (tile) { return "<div class=\"tile\" id=" + tile.id + ">\n                        <img src=\"./assets/svg/" + tile.name + ".svg\" />\n                        </div>"; }).join("") + "\n            </div>";
        gridPosition.innerHTML = playingField;
    };
    return PlayingGrid;
}());
//# sourceMappingURL=main.js.map
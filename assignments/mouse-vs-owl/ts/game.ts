/** Class representing a game */
class Game {

    private _playingGrid: PlayingGrid;

    /**
     * Create a Game.
     * @param {array} _holes - The score value.
    */
    constructor() {
        this._playingGrid = new PlayingGrid(16);
        this.render();
    }

    /**
     * Renders the game representation in the DOM
     */
    private render() {
        this._playingGrid.render(document.getElementById('grid'));
    }
}
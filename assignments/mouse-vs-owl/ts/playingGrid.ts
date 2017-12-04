/** Class representing a Playing Grid */
class PlayingGrid {

    private _grid: GameItem[] = [];

    /**
    * Create a Game Item.
    * @param {number} numberOfGridItems - The number of Grid Items value.
    */
    constructor(numberOfGridItems: number) {
        //fill the array with default grassitems
        for (let index = 1; index <= numberOfGridItems; index++) {
            this._grid[index] = new GameItem('grass', index);
        }
    }

    /**
     * Function to create an Grid of Grid Items
     * @param {HTMLElement} gridPosition 
     */
    public render(gridPosition: HTMLElement) {
        //const gridPositionElement = gridPosition;
        const playingField = `
            <div class="gridElements">
            ${this._grid.map(
                tile => `<div class="tile" id=${tile.id}>
                        <img src="./assets/svg/${tile.name}.svg" />
                        </div>`
            ).join("")}
            </div>`;
        gridPosition.innerHTML = playingField;
    }
}
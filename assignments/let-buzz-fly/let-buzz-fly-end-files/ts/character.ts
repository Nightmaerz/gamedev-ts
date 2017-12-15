/// <reference path="gameItem.ts" />

class Character extends GameItem {

    /**
    * Function to create the Character
    * @param {string} - name
    * @param {number} - xPosition
    * @param {number} - yPosition
    */
    constructor(name: string, xPosition: number = 0, yPosition: number = 0) {
        super(name, xPosition, yPosition);
    }

    /**
    * Function to move the Character upwards
    * @param {number} - yPosition
    */
    public move(yPosition: number): void {
        this._yPos -= yPosition;
        this._element.classList.add('flying');
    }
}
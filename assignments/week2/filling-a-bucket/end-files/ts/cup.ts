//Enum of CupSize
enum CupSize {
    small, //0
    medium, //1
    large //2
};

//class representation of Cup
class Cup {
    private _quantity: number; //ml
    private _cupDomRepresentation: HTMLDivElement; //not implemented yet
    private _id: number;
    private _size: CupSize;

    /**
     * Create a cup
     * @param {number} id - The id value.
     * @param {Cupsize} Cupsize - The Cupzis value.
     */
    constructor(id: number, cupSize: CupSize = CupSize.small) {
        this._id = id;
        this._size = cupSize;
        this._quantity = this.setQuantityBasedOnCupSize();
    }

    /**
     * Get the id value.
     * @return {number} The id value.
     */
    public get id(): number {
        return this._id;
    }

    /**
     * Get the amount value.
     * @return {number} The amount value.
     */
    public get amount(): number {
        return this._quantity;
    }

    /**
     * Function to get the amount based on the enum
     * @return {number} The quantity value.
     */
    public setQuantityBasedOnCupSize(): number {
        let defaultQuantity = 200;
        if (this._size === CupSize.medium) {
            defaultQuantity = 400;
        } else if (this._size === CupSize.large) {
            defaultQuantity = 500;
        }
        return defaultQuantity;
    }

    /**
     * Get the amount value.
     * @return {HTMLDivElement} the cup dom representation
     */
    public get cupDomRepresentation(): HTMLDivElement {
        let div = document.createElement('div');
        div.classList.add('cup', '' + CupSize[this._size]);
        div.id = this._id.toString();
        return div;
    }
}
//class representation of bucket
class Bucket {

    private _maxAmount: number; //ml
    private _containingAmount: number = 500; //contents
    private _bucketDomRepresentation: HTMLDivElement;
    private _waterDomRepresentation: HTMLDivElement; //contents representation

    /**
     * Create a bucket
     * @param {number} maxAmount - The maxAmount value.
     */
    constructor(maxAmount: number) {
        this._maxAmount = maxAmount;
    }
    
    /**
     * Set the containing amount value.
     * @param {number} - The amount value.
     */
    public set containingAmount(amount: number) {
        this._containingAmount += amount;
    }

    /**
     * Get the containingAmount value.
     * @return {number} - The containingamount value.
     */
    public get containingAmount(): number {
        return this._containingAmount;
    }

    /**
     * Get the maxAmount value.
     * @return {number} - The maxamount value.
     */
    public get maxAmount(): number {
        return this._maxAmount;
    }

    /**
     * Get the dom representation of the water.
     * @return {HTMLDivElement} - The water dom value.
     */
    private getWaterDomRepresentation(): HTMLDivElement {
        let div = document.createElement('div');
        div.className = 'water';
        div.style.height = (this._containingAmount / 25) + 'px';
        return div;
    }
    
    /**
     * Get the dom representation of the bucket.
     * @return {HTMLDivElement} - the bucket dom value.
     */
    public get bucketDomRepresentation(): HTMLDivElement {
        let bucketDiv = document.createElement('div');
        bucketDiv.className = 'bucket';
        bucketDiv.id = 'bucket';
        let waterDiv = this.getWaterDomRepresentation();
        bucketDiv.appendChild(waterDiv)
        return bucketDiv;
    }

}
class Hole{
     /**
     * Create a Hole
     * @param {string} _baseCLass - The baseCLass of an Hole in the DOM
     * @param {array} _className - the className of an Hole in the DOM
     * @param {number} _id - The id of an Hole
     */

    private _baseClass = 'hole';
    private _className : string;
    private _id: number;
    
    constructor(id : number){
        this._id = id;
        this._className = this._baseClass + this._id;
    }
    /**
     * Get the id value
     * @return {number} The id value
     */
    get id() : number{
        return this._id;
    }

    /**
     * Renders the DOM representation of scoreboard (better to use a template)
     */
    public render(parent : HTMLDivElement){
        let holeDomElement = document.createElement('div');
        holeDomElement.classList.add(this._baseClass, this._className);
        parent.appendChild(holeDomElement);
    }
    
}
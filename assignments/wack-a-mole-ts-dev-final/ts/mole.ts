class Mole{
    /**
     * Create a Mole
     * @param {string} _className - The classname of a mole in the DOM
     * @param {array} _allHole - All the holes a mole can life in.
     * @param {Hole} _lastHole - the last hole the mole lives in.
     */

    private _className : string = 'mole';
    private _allHoles : Array<Hole>;
    private _lastHole : Hole;

    constructor(holes : Array<Hole>){
        this._allHoles = holes;
    }

    /**
     * Finds randomized hole to life in
     * @return {Hole} The actual Hole to life in
     */
    private randomHole() : Hole {
        const idx = Math.floor(Math.random() * this._allHoles.length);
        const hole = this._allHoles[idx];
        if (hole === this._lastHole) {
            console.log('Ah nah thats the same one bud');
            return this.randomHole();
        }
        this._lastHole = hole;
        return hole;
    }

    /**
     * Renders the DOM representation of mole (better to use a template)
     */
    public render() {
        //if there is a lasthole present, clean up that hole
        if(this._lastHole !== undefined){
            const remLastHole = document.querySelector('.hole'+this._lastHole.id);
            remLastHole.innerHTML = '';
        }
        //create the DOM representation of the mole
        let currentHole = this.randomHole();
        const holeEl = document.querySelector('.hole'+currentHole.id);
        const moleElement = document.createElement('div');
        moleElement.classList.add(this._className, 'up'); //up is very important, check the css.
        holeEl.appendChild(moleElement);
    }
}

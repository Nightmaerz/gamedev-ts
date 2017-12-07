/** Class representation of a Game */
class Game {

    private _bucket: Bucket = new Bucket(5000);
    private _cups: Array<Cup> = new Array();

    /** 
     * Create a Game
     */
    constructor() {
        this._cups[0] = new Cup(1);
        this._cups[1] = new Cup(2);
        this._cups[2] = new Cup(3, CupSize.large);
        this._cups[3] = new Cup(4);
        this._cups[4] = new Cup(5);
        this._cups[5] = new Cup(6);
        this._cups[6] = new Cup(7);
        const cupContainer = document.getElementById('watercups');
        cupContainer.addEventListener('click', this.clickCupHandler);
    }

    /**
     * start function, only executed once
     */
    public start() {
        this.render();
    }

    /**
     * clickCupHandler
     * @param {event} e - the value of the event
     */
    public clickCupHandler = (e: Event) => {
        //get the id of the cup
        let element = (<Element>e.target).id;
        //cast the id to a number
        let elementIndex = Number(element);
        //fill the bucket
        this.fillBucket(elementIndex);
    }

    /**
     * Function to get the cup from the cups array
     * @param {number} -  elementIndex - the clickedCupId
     * @return {Cup} - A Cup
     */
    public getCupFromArray(elementIndex: number): Cup {
        //find the cup based on its id
        let index = this._cups.findIndex((cup) => cup.id == elementIndex);
        return this._cups[index];
    }

    /**
    * Function to remove the cup from the cups array
    * @param {number} -  elementIndex - the clickedCupId
    */
    public removeCupFromArray(elementIndex: number) {
        let index = this._cups.findIndex((cup) => cup.id == elementIndex);
        this._cups.splice(index, 1);
    }

    /**
    * Function to fill te bucket with water of the cups
    * @param {number} -  indexOfCup - the clickedCupId
    */
    public fillBucket(indexOfCup: number) {
        //get amount of the cup
        const tempCup = this.getCupFromArray(indexOfCup).amount;

        //not optimal check to see if wateramount does not exceed cupamount
        if (this._bucket.containingAmount <= this._bucket.maxAmount) {

            this._bucket.containingAmount = tempCup;

            //remove the cup
            this.removeCupFromArray(indexOfCup);

            //render the playing field
            this.render();
        } else {
            console.log('bucket is full!');
        }
    }
    
    //function to render de bucket and cups
    public render() {

        let bucketPh = document.getElementById('watercontainer');
        bucketPh.innerHTML = '';
        bucketPh.appendChild(this._bucket.bucketDomRepresentation);

        let ph = document.getElementById('watercups');
        ph.innerHTML = '';
        this._cups.map((cup) => {
            ph.appendChild(cup.cupDomRepresentation);
        })
    }

}
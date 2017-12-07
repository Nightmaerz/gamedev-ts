class Bucket {
    constructor(maxAmount) {
        this._containingAmount = 500;
        this._maxAmount = maxAmount;
    }
    set containingAmount(amount) {
        this._containingAmount += amount;
    }
    get containingAmount() {
        return this._containingAmount;
    }
    get maxAmount() {
        return this._maxAmount;
    }
    getWaterDomRepresentation() {
        let div = document.createElement('div');
        div.className = 'water';
        div.style.height = (this._containingAmount / 25) + 'px';
        return div;
    }
    get bucketDomRepresentation() {
        let bucketDiv = document.createElement('div');
        bucketDiv.className = 'bucket';
        bucketDiv.id = 'bucket';
        let waterDiv = this.getWaterDomRepresentation();
        bucketDiv.appendChild(waterDiv);
        return bucketDiv;
    }
}
var CupSize;
(function (CupSize) {
    CupSize[CupSize["small"] = 0] = "small";
    CupSize[CupSize["medium"] = 1] = "medium";
    CupSize[CupSize["large"] = 2] = "large";
})(CupSize || (CupSize = {}));
;
class Cup {
    constructor(id, cupSize = CupSize.small) {
        this._id = id;
        this._size = cupSize;
        this._quantity = this.setQuantityBasedOnCupSize();
    }
    get id() {
        return this._id;
    }
    get amount() {
        return this._quantity;
    }
    setQuantityBasedOnCupSize() {
        let defaultQuantity = 200;
        if (this._size === CupSize.medium) {
            defaultQuantity = 400;
        }
        else if (this._size === CupSize.large) {
            defaultQuantity = 500;
        }
        return defaultQuantity;
    }
    get cupDomRepresentation() {
        let div = document.createElement('div');
        div.classList.add('cup', '' + CupSize[this._size]);
        div.id = this._id.toString();
        return div;
    }
}
class Game {
    constructor() {
        this._bucket = new Bucket(5000);
        this._cups = new Array();
        this.clickCupHandler = (e) => {
            let element = e.target.id;
            let elementIndex = Number(element);
            this.fillBucket(elementIndex);
        };
        this._cups[0] = new Cup(1);
        this._cups[1] = new Cup(2);
        this._cups[2] = new Cup(3, CupSize.large);
        this._cups[3] = new Cup(4);
        this._cups[4] = new Cup(5);
        this._cups[5] = new Cup(6);
        this._cups[6] = new Cup(7);
        console.log(this._cups);
        const cupContainer = document.getElementById('watercups');
        cupContainer.addEventListener('click', this.clickCupHandler);
    }
    start() {
        this.render();
    }
    getCupFromArray(elementIndex) {
        let index = this._cups.findIndex((cup) => cup.id == elementIndex);
        console.log('ClickedId', elementIndex);
        console.log('Id of Found Cup', this._cups[index].id);
        return this._cups[index];
    }
    removeCupFromArray(elementIndex) {
        let index = this._cups.findIndex((cup) => cup.id == elementIndex);
        this._cups.splice(index, 1);
    }
    fillBucket(indexOfCup) {
        const tempCup = this.getCupFromArray(indexOfCup).amount;
        if (this._bucket.containingAmount <= this._bucket.maxAmount) {
            this._bucket.containingAmount = tempCup;
            this.removeCupFromArray(indexOfCup);
            this.render();
        }
        else {
            console.log('bucket is full!');
        }
    }
    render() {
        let bucketPh = document.getElementById('watercontainer');
        bucketPh.innerHTML = '';
        bucketPh.appendChild(this._bucket.bucketDomRepresentation);
        let ph = document.getElementById('watercups');
        ph.innerHTML = '';
        this._cups.map((cup) => {
            ph.appendChild(cup.cupDomRepresentation);
        });
    }
}
const app = {};
(function () {
    let init = function () {
        app.game = new Game();
        app.game.start();
    };
    window.addEventListener('load', init);
})();
//# sourceMappingURL=main.js.map
class Character {
    //attr
    private _element:HTMLImageElement = document.createElement('img');
    private _name:string;
    
    constructor(name:string) { 
        this._name = name;
    }

    //writing elements to the DOM/HTML
    public update() { 
        const container = document.getElementById('container');
        this._element.src = './assets/images/buzz.jpeg';
        this._element.className = 'buzz'; 
        container.appendChild(this._element);
    }
}
class Character {
    //attr
    private _element:HTMLElement = document.createElement('img');
    private _name:string;
    
    constructor(name:string) { 
        this._name = name;
    }

    //writing elements to the DOM/HTML
    public update() { }
}
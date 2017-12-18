class Game {
    /**
     * Create a Game.
     * @param {array} _holes - The score value.
     * @param {Mole} _mole - The dom element representation.
     * @param {boolean} _timeUp - if game is over.
     * @param {Element} _el - the location of the parent element in the DOM
     * @param {Scoreboard} _scoreboard - the scoreboard
     */

    private _holes : Array<Hole> = [];
    private _mole : Mole = new Mole(this._holes); 
    private _timeUp : boolean = false;
    private _el : Element = document.querySelector('#body');
    private _scoreboard : Scoreboard;

    constructor(){
        //used to create playingfield
        for (let i = 0; i < 6; i++) {
            this._holes[i] = new Hole(i);
        }
        this.render();
    }

    /**
     * Renders a random time with a min and a max
     * @param {number} min - minimal time
     * @param {number} max - maximal time
     */
    private randomTime(min : number, max : number) : number {
        return Math.round(Math.random() * (max - min) + min);
    }

    /**
     * Renders the game representation in the DOM
     */
    private render(){
        
        //create playinfield
        const playingField = document.createElement('div');
        playingField.addEventListener('click', this.clickHandler);
        playingField.classList.add('game');
        this._el.appendChild(playingField);
        
        //create mole holes
        for(let index in this._holes){
            //playingField.appendChild(this.holes[index].domify());
            this._holes[index].render(playingField);
        }

        //create a container for 
        const gameInformation = document.createElement('div');
        gameInformation.className = 'gameInformation';
        
        //create a button
        const button = document.createElement('button');
        button.id = 'start';
        button.innerHTML = 'start';
        //button.addEventListener('click', (e: Event) => { this.startHandler(e)}); //gameController, eventhandler
        button.addEventListener('click', this.startHandler);

        gameInformation.appendChild(button);
        this._el.appendChild(gameInformation);

        //create scoreboard
        this._scoreboard = new Scoreboard(gameInformation); //could also be an event.
        
    }

    /**
     * The game loop
     * TODO: use requestanimationloop instead
     */
    private loop(){ //some sort of looping to keep on playing
        const time = this.randomTime(200, 1000);
        this._mole.render();
        setTimeout(() => { //you need to use arrow notation to keep the this keyword into scope
            if(!this._timeUp) this.loop();
        }, time);
    }

    /**
     * The clickHandler of a mouse is clicked
     * @param {Event} e - the actual fired event
     */
    private clickHandler = (e : Event) => {
        if(String(e.srcElement.className) == 'mole up'){
            Events.trigger('addScore', {temp:'someInformation'});
            //this._scoreboard.addScore(); //without pub sub system
        }       
    }

    /**
     * The startHandler when the startbutton is clicked
     * @param {Event} e - the actual fired event
     */
    private startHandler = (e : Event)=>{
        Events.trigger('startingPosition', {temp:'someInformation'});
        //this._scoreboard.resetScore(0); //without pub sub system
        this._timeUp = false; //maybe own class.
        this.loop(); //call the gameloop
        setTimeout(() => this._timeUp = true, 10000) //cancel the gameloop after 10 seconds
    }

}
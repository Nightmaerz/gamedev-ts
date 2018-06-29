class Game {
  //attr
  private _element: HTMLElement = document.getElementById('container');
  private _buzz: Character;
  private _coin: Coin; //use an array if you have multiple gameItems of the same sort
  private _scoreboard: Scoreboard;

  /**
   * Create the Game class
   */
  constructor() {
    //create some gameItems
    this._buzz = new Character('buzz');
    this._coin = new Coin('coin', 0);
      this._scoreboard = new Scoreboard('scoreboard');
      

    //add keydown handler to the window object
    window.addEventListener('keydown', this.keyDownHandler);

    //draw is initial state
      this.draw();
  }

  /**
   * Function to detect collision between two objects
   */
  public collision(): void {
    //use elem.getBoundingClientRect() for getting the wright coordinates and measurements of the element
    const coinRect = document.getElementById('coin-0').getBoundingClientRect();
    const buzzRect = document.getElementById('buzz').getBoundingClientRect();

    if (coinRect.bottom >= buzzRect.top) {
      this._coin.remove(this._element);
      window.removeEventListener('keydown', this.keyDownHandler);
      this._scoreboard.addScore();
    } else {
      console.log('no collision');
    }
  }

  /**
   * Function to draw the initial state of al living objects
   */
  public draw(): void {
    this._buzz.draw(this._element);
    this._coin.draw(this._element);
      this._scoreboard.draw(this._element);
  }

  /**
   * Function to update the state of all living objects
   */
  public update(): void { //function formerly known as render()
    this.collision();
    this._buzz.update();
    this._coin.update();
    this._scoreboard.update();
  }

  /**
   * Function to handle the keyboard event
   * @param {KeyboardEvent} - event
   */
  public keyDownHandler = (e: KeyboardEvent): void => {
    if (e.keyCode === 32) {
      
      //move buzz 50px
        this._buzz.move(50);
        this.theLoop();
        this.update();

    }
    }
    
    public theLoop() {
        var n = 0;
        var a = -200;
        setInterval(() => {
            if (n == 5) {
                a = 200
                n -= 1
            }
            if (n < 5) {
                a = -200
                n += 1
            }
            this._buzz.movex(a); 
            console.log(n);               
            this.update();

            
        }, 2000);
    };
    
}
    


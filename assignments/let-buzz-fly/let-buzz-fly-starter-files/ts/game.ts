class Game {
  //attr
  private _element: HTMLElement = document.getElementById('container');
  private _buzz: Character;

  constructor() {
    this._buzz = new Character('Buzz Lightyear');
    window.addEventListener('keydown', this.keyDownHandler);
    
    //update add the end
    this.update();
  }

  //writing elements to the DOM/HTML
  public update() { //function formerly known as render()
    this._buzz.update();
  }

  //event handling
  public keyDownHandler(e:KeyboardEvent) {
    if(e.keyCode === 32){
      console.log('yup');
      //ga 100 px omhoog
    }
  }

}
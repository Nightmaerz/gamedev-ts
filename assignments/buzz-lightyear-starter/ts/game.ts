class Game {
  //attr
  private _element: HTMLElement = document.getElementById('container');
  private _buzz: Character;

  constructor() {
    this._buzz = new Character('Buzz Lightyear');
  }

  //writing elements to the DOM/HTML
  public update() {
    this._buzz.update();
  }

  //event handling
  public keyDownHandler() { }

}
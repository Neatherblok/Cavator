class HighscoreScreen {
    
    protected readonly canvasElement: HTMLCanvasElement;
    protected readonly _canvas: CanvasHelper;

    public constructor(){
        this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
    }

    //draws highscorescreen
    public draw = (score:number) => {
        this.canvasElement.style.backgroundImage = "url(./assets/images/backgrounds/tableBackground.jpg)";
        this.canvasElement.style.backgroundSize = "100% 100%"
        this.canvasElement.style.cursor = "url(./assets/images/FeatherCursor.png), auto";
        this._canvas.writeTextToCanvas(`Je hebt een score van ${score} behaald!`, 45, this._canvas.getCenter().X, 100, "yellow");
        this._canvas.writeButtonToCanvas("Probeer opnieuw", undefined, this._canvas.getCenter().Y + 200);
    }

}
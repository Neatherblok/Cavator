class HighscoreScreen {
    
    protected readonly canvasElement: HTMLCanvasElement;
    protected readonly _canvas: CanvasHelper;

    public constructor(){
        this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
    }

    public draw = (score:number) => {
        this._canvas.writeTextToCanvas(`Je hebt een score van behaald!`, 45, this._canvas.getCenter().X, 100, "yellow");
        this._canvas.writeButtonToCanvas("Probeer opnieuw", undefined, this._canvas.getCenter().Y + 200);
        this._canvas.writeTextToCanvas(`Je hebt iets gevonden!`, 45, this._canvas.getCenter().X, 100, "yellow")
        this._canvas._context.font = `45px Minecraft`;
        this._canvas._context.fillStyle = "yellow";
        this._canvas._context.textAlign = "center";
        this._canvas._context.fillText('jup', 100,100);
    }

}
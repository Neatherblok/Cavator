class HighscoreScreen {
    
    protected readonly canvasElement: HTMLCanvasElement;
    protected readonly _canvas: CanvasHelper;

    public constructor(){
        this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
    }

    public draw = () => {
        this._canvas.writeTextToCanvas(`Je hebt een score van ${} behaald!`, 45, this._canvas.getCenter().X, 100, "yellow")
    }

}
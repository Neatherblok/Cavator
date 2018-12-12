class StartScreen{

    protected readonly canvasElement: HTMLCanvasElement;
    protected readonly _canvas: CanvasHelper;
    
    public constructor(){
        this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
    }

    public draw = () => {
        this._canvas.writeTextToCanvas("Cavator", 100, this._canvas.getCenter().X, this._canvas.getCenter().Y - 200, "black");
    }

}
class StartScreen{

    protected readonly canvasElement: HTMLCanvasElement;
    protected readonly _canvas: CanvasHelper;
    
    public constructor(){
        this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
    }

    public draw = () => {
        this._canvas.writeImageToCanvas("./assets/images/Cavator_logo/CavatorLogo.png", this._canvas.getCenter().X-200, this._canvas.getCenter().Y-300)
        this._canvas.writeButtonToCanvas("Play", undefined, this._canvas.getCenter().Y + 200);

    }

}
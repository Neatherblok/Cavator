class GameScreen{
    private holes: Holes;
    protected readonly canvasElement: HTMLCanvasElement;
    protected readonly _canvas: CanvasHelper;
    
    public constructor(){
        this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
        this.holes = new Holes(this.canvasElement, "./assets/images/hole1.png", 100, 100, 32, 32);
    }

    public draw = () => {
        this.holes.draw();
    }
}
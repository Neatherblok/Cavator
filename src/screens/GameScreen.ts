class GameScreen{
    protected readonly canvasElement: HTMLCanvasElement;
    protected readonly _canvas: CanvasHelper;
    private holes = new Array<Holes>();
    
    public constructor(){
        this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
        for (let index = 0; index < MathHelper.randomNumber(1, 8); index++) {
            this.holes.push(new Holes(this.canvasElement, "./assets/images/hole1.png", MathHelper.randomNumber(0, this._canvas.getWidth()-200), MathHelper.randomNumber(0, this._canvas.getHeight()-200), 128, 110))
        }
    }

    public draw = () => {
        for(let i = 0; i < this.holes.length; i++) {
            this.holes[i].draw();
        }
    }
}
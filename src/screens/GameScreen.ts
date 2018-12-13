class GameScreen {
    protected readonly canvasElement: HTMLCanvasElement;
    protected readonly _canvas: CanvasHelper;
    private holes = new Array<Holes>();
    protected counter: number = 180;
    protected score: number = 0;

    public constructor() {
        this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
        for (let index = 0; index < MathHelper.randomNumber(1, 6); index++) {
            this.holes.push(new Holes(this.canvasElement, "./assets/images/hole1.png", MathHelper.randomNumber(0, this._canvas.getWidth() - 200), MathHelper.randomNumber(0, this._canvas.getHeight() - 200), 130, 120))
        }
        //if (Game.gameScreenValue() == 1) {
            let intervalId = setInterval(() => {
                this.counter--;
                console.log(this.counter);
                if (this.counter === 0) {
                    clearInterval(intervalId);
                    alert("TIME UP!")
                }
            }, 1000);
        //}
    }

    public draw = () => {
        for (let i = 0; i < this.holes.length; i++) {
            this.holes[i].draw();
        }
        this._canvas.writeTextToCanvas(`time left: ${this.counter}`, 20, 100, 100)
    }
}
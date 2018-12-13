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
    }

    public draw = () => {
        for (let i = 0; i < this.holes.length; i++) {
            this.holes[i].draw();
        }
        this._canvas.writeTextToCanvas(`Time left: ${this.counter}`, 20, 100, 50)
        this._canvas.writeTextToCanvas(`Score: ${this.score}`, 20, 100, 75 )
    }

    public timer() {
        let intervalId = setInterval(() => {
            this.counter--;
            console.log(this.counter);
            if (this.counter === 0) clearInterval(intervalId)
        }, 1000)
    }

    // public scoreCounter() {
    //     if (answer() === true) {
    //         this.score++;
    //     }
    // }
}
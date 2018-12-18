class GameScreen {
    protected readonly canvasElement: HTMLCanvasElement;
    protected readonly _canvas: CanvasHelper;
    private _gameHelper: GameHelper;
    private hole = new Array<Hole>();
    private imageUrl: string;

    public constructor(imageUrl: string) {
        this.imageUrl = imageUrl
        this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._gameHelper = new GameHelper();
        this._canvas = new CanvasHelper(this.canvasElement);
        for (let index = 0; index < MathHelper.randomNumber(3, 6); index++) {
            this.hole.push(new Hole(this.canvasElement, this.imageUrl, MathHelper.randomNumber(0, this._canvas.getWidth() - 200), MathHelper.randomNumber(0, this._canvas.getHeight() - 200), 130, 120, MathHelper.randomNumber(0,2)))
        }
    }

    public draw = () => {
        for (let i = 0; i < this.hole.length; i++) {
            this.hole[i].draw();
        }
        this._canvas.writeTextToCanvas(`Time left: ${this._gameHelper.counter}`, 20, 100, 50)
        this._canvas.writeTextToCanvas(`Score: ${this._gameHelper.getScore()}`, 20, 100, 75)
    }

    public getHoles() {
        return this.hole;
    }

    public regenerateHole(numberOfHole: number) {
        this.hole.splice(numberOfHole, 1);
        this.hole.push(new Hole(this.canvasElement, this.imageUrl, MathHelper.randomNumber(0, this._canvas.getWidth() - 200), MathHelper.randomNumber(0, this._canvas.getHeight() - 200), 130, 120, MathHelper.randomNumber(0,2)))
    }
}
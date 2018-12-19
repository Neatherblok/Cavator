class GameScreen {
    protected readonly canvasElement: HTMLCanvasElement;
    protected readonly _canvas: CanvasHelper;
    private hole = new Array<Hole>();
    protected counter: number = 150;
    private score: number = 0;
    private imageUrl: string;

    public constructor(imageUrl: string) {
        this.imageUrl = imageUrl
        this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
        for (let index = 0; index < MathHelper.randomNumber(3, 6); index++) {
            this.hole.push(new Hole(this.canvasElement, this.imageUrl, MathHelper.randomNumber(0, this._canvas.getWidth() - 200), MathHelper.randomNumber(0, this._canvas.getHeight() - 200), 130, 120, MathHelper.randomNumber(0,2)))
        }
    }

    public draw = () => {
        for (let i = 0; i < this.hole.length; i++) {
            this.hole[i].draw();
        }
        this._canvas.writeTextToCanvas(`Tijd over: ${this.counter} seconden`, 20, 75, 50, "white", "left")
        console.log(this.counter);
        this._canvas.writeTextToCanvas(`Score: ${this.score}`, 20, 75, 75, "white", "left")
    }

    public timer() {
        let intervalId = setInterval(() => {
            this.counter--;
            if (this.counter === 0) {
                clearInterval(intervalId)
            }
        }, 1000)
    }

    public getHoles() {
        return this.hole;
    }

    public getCounter(){
        return this.counter;
    }

    public addScoreCounter() {
        this.score++;
    }

    public getScore(){
        return this.score;
    }

    public resetCounter(){
        this.counter = 150;
    }

    public resetScore(){
        this.score = 0;
    }

    public regenerateHole(numberOfHole: number) {
        this.hole.splice(numberOfHole, 1);
        this.hole.push(new Hole(this.canvasElement, this.imageUrl, MathHelper.randomNumber(0, this._canvas.getWidth() - 200), MathHelper.randomNumber(0, this._canvas.getHeight() - 200), 130, 120, MathHelper.randomNumber(0,2)))
    }
}
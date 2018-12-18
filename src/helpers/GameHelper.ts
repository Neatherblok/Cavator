class GameHelper {

    protected readonly canvasElement: HTMLCanvasElement;
    protected readonly _canvas: CanvasHelper;
    public counter: number = 180;
    private score: number = 0;

    public constructor(){
        this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
    }

    public timer() {
        let intervalId = setInterval(() => {
            --this.counter;
            if (this.counter === 0) {
                clearInterval(intervalId)
            }
        }, 1000)
    }

    public addScore(){
        this.score++;
    }

    public getScore(){
        return this.score;
    }

}
class GameHelper {

    protected readonly canvasElement: HTMLCanvasElement;
    protected readonly _canvas: CanvasHelper;
    private _game: Game;
    public counter: number = 180;
    public score: number = 0;

    public constructor(){
        this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
        this._game = new Game();
    }

    public timer() {
        let intervalId = setInterval(() => {
            this.counter--;
            if (this.counter === 0) {
                clearInterval(intervalId)
            }
        }, 1000)
    }

    public interval(){
        if(this.counter > 0){
        let intervalId = setInterval(() => {
            this._game.draw();
            if (this._game.currentGameScreen() === 2) clearInterval(intervalId)
        }, 1000 / 60)
    }};

}
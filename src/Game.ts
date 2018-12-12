class Game {
    protected readonly canvasElement: HTMLCanvasElement;
    protected readonly _canvas: CanvasHelper;
    private readonly startScreen: StartScreen;

    public constructor() {
        this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
        this.startScreen = new StartScreen;
    }

    public draw = () => {
        this._canvas.clear();
        this.startScreen.test();
    }
}

window.addEventListener('load', init);

function init(): void {
    const cavator = new Game();
    window.setInterval(cavator.draw, 1000 / 60)
}
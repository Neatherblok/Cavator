class Game {
    protected readonly canvasElement: HTMLCanvasElement;
    protected readonly _canvas: CanvasHelper;
    private screen:any[] = new Array(StartScreen, GameScreen, EraSelectionScreen);
    protected currentGameScreen: number = 0;

    public constructor() {
        this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
    }

    public draw = () => {
        this._canvas.clear();
        this.screen[this.currentGameScreen];
        console.log(StartScreen.draw());
    }
}

window.addEventListener('load', init);

function init(): void {
    const cavator = new Game();
    window.setInterval(cavator.draw, 1000 / 60)
}
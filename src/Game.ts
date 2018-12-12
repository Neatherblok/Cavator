class Game {
    private readonly canvasElement: HTMLCanvasElement;
    private readonly _canvas: CanvasHelper;
    private screen:string[] = new Array("Startscreen", "Gamescreen", "EraSelectionscreen");
    protected currentGameScreen: number = 1

    public constructor() {
        this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
    }

    public draw = () => {
        this._canvas.clear();
        this.screen[this.currentGameScreen];
        console.log(this.screen[this.currentGameScreen]);
    }
}

window.addEventListener('load', init);

function init(): void {
    const cavator = new Game();
    window.setInterval(cavator.draw, 1000 / 60)
}
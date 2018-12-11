class Game {
    private readonly canvasElement: HTMLCanvasElement;
    private readonly _canvas: Canvas;

    public constructor() {
        this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new Canvas(this.canvasElement);
    }

    public draw = () => {
        this._canvas.clear();
    }
}

window.addEventListener('load', init);

function init(): void {
    const cavator = new Game();
    window.setInterval(cavator.draw, 500 / 30)
}
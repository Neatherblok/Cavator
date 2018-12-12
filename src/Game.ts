///<reference path="./data/Items.ts" />

class Game {
    private readonly canvasElement: HTMLCanvasElement;
    private readonly _canvas: CanvasHelper;
    private item: Item

    public constructor() {
        this.item = new Item;

        this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
    }

    public draw = () => {
        this._canvas.clear();
        this._canvas.writeTextToCanvas(`Your score`, 50, 200, 200, "black", "center");
        console.log("hoi")
    }
}

window.addEventListener('load', init);

function init(): void {
    const cavator = new Game();
    window.setInterval(cavator.draw, 1000 / 60)
}
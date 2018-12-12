class Game {
    protected readonly canvasElement: HTMLCanvasElement;
    protected readonly _canvas: CanvasHelper;
    private Startscreen: StartScreen;
    private Gamescreen: GameScreen;
    private EraSelectionscreen: EraSelectionScreen;
    //private item: Item;
    private screen:string[] = new Array("this.Startscreen.draw()", "this.Gamescreen.draw()", "this.EraSelectionscreen.draw()");
    protected currentGameScreenNumber: number = 0;

    public constructor() {
        this.Startscreen = new StartScreen();
        this.Gamescreen = new GameScreen();
        this.EraSelectionscreen = new EraSelectionScreen();
        this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
        //this.item = new Item;
    }

    public draw = () => {
        this._canvas.clear();
        let currentGameScreen = eval(this.screen[this.currentGameScreenNumber])
        //this.item.getItem(2, "era");
        currentGameScreen;
    }
}

window.addEventListener('load', init);

function init(): void {
    const cavator = new Game();
    window.setInterval(cavator.draw, 1000 / 60)
}
class Game {
    protected readonly canvasElement: HTMLCanvasElement;
    protected readonly _canvas: CanvasHelper;
    private Startscreen: StartScreen;
    private Gamescreen: GameScreen;
    private EraSelectionscreen: EraSelectionScreen;
    private itemList: ItemList;
    private screen:string[] = new Array("this.Startscreen.draw()", "this.Gamescreen.interval()", "this.EraSelectionscreen.draw()");
    protected currentGameScreenNumber: number = 1;

    public constructor() {
        this.Startscreen = new StartScreen();
        this.Gamescreen = new GameScreen();
        this.EraSelectionscreen = new EraSelectionScreen();
        this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
        this.itemList = new ItemList;
    }

    public draw = () => {
        this._canvas.clear();
        let currentGameScreen = eval(this.screen[this.currentGameScreenNumber])
        currentGameScreen;
    }
}

window.addEventListener('load', init);

function init(): void {
    const cavator = new Game();
    cavator.draw();
}
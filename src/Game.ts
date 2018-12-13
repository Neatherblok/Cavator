class Game {
    protected readonly canvasElement: HTMLCanvasElement;
    protected readonly _canvas: CanvasHelper;
    private Startscreen: StartScreen;
    private Gamescreen: GameScreen;
    private EraSelectionscreen: EraSelectionScreen;
    private itemList: ItemList;
    private screen: string[] = ["this.Startscreen.draw()", "this.Gamescreen.draw()", "this.EraSelectionscreen.draw()"];
    private currentGameScreenNumber: number = 1;

    public constructor() {
        this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
        this.Startscreen = new StartScreen();
        this.Gamescreen = new GameScreen();
        this.EraSelectionscreen = new EraSelectionScreen();
        this.itemList = new ItemList;
    }

    public draw = () => {
        this._canvas.clear();
        console.log
        let currentGameScreen = eval(this.screen[this.currentGameScreenNumber])
        console.log(currentGameScreen)
        currentGameScreen;
    }

    public nextScreen(){
        this.currentGameScreenNumber++
        console.log(this.currentGameScreenNumber)
    }

    public gameScreenValue():number {
        return 1444;
    }
}

window.addEventListener('load', init);

function init(): void {
    const cavator = new Game();
    window.setInterval(cavator.draw, 1000/60);
    window.addEventListener("click", cavator.nextScreen);
}
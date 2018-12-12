class Game {
    protected readonly canvasElement: HTMLCanvasElement;
    protected readonly _canvas: CanvasHelper;
    private Startscreen: StartScreen;
    private Gamescreen: GameScreen;
    private EraSelectionscreen: EraSelectionScreen;
    private itemList: ItemList;
    private screen: string[] = ["this.Startscreen.draw()", "this.Gamescreen.draw()", "this.EraSelectionscreen.draw()"];
    private currentGameScreenNumber: number = 0;
    protected counter: number = 90;

    public constructor() {
        this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
        this.Startscreen = new StartScreen();
        this.Gamescreen = new GameScreen();
        this.EraSelectionscreen = new EraSelectionScreen();
        this.itemList = new ItemList;
        let intervalId = setInterval(() => {
            this.counter--;
            console.log(this.counter);
            if(this.counter === 0) clearInterval(intervalId)
        }, 1000)
    }

    public draw = () => {
        this._canvas.clear();
        console.log
        let currentGameScreen = eval(this.screen[this.currentGameScreenNumber])
        console.log(currentGameScreen)
        currentGameScreen;
        this._canvas.writeTextToCanvas(`time left: ${this.counter}`, 20, 100, 100)
    }

    public nextScreen(){
        this.currentGameScreenNumber++
        console.log(this.currentGameScreenNumber)
    }
}

window.addEventListener('load', init);

function init(): void {
    const cavator = new Game();
    window.setInterval(cavator.draw, 1000/60);
    window.addEventListener("click", cavator.nextScreen);
}
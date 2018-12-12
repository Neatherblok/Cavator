class Game {
    protected readonly canvasElement: HTMLCanvasElement;
    protected readonly _canvas: CanvasHelper;
    private Startscreen: StartScreen;
    private Gamescreen: GameScreen;
    private EraSelectionscreen: EraSelectionScreen;
    private itemList: ItemList;
    private screen:string[] = new Array("this.Startscreen.draw()", "this.Gamescreen.draw()", "this.EraSelectionscreen.draw()");
    protected currentGameScreenNumber: number = 1;

    public constructor(
        public counter = 90
    ) {
        this.Startscreen = new StartScreen();
        this.Gamescreen = new GameScreen();
        this.EraSelectionscreen = new EraSelectionScreen();
        this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
        //this.item = new Item;
        let intervalId = setInterval(() => {
            this.counter = this.counter - 1;
            console.log(this.counter);
            this._canvas.writeTextToCanvas(`time left: ${this.counter}`, 20, 100, 100)
            if(this.counter === 0) clearInterval(intervalId)
        }, 1000)
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
    window.setInterval(cavator.draw, 1000 / 60);
}
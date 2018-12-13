class Game {
    protected readonly canvasElement: HTMLCanvasElement;
    protected readonly _canvas: CanvasHelper;
    private Startscreen: StartScreen;
    private Gamescreen: GameScreen;
    private EraSelectionscreen: EraSelectionScreen;
    private itemList: Item;
    private screen: string[] = ["this.Startscreen.draw()", "this.Gamescreen.draw()", "this.EraSelectionscreen.draw()"];
    private currentGameScreenNumber: number = 0;

    public constructor() {
        this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
        this.Startscreen = new StartScreen();
        this.Gamescreen = new GameScreen();
        this.EraSelectionscreen = new EraSelectionScreen();
        this.itemList = new Item;
    }

    public draw = () => {
        this._canvas.clear();
        let currentGameScreen = eval(this.screen[this.currentGameScreenNumber])
        currentGameScreen;
    }

    public nextScreen = (event: any) => {
        console.log(this.currentGameScreenNumber)
        if (this.currentGameScreenNumber == 2) {
            //if (event.clientX >= (this._canvas.getCenter().X - 111) && event.clientX <= (this._canvas.getCenter().X + 111)
            //    && event.clientY >= (this._canvas.getCenter().Y + 160) && event.clientY <= this._canvas.getCenter().Y + 199) {
                this.currentGameScreenNumber = 1;
           // }
        }
        else if (this.currentGameScreenNumber == 1) {
            for(let i = 0; i < this.Gamescreen.hole().length; i++){
                if(this.Gamescreen.hole()[i].getX() <= event.clientX && this.Gamescreen.hole()[i].getX()+128 >= event.clientX 
                && this.Gamescreen.hole()[i].getY() <= event.clientY && this.Gamescreen.hole()[i].getY()+110 >= event.clientY){
                    this.currentGameScreenNumber++;
                }
            }

        }
        else if (this.currentGameScreenNumber == 0) {
            if (event.clientX >= (this._canvas.getCenter().X - 111) && event.clientX <= (this._canvas.getCenter().X + 111)
                && event.clientY >= (this._canvas.getCenter().Y + 200) && event.clientY <= this._canvas.getCenter().Y + 239) {
                ++this.currentGameScreenNumber;
                this.Gamescreen.timer()
                console.log(this.Gamescreen.hole())
            }
        }
    }

}

window.addEventListener('load', init);

function init(): void {
    const cavator = new Game();
    window.setInterval(cavator.draw, 1000 / 60);
    window.addEventListener("click", cavator.nextScreen);
}

class Game {
    public readonly canvasElement: HTMLCanvasElement;
    protected readonly _canvas: CanvasHelper;
    private Startscreen: StartScreen;
    private Gamescreen: GameScreen;
    private EraSelectionscreen: EraSelectionScreen;
    private itemList: Item;
    private screen: string[] = ["this.Startscreen.draw()", "this.Gamescreen.draw()", "this.EraSelectionscreen.draw()"];
    private sounds = ['buttonHitSFX', 'digging1', 'digging2', 'digging3', 'digging4', 'digging5'];
    private currentGameScreenNumber: number = 0;

    public constructor() {
        this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
        this.Startscreen = new StartScreen();
        this.Gamescreen = new GameScreen("./assets/images/hole1.png");
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
            this.Gamescreen.addScoreCounter();
            this.currentGameScreenNumber = 1;
            this.canvasElement.style.backgroundImage = "url(./assets/images/backgrounds/groundBackground.png)";
            this.canvasElement.style.backgroundSize = "auto";
            this.canvasElement.style.cursor = "url(./assets/images/cursor.png), auto"
            let intervalId = setInterval(() => {
                this.draw();
                if (this.currentGameScreenNumber === 2) clearInterval(intervalId)
            }, 1000 / 60)
            // }
        }
        else if (this.currentGameScreenNumber == 1) {
            for (let i = 0; i < this.Gamescreen.getHoles().length; i++) {
                if (this.Gamescreen.getHoles()[i].getX() <= event.clientX && this.Gamescreen.getHoles()[i].getX() + 128 >= event.clientX
                    && this.Gamescreen.getHoles()[i].getY() <= event.clientY && this.Gamescreen.getHoles()[i].getY() + 110 >= event.clientY) {
                    const randomDigSound = MathHelper.randomNumber(1, this.sounds.length-1);
                    let audioLink = `./assets/sounds/sfx/diggingSFX/${this.sounds[randomDigSound]}.mp3`
                    let audio: HTMLAudioElement = new Audio(audioLink);
                    audio.play();
                    this.currentGameScreenNumber = 2;
                    this.canvasElement.style.backgroundImage = "url(./assets/images/backgrounds/tableBackgroundConcept.jpg)";
                    this.canvasElement.style.backgroundSize = "100% 100%"
                    this.canvasElement.style.cursor = "url(./assets/images/FeatherCursor.png), auto"
                    this.Gamescreen.regenerateHole(i);

                }
            }

        }
        else if (this.currentGameScreenNumber == 0) {
            if (event.clientX >= (this._canvas.getCenter().X - 111) && event.clientX <= (this._canvas.getCenter().X + 111)
                && event.clientY >= (this._canvas.getCenter().Y + 200) && event.clientY <= this._canvas.getCenter().Y + 239) {
                    let audioLink = "./assets/sounds/sfx/buttonHitSFX.mp3"
                    let audio: HTMLAudioElement = new Audio(audioLink);
                    audio.play();
                this.currentGameScreenNumber = 1;
                // window.setInterval(this.draw, 1000 / 60);
                this.canvasElement.style.cursor = "url(./assets/images/cursor.png), auto"
                let intervalId = setInterval(() => {
                    this.draw();
                    if (this.currentGameScreenNumber === 2) clearInterval(intervalId)
                }, 1000 / 60)
                this.Gamescreen.timer()
                console.log(this.Gamescreen.getHoles())
            }
        }
    }

}

window.addEventListener('load', init);

function init(): void {
    const cavator = new Game();
    cavator.draw()
    window.addEventListener("click", cavator.nextScreen);
    cavator.canvasElement.style.cursor = "url(./assets/images/featherCursor.png), auto";
}

//negeer deze

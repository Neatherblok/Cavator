class Game {
    public readonly canvasElement: HTMLCanvasElement;
    protected readonly _canvas: CanvasHelper;
    private Startscreen: StartScreen;
    private Gamescreen: GameScreen;
    private EraSelectionscreen: EraSelectionScreen;
    private itemList: Item;
    private MouseListener: MouseListener;
    private _gameHelper: GameHelper;
    private screen: string[] = ["this.Startscreen.draw()", "this.Gamescreen.draw()", "this.EraSelectionscreen.draw()"];
    private sounds: string[] = ['buttonHitSFX', 'digging1', 'digging2', 'digging3', 'digging4', 'digging5'];
    private currentGameScreenNumber: number = 0;

    public constructor() {
        this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
        this.Startscreen = new StartScreen();
        this.Gamescreen = new GameScreen("./assets/images/hole1.png");
        this.EraSelectionscreen = new EraSelectionScreen();
        this.MouseListener = new MouseListener();
        this.itemList = new Item();
        this._gameHelper = new GameHelper();
    }

    public draw = () => {
        this._canvas.clear();
        let currentGameScreen = eval(this.screen[this.currentGameScreenNumber])
        currentGameScreen;
    }

    public nextScreen = (event: any) => {
        console.log(this.currentGameScreenNumber)
        if (this.currentGameScreenNumber == 2) {
            if (event.clientX >= this.MouseListener.eraScreenClick(this.EraSelectionscreen.randomItemNumber()).Xmin && event.clientX <= this.MouseListener.eraScreenClick(this.EraSelectionscreen.randomItemNumber()).Xmax
                && event.clientY >= this.MouseListener.eraScreenClick(this.EraSelectionscreen.randomItemNumber()).Ymin && event.clientY <= this.MouseListener.eraScreenClick(this.EraSelectionscreen.randomItemNumber()).Ymax) {
                this.Gamescreen.addScoreCounter();
                this.currentGameScreenNumber = 1;
                let audioLink = `./assets/sounds/sfx/checkSFX/rightSFX.mp3`
                let audio: HTMLAudioElement = new Audio(audioLink);
                audio.play();
                this.canvasElement.style.backgroundImage = "url(./assets/images/backgrounds/groundBackground.png)";
                this.canvasElement.style.backgroundSize = "auto";
                this.canvasElement.style.cursor = "url(./assets/images/cursor.png), auto"
                let intervalId = setInterval(() => {
                    this.draw();
                    if (this.currentGameScreenNumber === 2) clearInterval(intervalId)
                }, 1000 / 60)
            }
            else if (event.clientX >= this.MouseListener.eraScreenClick(1).Xmin && event.clientX <= this.MouseListener.eraScreenClick(1).Xmax
                && event.clientY >= this.MouseListener.eraScreenClick(1).Ymin && event.clientY <= this.MouseListener.eraScreenClick(1).Ymax
                || event.clientX >= this.MouseListener.eraScreenClick(2).Xmin && event.clientX <= this.MouseListener.eraScreenClick(2).Xmax
                && event.clientY >= this.MouseListener.eraScreenClick(2).Ymin && event.clientY <= this.MouseListener.eraScreenClick(2).Ymax
                || event.clientX >= this.MouseListener.eraScreenClick(3).Xmin && event.clientX <= this.MouseListener.eraScreenClick(3).Xmax
                && event.clientY >= this.MouseListener.eraScreenClick(3).Ymin && event.clientY <= this.MouseListener.eraScreenClick(3).Ymax
                || event.clientX >= this.MouseListener.eraScreenClick(4).Xmin && event.clientX <= this.MouseListener.eraScreenClick(4).Xmax
                && event.clientY >= this.MouseListener.eraScreenClick(4).Ymin && event.clientY <= this.MouseListener.eraScreenClick(4).Ymax
                || event.clientX >= this.MouseListener.eraScreenClick(5).Xmin && event.clientX <= this.MouseListener.eraScreenClick(5).Xmax
                && event.clientY >= this.MouseListener.eraScreenClick(5).Ymin && event.clientY <= this.MouseListener.eraScreenClick(5).Ymax
                || event.clientX >= this.MouseListener.eraScreenClick(6).Xmin && event.clientX <= this.MouseListener.eraScreenClick(6).Xmax
                && event.clientY >= this.MouseListener.eraScreenClick(6).Ymin && event.clientY <= this.MouseListener.eraScreenClick(6).Ymax
                || event.clientX >= this.MouseListener.eraScreenClick(7).Xmin && event.clientX <= this.MouseListener.eraScreenClick(7).Xmax
                && event.clientY >= this.MouseListener.eraScreenClick(7).Ymin && event.clientY <= this.MouseListener.eraScreenClick(7).Ymax
                || event.clientX >= this.MouseListener.eraScreenClick(8).Xmin && event.clientX <= this.MouseListener.eraScreenClick(8).Xmax
                && event.clientY >= this.MouseListener.eraScreenClick(8).Ymin && event.clientY <= this.MouseListener.eraScreenClick(8).Ymax
                || event.clientX >= this.MouseListener.eraScreenClick(9).Xmin && event.clientX <= this.MouseListener.eraScreenClick(9).Xmax
                && event.clientY >= this.MouseListener.eraScreenClick(9).Ymin && event.clientY <= this.MouseListener.eraScreenClick(9).Ymax
                || event.clientX >= this.MouseListener.eraScreenClick(10).Xmin && event.clientX <= this.MouseListener.eraScreenClick(10).Xmax
                && event.clientY >= this.MouseListener.eraScreenClick(10).Ymin && event.clientY <= this.MouseListener.eraScreenClick(10).Ymax
                && !(event.clientX >= this.MouseListener.eraScreenClick(this.EraSelectionscreen.randomItemNumber()).Xmin && event.clientX <= this.MouseListener.eraScreenClick(this.EraSelectionscreen.randomItemNumber()).Xmax
                    && event.clientY >= this.MouseListener.eraScreenClick(this.EraSelectionscreen.randomItemNumber()).Ymin && event.clientY <= this.MouseListener.eraScreenClick(this.EraSelectionscreen.randomItemNumber()).Ymax)) {
                this.currentGameScreenNumber = 1;
                let audioLink = `./assets/sounds/sfx/checkSFX/wrongSFX.mp3`
                let audio: HTMLAudioElement = new Audio(audioLink);
                audio.play();
                this.canvasElement.style.backgroundImage = "url(./assets/images/backgrounds/groundBackground.png)";
                this.canvasElement.style.backgroundSize = "auto";
                this.canvasElement.style.cursor = "url(./assets/images/cursor.png), auto"
                let intervalId = setInterval(() => {
                    this.draw();
                    if (this.currentGameScreenNumber === 2) clearInterval(intervalId)
                }, 1000 / 60)
            }
        }
        else if (this.currentGameScreenNumber == 1) {
            for (let i = 0; i < this.Gamescreen.getHoles().length; i++) {
                if (this.Gamescreen.getHoles()[i].getX() <= event.clientX && this.Gamescreen.getHoles()[i].getX() + 128 >= event.clientX
                    && this.Gamescreen.getHoles()[i].getY() <= event.clientY && this.Gamescreen.getHoles()[i].getY() + 110 >= event.clientY) {

                    const randomDigSound = MathHelper.randomNumber(1, this.sounds.length - 1);
                    let audioLink = `./assets/sounds/sfx/diggingSFX/${this.sounds[randomDigSound]}.mp3`
                    let audio: HTMLAudioElement = new Audio(audioLink);
                    audio.play();
                    if(this.Gamescreen.getHoles()[i].getClicks() == 0){
                        console.log('bigger than 0')
                        this.currentGameScreenNumber = 2;
                        this.canvasElement.style.backgroundImage = "url(./assets/images/backgrounds/tableBackgroundConcept.jpg)";
                        this.canvasElement.style.backgroundSize = "100% 100%"
                        this.canvasElement.style.cursor = "url(./assets/images/FeatherCursor2.png), auto"
                        this.Gamescreen.regenerateHole(i);
                    }
                    else{
                        this.Gamescreen.getHoles()[i].lowerClicks();
                    }

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
                this._gameHelper.timer()
                console.log(this.Gamescreen.getHoles())
            }
        }
    }

    public currentGameScreen(){
        return this.currentGameScreenNumber
    }

}

window.addEventListener('load', init);

function init(): void {
    const cavator = new Game();
    cavator.draw()
    window.addEventListener("click", cavator.nextScreen);
    cavator.canvasElement.style.cursor = "url(./assets/images/FeatherCursor2.png), auto";

}
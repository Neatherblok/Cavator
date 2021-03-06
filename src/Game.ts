class Game {
    public readonly canvasElement: HTMLCanvasElement;
    protected readonly _canvas: CanvasHelper;
    private Startscreen: StartScreen;
    private Gamescreen: GameScreen;
    private EraSelectionscreen: EraSelectionScreen;
    private HighscoreScreen: HighscoreScreen;
    private GameExplanationscreen: GameExplanationScreen;
    private EraExplanationscreen: EraExplanationScreen;
    private itemList: Item;
    private _cookieAdd: CookieAdd;
    private MouseListener: MouseListener;
    //defines all possible screens
    private screen: string[] = ["this.Startscreen.draw()", "this.Gamescreen.draw()", "this.EraSelectionscreen.draw()", "this.HighscoreScreen.draw()", "this.GameExplanationscreen.draw()", "this.EraExplanationscreen.draw()"];
    //defines all possible sounds
    private sounds: string[] = ['buttonHitSFX', 'digging1', 'digging2', 'digging3', 'digging4', 'digging5'];
    //defines the current gamescreen
    private currentGameScreenNumber: number = 0;
    private audioLink: string;
    private backgroundMusic: HTMLAudioElement;
    private muteButton: HTMLElement;
    private goBackButton: HTMLElement;
    //defines amount of time left
    private time: number = 150;

    public constructor() {
        this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
        this.Startscreen = new StartScreen();
        this.Gamescreen = new GameScreen();
        this.EraSelectionscreen = new EraSelectionScreen();
        this.GameExplanationscreen = new GameExplanationScreen();
        this.EraExplanationscreen = new EraExplanationScreen();
        this.MouseListener = new MouseListener();
        this.itemList = new Item();
        this._cookieAdd = new CookieAdd;
        //define background music
        this.audioLink = `./assets/sounds/music/dutch_street_organ.wav`;
        this.backgroundMusic = new Audio(this.audioLink);
        //corrects cookie if muted was true after page reload
        this._cookieAdd.muteCookie(this._cookieAdd.checkCookie('backgroundMusic', null))
        this.muteButton = document.getElementById("mute");
        this.goBackButton = document.getElementById("homescreenButton");
        //defines clickable mute button
        this.muteButton.addEventListener("click", (e: Event) => this.backgroundMusicController());
        this.goBackButton.addEventListener("click", (e: Event) => this.restart());
        document.addEventListener('mousedown', function (event) {
            if (event.detail > 1) {
                event.preventDefault();
            }
        }, false);
    }

    //draws current screen
    public draw = () => {
        this._canvas.clear();
        eval(this.screen[this.currentGameScreenNumber])
    }

    //sets next screen after clicks
    public nextScreen = (event: any) => {
        if (this.currentGameScreenNumber == 5) {
            //defines place where must be clicked
            if (event.clientX >= (this._canvas.getCenter().X - 111) && event.clientX <= (this._canvas.getCenter().X + 111)
                && event.clientY >= (this._canvas.getCenter().Y + 250) && event.clientY <= this._canvas.getCenter().Y + 289) {
                //defines button soundeffect
                let audioLink = "./assets/sounds/sfx/buttonHitSFX.mp3"
                let audio: HTMLAudioElement = new Audio(audioLink);
                //plays button soundeffect
                audio.play();
                //reset current screen to startscreen settings
                this.currentGameScreenNumber = 0;
                this.draw();
            }
        }
        else if (this.currentGameScreenNumber == 4) {
            //defines place where must be clicked
            if (event.clientX >= (this._canvas.getCenter().X - 111) && event.clientX <= (this._canvas.getCenter().X + 111)
                && event.clientY >= (this._canvas.getCenter().Y + 200) && event.clientY <= this._canvas.getCenter().Y + 239) {
                //defines button soundeffect
                let audioLink = "./assets/sounds/sfx/buttonHitSFX.mp3"
                let audio: HTMLAudioElement = new Audio(audioLink);
                //plays button soundeffect
                audio.play();
                //reset current screen to startscreen settings
                this.currentGameScreenNumber = 0;
                this.draw();
            }
        }
        else if (this.currentGameScreenNumber == 3) {
            //defines place where must be clicked
            if (event.clientX >= (this._canvas.getCenter().X - 111) && event.clientX <= (this._canvas.getCenter().X + 111)
                && event.clientY >= (this._canvas.getCenter().Y + 200) && event.clientY <= this._canvas.getCenter().Y + 239) {
                for (let i = 1; i < 6; i++) {
                    document.getElementById(`place${i}`).innerHTML = '';
                }
                //defines button soundeffect
                let audioLink = "./assets/sounds/sfx/buttonHitSFX.mp3"
                let audio: HTMLAudioElement = new Audio(audioLink);
                //plays button soundeffect
                audio.play();
                //reset current screen to startscreen settings
                this.currentGameScreenNumber = 1;
                document.getElementById("timerText").innerHTML = `Tijd over: 150 seconden`;
                document.getElementById("scoreText").innerHTML = `Je score is: 0`;
                this.resetCounter();
                this.timer();
                this.Gamescreen.resetScore();
                this.draw();

            }
            else if (event.clientX >= (this._canvas.getCenter().X - 111) && event.clientX <= (this._canvas.getCenter().X + 111)
                && event.clientY >= (this._canvas.getCenter().Y + 250) && event.clientY <= this._canvas.getCenter().Y + 289) {
                //refreshes the page from cache if available
                this.restart();
            }
        }
        else if (this.currentGameScreenNumber == 2) {
            //defines right place where must be clicked
            if (event.clientX >= this.MouseListener.eraScreenClick(this.EraSelectionscreen.getItemEraNumber()).Xmin && event.clientX <= this.MouseListener.eraScreenClick(this.EraSelectionscreen.getItemEraNumber()).Xmax
                && event.clientY >= this.MouseListener.eraScreenClick(this.EraSelectionscreen.getItemEraNumber()).Ymin && event.clientY <= this.MouseListener.eraScreenClick(this.EraSelectionscreen.getItemEraNumber()).Ymax) {
                //add point to scoreCounter
                this.Gamescreen.addScoreCounter();
                //defines button soundeffect
                let audioLink = `./assets/sounds/sfx/checkSFX/rightSFX.mp3`
                let audio: HTMLAudioElement = new Audio(audioLink);
                //playes right answer soundeffect
                audio.play();
                //sets current screen to gamescreen settings
                this.currentGameScreenNumber = 1;
                this.draw();
            }
            //defines wrong (era) coordinates where could be clicked
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
                && !(event.clientX >= this.MouseListener.eraScreenClick(this.EraSelectionscreen.getItemEraNumber()).Xmin && event.clientX <= this.MouseListener.eraScreenClick(this.EraSelectionscreen.getItemEraNumber()).Xmax
                    && event.clientY >= this.MouseListener.eraScreenClick(this.EraSelectionscreen.getItemEraNumber()).Ymin && event.clientY <= this.MouseListener.eraScreenClick(this.EraSelectionscreen.getItemEraNumber()).Ymax)) {

                //defines button soundeffect
                let audioLink = `./assets/sounds/sfx/checkSFX/wrongSFX.mp3`
                let audio: HTMLAudioElement = new Audio(audioLink);
                //plays button soundeffect
                audio.play();
                //sets current screen to gamescreen settings
                this.currentGameScreenNumber = 1;
                this.draw();
                this._canvas.writeTextToCanvas(`Het juiste tijdvak:`, 20, this._canvas.getCenter().X, 50, 'white')
                this._canvas.writeImageToCanvas(`./assets/images/eraLogos/era${this.EraSelectionscreen.getItemEraNumber()}.png`, this._canvas.getCenter().X + 100, 20, 2, 2)
            }
        }
        else if (this.currentGameScreenNumber == 1) {
            //gets holes
            for (let i = 0; i < this.Gamescreen.getHole().length; i++) {
                //defines place where must be clicked
                if (this.Gamescreen.getHole()[i].getX() <= event.clientX && this.Gamescreen.getHole()[i].getX() + 128 >= event.clientX
                    && this.Gamescreen.getHole()[i].getY() <= event.clientY && this.Gamescreen.getHole()[i].getY() + 110 >= event.clientY) {
                    //defines digging soundeffect
                    const randomDigSound = MathHelper.randomNumber(1, this.sounds.length - 1);
                    let audioLink = `./assets/sounds/sfx/diggingSFX/${this.sounds[randomDigSound]}.mp3`
                    let audio: HTMLAudioElement = new Audio(audioLink);
                    //plays digging soundeffect
                    audio.play();
                    //checks if clickcounter == 0
                    if (this.Gamescreen.getHole()[i].getClicks() == 0) {
                        if (this.Gamescreen.getHole()[i].itemOrJokerSelector() == false) {
                            //sets current screen to eraselectionscreen settings
                            this.currentGameScreenNumber = 2;
                            //activates function which generates new hole and removes old
                            this.Gamescreen.regenerateHole(i);
                            this.draw()
                        }
                        else if (this.Gamescreen.getHole()[i].itemOrJokerSelector() == true) {
                            this.time += 10;
                            this.Gamescreen.regenerateHole(i);
                            this.draw();
                            this._canvas.writeTextToCanvas(`Je hebt een zandloper gevonden!`, 20, this._canvas.getCenter().X, 50, 'white')
                            this._canvas.writeTextToCanvas(`+10 seconden`, 20, this._canvas.getCenter().X, 80, 'white')

                        }
                    }
                    else {
                        //activates function which reduces amount of clicks on hole
                        this.Gamescreen.getHole()[i].lowerClicks();
                    }

                }
            }

        }
        else if (this.currentGameScreenNumber == 0) {
            //defines place where must be clicked
            if (event.clientX >= (this._canvas.getCenter().X - 111) && event.clientX <= (this._canvas.getCenter().X + 111)
                && event.clientY >= (this._canvas.getCenter().Y + 150) && event.clientY <= this._canvas.getCenter().Y + 189) {
                //defines button soundeffect
                let audioLink = "./assets/sounds/sfx/buttonHitSFX.mp3"
                let audio: HTMLAudioElement = new Audio(audioLink);
                //plays button soundeffect
                audio.play();
                //activates play countdown
                this.timer()
                //sets current screen to gamescreen settings
                this.currentGameScreenNumber = 1;
                this.draw();
                document.getElementById('scoreText').innerHTML = `Je score is: 0`;
                document.getElementById("timerText").innerHTML = `Tijd over: 150 seconden`;
            }
            else if (event.clientX >= (this._canvas.getCenter().X - 111) && event.clientX <= (this._canvas.getCenter().X + 111)
                && event.clientY >= (this._canvas.getCenter().Y + 200) && event.clientY <= this._canvas.getCenter().Y + 239) {
                //defines button soundeffect
                let audioLink = "./assets/sounds/sfx/buttonHitSFX.mp3"
                let audio: HTMLAudioElement = new Audio(audioLink);
                //plays button soundeffect
                audio.play();
                //sets current screen to gamescreen settings
                this.currentGameScreenNumber = 4;
                this.draw();
            }
            else if (event.clientX >= (this._canvas.getCenter().X - 111) && event.clientX <= (this._canvas.getCenter().X + 111)
                && event.clientY >= (this._canvas.getCenter().Y + 250) && event.clientY <= this._canvas.getCenter().Y + 289) {
                //defines button soundeffect
                let audioLink = "./assets/sounds/sfx/buttonHitSFX.mp3"
                let audio: HTMLAudioElement = new Audio(audioLink);
                //plays button soundeffect
                audio.play();
                //sets current screen to gamescreen settings
                this.currentGameScreenNumber = 5;
                this.draw();
            }
        }
    }

    //sets backgroundmusic and plays in loop or mute it
    public backgroundMusicController() {
        this.backgroundMusic.loop = true;
        this.backgroundMusic.play();
        if (this._cookieAdd.checkCookie('backgroundMusic', null) != false && this._cookieAdd.checkCookie('backgroundMusic', null) != true) {
            this._cookieAdd.muteCookie(true);
        }
        else if (this._cookieAdd.checkCookie('backgroundMusic', null) == true) {
            this._cookieAdd.muteCookie(true);
            this.backgroundMusic.muted = false;
            this.muteButton.innerHTML = "<img src='./assets/images/UI/volUp.png' alt='background music on'>";
        }
        else if (this._cookieAdd.checkCookie('backgroundMusic', null) == false) {
            this._cookieAdd.muteCookie(false);
            this.backgroundMusic.muted = true;
            this.muteButton.innerHTML = "<img src='./assets/images/UI/volOff.png' alt='background music muted'>";
        }
    }

    //sets a timer with countdown to highscorescreen
    public timer() {
        let intervalId = setInterval(() => {
            const timerText = document.getElementById("timerText");
            //views timeleft on screen
            timerText.innerHTML = `Tijd over: ${this.time - 1} seconden`
            //reduces time left
            this.time--;
            if (this.time === 0) {
                clearInterval(intervalId)
                timerText.innerHTML = ''
                //sets current screen to highscorescreen settings
                this.HighscoreScreen = new HighscoreScreen();
                this.currentGameScreenNumber = 3
                this.draw()
                document.getElementById("scoreText").innerHTML = '';
            }
        }, 1000)
    }

    //resets timer back to basic settings
    public resetCounter() {
        this.time = 150;
    }

    //restarts the game
    public restart(){
        window.location.reload(false); 
    }
}

window.addEventListener('load', init);

//sets game after site is started
function init(): void {
    const cavator = new Game();
    cavator.backgroundMusicController()
    cavator.draw()
    window.addEventListener("click", cavator.nextScreen);

}
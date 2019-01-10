class HighscoreScreen {
    
    protected readonly canvasElement: HTMLCanvasElement;
    protected readonly _canvas: CanvasHelper;
    private _cookieAdd: CookieAdd

    public constructor(){
        this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
        this._cookieAdd = new CookieAdd;
    }

    //draws highscorescreen
    public draw = () => {
        this.canvasElement.style.backgroundImage = "url(./assets/images/backgrounds/tableBackground.jpg)";
        this.canvasElement.style.backgroundSize = "100% 100%"
        this.canvasElement.style.cursor = "url(./assets/images/FeatherCursor.png) 4 12, auto"
        this.canvasElement.style.cursor = "url(./assets/images/FeatherCursor.cur), auto"
        this._canvas.writeTextToCanvas(`Je hebt een score van ${Number(document.getElementById("scoreText").innerHTML.substring('Je score is: '.length))} behaald!`, 45, this._canvas.getCenter().X, 100, "yellow");
        this._canvas.writeButtonToCanvas("Probeer opnieuw", undefined, this._canvas.getCenter().Y + 200);
        this._canvas.writeButtonToCanvas("Titelscherm", undefined, this._canvas.getCenter().Y + 250);
        this._cookieAdd.checkCookie('highscore', Number(document.getElementById("scoreText").innerHTML.substring('Je score is: '.length)));
        console.log(document.getElementById("scoreText").innerHTML.substring('Je score is: '.length))
    }
}
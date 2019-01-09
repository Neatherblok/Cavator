class GameExplanationScreen{

    protected readonly canvasElement: HTMLCanvasElement;
    protected readonly _canvas: CanvasHelper;
    protected readonly explanation1_0: string;
    protected readonly explanation1_1: string;
    protected readonly explanation2: string;
    protected readonly explanation3_0: string;
    protected readonly explanation3_1: string;
    
    public constructor(){
        this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
        this.explanation1_0 = "Het doel van het spel is om zoveel mogelijk voorwerpen op te graven.";
        this.explanation1_1 = "Dat doe je door meerdere keren te klikken op de gaten."
        this.explanation2 = "Hierna krijg je de keuze om het goede tijdvak bij het voorwerp te zoeken.";
        this.explanation3_0 = "Als je het juiste antwoord hebt gekozen krijg je een punt erbij, ";
        this.explanation3_1 = "als je het fout hebt krijg je het goede antwoord te zien.";

    }

    //draws explanationscreen
    public draw = () => {
        this.canvasElement.style.backgroundImage = "url(./assets/images/backgrounds/tableBackground.jpg)";
        this.canvasElement.style.backgroundSize = "100% 100%"
        this.canvasElement.style.cursor = "url(./assets/images/FeatherCursor.png) 4 12, auto"
        this.canvasElement.style.cursor = "url(./assets/images/FeatherCursor.cur), auto"
        this._canvas.writeTextToCanvas(this.explanation1_0,20,this._canvas.getWidth()/32,100,"yellow","left");
        this._canvas.writeTextToCanvas(this.explanation1_1,20,this._canvas.getWidth()/32,130,"yellow","left");
        this._canvas.writeImageToCanvas("./assets/images/screenshots/gameScreen.png", this._canvas.getCenter().X+130, 30);
        this._canvas.writeTextToCanvas(this.explanation2,20,this._canvas.getWidth()/32,250,"yellow","left");
        this._canvas.writeImageToCanvas("./assets/images/screenshots/eraSelectionScreen.png", this._canvas.getCenter().X+130, 270);
        this._canvas.writeTextToCanvas(this.explanation3_0,20,this._canvas.getWidth()/32,400,"yellow","left");
        this._canvas.writeTextToCanvas(this.explanation3_1,20,this._canvas.getWidth()/32,430,"yellow","left");
        this._canvas.writeButtonToCanvas("Terug", undefined, this._canvas.getCenter().Y + 200);
    }
}
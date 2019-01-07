class ExplanationScreen{

    protected readonly canvasElement: HTMLCanvasElement;
    protected readonly _canvas: CanvasHelper;
    protected readonly explanation1: string;
    protected readonly explanation2: string;
    protected readonly explanation3: string;
    
    public constructor(){
        this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
        this.explanation1 = "Het doel van het spel is om zoveel mogelijk voorwerpen op te graven.";
        this.explanation2 = "Hierna krijg je de keuze om het goede tijdvak bij het voorwerp te zoeken.";
        this.explanation3 = "Als je het goede antwoord hebt gekozen krijg je een punt erbij, als je het fout hebt krijg je het goede antwoord te zien.";

    }

    //draws explanationscreen
    public draw = () => {
        this.canvasElement.style.backgroundImage = "url(./assets/images/backgrounds/tableBackground.jpg)";
        this.canvasElement.style.backgroundSize = "100% 100%"
        this.canvasElement.style.cursor = "url(./assets/images/FeatherCursor.png), auto";
        this._canvas.writeTextToCanvas(this.explanation1,20,this._canvas.getWidth()/32,100,"yellow","left");
        this._canvas.writeTextToCanvas(this.explanation2,20,this._canvas.getWidth()/32,250,"yellow","left");
        this._canvas.writeTextToCanvas(this.explanation3,20,this._canvas.getWidth()/32,400,"yellow","left");
        this._canvas.writeButtonToCanvas("Terug", undefined, this._canvas.getCenter().Y + 200);
    }
}
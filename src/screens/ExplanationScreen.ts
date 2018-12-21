class ExplanationScreen{

    protected readonly canvasElement: HTMLCanvasElement;
    protected readonly _canvas: CanvasHelper;
    protected readonly explanation: string;
    
    public constructor(){
        this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
        this.explanation = "Het doel om het spel is om zoveel mogelijk voorwerpen op te graven";
    }

    //draws explanationscreen
    public draw = () => {
        this._canvas.writeTextToCanvas(this.explanation,20,this._canvas.getCenter().X,this._canvas.getCenter().Y);
        this._canvas.writeButtonToCanvas("Terug naar titelscherm", undefined, this._canvas.getCenter().Y + 200);

    }

}
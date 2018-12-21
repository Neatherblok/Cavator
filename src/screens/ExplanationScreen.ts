class ExplanationScreen{

    protected readonly canvasElement: HTMLCanvasElement;
    protected readonly _canvas: CanvasHelper;
    
    public constructor(){
        this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
    }

    public draw = () => {
        this._canvas.writeTextToCanvas("Uitleg",20,this._canvas.getCenter().X,this._canvas.getCenter().Y);
        this._canvas.writeButtonToCanvas("Terug naar titelscherm", undefined, this._canvas.getCenter().Y + 200);

    }

}
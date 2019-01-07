class EraExplanationScreen{

    protected readonly canvasElement: HTMLCanvasElement;
    protected readonly _canvas: CanvasHelper;
    
    public constructor(){
        this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);

    }

    //draws explanationscreen
    public draw = () => {
        this.canvasElement.style.backgroundImage = "url(./assets/images/backgrounds/tableBackground.jpg)";
        this.canvasElement.style.backgroundSize = "100% 100%"
        this.canvasElement.style.cursor = "url(./assets/images/FeatherCursor.png), auto";
        this._canvas.writeImageToCanvas("./assets/images/eraLogos/era1.png", 50, 50)
        this._canvas.writeButtonToCanvas("Terug", undefined, this._canvas.getCenter().Y + 250);
    }
}
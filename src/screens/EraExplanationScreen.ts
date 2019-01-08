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
        this.canvasElement.style.cursor = "url(./assets/images/FeatherCursor.png), auto"
        this.canvasElement.style.cursor = "url(./assets/images/FeatherCursor.cur), auto"
        this._canvas.writeImageToCanvas("./assets/images/eraLogos/era1.png", 25, 25);
        this._canvas.writeImageToCanvas("./assets/images/eraLogos/era2.png", 25, 150);
        this._canvas.writeImageToCanvas("./assets/images/eraLogos/era3.png", 25, 275);
        this._canvas.writeImageToCanvas("./assets/images/eraLogos/era4.png", 25, 400);
        this._canvas.writeImageToCanvas("./assets/images/eraLogos/era5.png", 475, 25);
        this._canvas.writeImageToCanvas("./assets/images/eraLogos/era6.png", 475, 150);
        this._canvas.writeImageToCanvas("./assets/images/eraLogos/era7.png", 475, 275);
        this._canvas.writeImageToCanvas("./assets/images/eraLogos/era8.png", 475, 400);
        this._canvas.writeImageToCanvas("./assets/images/eraLogos/era9.png", 925, 275);
        this._canvas.writeImageToCanvas("./assets/images/eraLogos/era10.png", 925, 400);
        this._canvas.writeButtonToCanvas("Terug", undefined, this._canvas.getCenter().Y + 250);
    }
}
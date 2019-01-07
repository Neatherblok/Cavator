class StartScreen{

    protected readonly canvasElement: HTMLCanvasElement;
    protected readonly _canvas: CanvasHelper;
    
    public constructor(){
        this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
    }

    //draws startscreen
    public draw = () => {
        // removes display of highscores
        for(let i=1; i<6; i++){
            document.getElementById(`place${i}`).innerHTML = '';
        }
        this.canvasElement.style.backgroundImage = "url(./assets/images/backgrounds/tableBackground.jpg)";
        this.canvasElement.style.backgroundSize = "100% 100%"
        this.canvasElement.style.cursor = "url(./assets/images/FeatherCursor.png), auto";
        this._canvas.writeImageToCanvas("./assets/images/Cavator_logo/CavatorLogo.png", this._canvas.getCenter().X-200, this._canvas.getCenter().Y-300)
        this._canvas.writeButtonToCanvas("Speel", undefined, this._canvas.getCenter().Y + 150);
        this._canvas.writeButtonToCanvas("Speluitleg", undefined, this._canvas.getCenter().Y + 200);

    }

}
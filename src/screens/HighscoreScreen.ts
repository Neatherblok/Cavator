class HighscoreScreen {
    
    protected readonly canvasElement: HTMLCanvasElement;
    protected readonly _canvas: CanvasHelper;

    public constructor(){
        this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
    }

    public draw = () => {

    }

}
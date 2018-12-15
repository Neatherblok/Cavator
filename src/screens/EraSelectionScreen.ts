class EraSelectionScreen {

    protected readonly canvasElement: HTMLCanvasElement;
    protected readonly _canvas: CanvasHelper;
    private itemList: Item;

    public constructor(){
        this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
        this.itemList = new Item;
    }

    public draw = () => {
        this._canvas.writeImageToCanvas(this.itemList.getItemProperty(this.randomItemPicker(),"source"),this._canvas.getCenter().X, this._canvas.getCenter().Y-200)
    }

    public randomItemPicker(){
        return MathHelper.randomNumber(0, this.itemList.getItemArrayLength())
    }

}
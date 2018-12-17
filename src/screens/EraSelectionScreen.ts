class EraSelectionScreen {

    protected readonly canvasElement: HTMLCanvasElement;
    protected readonly _canvas: CanvasHelper;
    private itemList: Item;
    private pickedItem: number;

    public constructor(){
        this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
        this.itemList = new Item;
    }

    public draw = () => {
        this.randomItemPicker();
        this._canvas.writeImageToCanvas(this.itemList.getItemProperty(this.pickedItem,"source"),this._canvas.getCenter().X, this._canvas.getCenter().Y-200)
        
    }

    public randomItemPicker(){
        this.pickedItem = MathHelper.randomNumber(0, this.itemList.getItemArrayLength())
    }

    public randomItemNumber(){
        return this.itemList.getItemProperty(this.pickedItem,"era")
    }

}
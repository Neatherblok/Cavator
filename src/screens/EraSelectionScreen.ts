class EraSelectionScreen {

    protected readonly canvasElement: HTMLCanvasElement;
    protected readonly _canvas: CanvasHelper;
    private itemList: Item;
    private pickedItem: number;

    public constructor() {
        this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
        this.itemList = new Item;
    }

    public draw = () => {
        this.randomItemPicker();
        this._canvas.writeTextToCanvas(`Je hebt ${this.itemList.getItemProperty(this.pickedItem, "name")} gevonden!`, 45, this._canvas.getCenter().X, 100, "yellow")
        this._canvas.writeImageToCanvas(this.itemList.getItemProperty(this.pickedItem, "source"), this._canvas.getCenter().X - 150, this._canvas.getCenter().Y - 200)
        this._canvas.writeImageToCanvas("./assets/images/eraLogos/era1.png", this._canvas.getWidth() * 0.017, this._canvas.getHeight() - 200)
        this._canvas.writeImageToCanvas("./assets/images/eraLogos/era2.png", this._canvas.getWidth() * 0.117, this._canvas.getHeight() - 200)
        this._canvas.writeImageToCanvas("./assets/images/eraLogos/era3.png", this._canvas.getWidth() * 0.217, this._canvas.getHeight() - 200)
        this._canvas.writeImageToCanvas("./assets/images/eraLogos/era4.png", this._canvas.getWidth() * 0.317, this._canvas.getHeight() - 200)
        this._canvas.writeImageToCanvas("./assets/images/eraLogos/era5.png", this._canvas.getWidth() * 0.417, this._canvas.getHeight() - 200)
        this._canvas.writeImageToCanvas("./assets/images/eraLogos/era6.png", this._canvas.getWidth() * 0.517, this._canvas.getHeight() - 200)
        this._canvas.writeImageToCanvas("./assets/images/eraLogos/era7.png", this._canvas.getWidth() * 0.617, this._canvas.getHeight() - 200)
        this._canvas.writeImageToCanvas("./assets/images/eraLogos/era8.png", this._canvas.getWidth() * 0.717, this._canvas.getHeight() - 200)
        this._canvas.writeImageToCanvas("./assets/images/eraLogos/era9.png", this._canvas.getWidth() * 0.817, this._canvas.getHeight() - 200)
        this._canvas.writeImageToCanvas("./assets/images/eraLogos/era10.png", this._canvas.getWidth() * 0.917, this._canvas.getHeight() - 200)
        this._canvas._context.lineWidth = 2;
        this._canvas._context.beginPath();
        this._canvas._context.moveTo(this._canvas.getWidth() * 0.014, this._canvas.getHeight() - 80);
        this._canvas._context.lineTo(this._canvas.getWidth() * 0.985, this._canvas.getHeight() - 80);
        this._canvas._context.moveTo(this._canvas.getWidth() * 0.014, this._canvas.getHeight() - 79);
        this._canvas._context.lineTo(this._canvas.getWidth() * 0.985, this._canvas.getHeight() - 79);
        this._canvas._context.stroke();
        this._canvas._context.strokeStyle = "yellow";
        this._canvas._context.strokeRect(this._canvas.getWidth() * 0.70 - 1, this._canvas.getHeight() * 0.18 - 1, 422, this._canvas.getHeight() * 0.5 + 2);
        this._canvas._context.fillStyle = "grey";
        this._canvas._context.fillRect(this._canvas.getWidth() * 0.70, this._canvas.getHeight() * 0.18, 420, this._canvas.getHeight() * 0.5);
        this._canvas.writeTextToCanvas('Hints', 40, this._canvas.getWidth() * 0.87, this._canvas.getHeight() * 0.24, "black", "right");
        for (let i = 1; i <= 3; i++) {
            this._canvas.writeTextToCanvas(`• ${this.itemList.getItemProperty(this.pickedItem, `hint${i}`).split(" ").splice(0, 5).join(" ")}`, 20, this._canvas.getWidth() * 0.83, this._canvas.getHeight() * (0.15 + 0.13 * i), "black", "center");
            if (this.itemList.getItemProperty(this.pickedItem, `hint${i}`).length > 6) {
                this._canvas.writeTextToCanvas(this.itemList.getItemProperty(this.pickedItem, `hint${i}`).split(" ").splice(5, this.itemList.getItemProperty(this.pickedItem, `hint${i}`).length).join(" "), 20, this._canvas.getWidth() * 0.83, this._canvas.getHeight() * (0.20 + 0.13 * i), "black", "center");
            }
        }
    }

    public randomItemPicker() {
        this.pickedItem = MathHelper.randomNumber(0, this.itemList.getItemArrayLength())
    }

    public randomItemNumber() {
        return this.itemList.getItemProperty(this.pickedItem, "era")
        //return 10;
    }

}
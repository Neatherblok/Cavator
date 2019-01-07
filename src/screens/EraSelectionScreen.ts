class EraSelectionScreen {

    protected readonly canvasElement: HTMLCanvasElement;
    protected readonly _canvas: CanvasHelper;
    private itemList: Item;
        //stores the random value, picked by the randomItemPicker function
    private pickedItem: number;

    public constructor() {
        this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
            //gets the itemList
        this.itemList = new Item;
    }

    //draws eraselectionscreen
    public draw = () => {
            //gets a random picture
        this.randomItemPicker();
            //changes settings
        this.canvasElement.style.backgroundImage = "url(./assets/images/backgrounds/tableBackground.jpg)";
        this.canvasElement.style.backgroundSize = "100% 100%"
        this.canvasElement.style.cursor = "url(./assets/images/FeatherCursor.png), auto"
            //gets item and let it see on the canvas
        this._canvas.writeTextToCanvas(`Je hebt ${this.itemList.getItemProperty(this.pickedItem, "name")} gevonden!`, 45, this._canvas.getCenter().X, 100, "yellow")
        this._canvas.writeImageToCanvas(this.itemList.getItemProperty(this.pickedItem, "source"), this._canvas.getCenter().X /2 - 150, this._canvas.getCenter().Y - 200)
            //adds era timeline viewable to the canvas
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
            //adds hint area viewable to the canvas
        this._canvas._context.moveTo(this._canvas.getWidth() * 0.014, this._canvas.getHeight() - 80);
        this._canvas._context.lineTo(this._canvas.getWidth() * 0.985, this._canvas.getHeight() - 80);
        this._canvas._context.moveTo(this._canvas.getWidth() * 0.014, this._canvas.getHeight() - 79);
        this._canvas._context.lineTo(this._canvas.getWidth() * 0.985, this._canvas.getHeight() - 79);
        this._canvas._context.stroke();
        this._canvas._context.strokeStyle = "yellow";
        this._canvas._context.strokeRect((this._canvas.getWidth() * 0.75) - (this._canvas.getWidth()*0.125), this._canvas.getHeight() * 0.18 - 1, this._canvas.getWidth()*0.35, this._canvas.getHeight() * 0.5 + 2);
        this._canvas._context.fillStyle = "grey";
        this._canvas._context.fillRect((this._canvas.getWidth() * 0.75) - (this._canvas.getWidth()*0.125-1), this._canvas.getHeight() * 0.18, this._canvas.getWidth()*0.35-2, this._canvas.getHeight() * 0.5);
        this._canvas.writeTextToCanvas('Hints', 40, this._canvas.getWidth() * 0.83, this._canvas.getHeight() * 0.24, "black", "right");
            //adds the 3 hints and breaks them apart to several lines
        for (let i = 1; i <= 3; i++) {
            this._canvas.writeTextToCanvas(`• ${this.itemList.getItemProperty(this.pickedItem, `hint${i}`).split(" ").splice(0, 5).join(" ")}`, 20, this._canvas.getWidth() * 0.80, this._canvas.getHeight() * (0.15 + 0.13 * i), "black", "center");
            if (this.itemList.getItemProperty(this.pickedItem, `hint${i}`).length > 6) {
                this._canvas.writeTextToCanvas(this.itemList.getItemProperty(this.pickedItem, `hint${i}`).split(" ").splice(5, this.itemList.getItemProperty(this.pickedItem, `hint${i}`).length).join(" "), 20, this._canvas.getWidth() * 0.80, this._canvas.getHeight() * (0.20 + 0.13 * i), "black", "center");
            }
        }
    }

        //generates a random item, from the item list
    public randomItemPicker() {
        this.pickedItem = MathHelper.randomNumber(0, this.itemList.getItemArrayLength()-1)
    }

        //returns the era number of the picked item
    public randomItemNumber() {
        return this.itemList.getItemProperty(this.pickedItem, "era")
    }

}
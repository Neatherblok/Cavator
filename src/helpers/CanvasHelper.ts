class CanvasHelper {
    private readonly _canvas: HTMLCanvasElement;
    public readonly _context: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement) {
        this._canvas = canvas;
        this._context = this._canvas.getContext('2d');
        this._canvas.width = window.innerWidth;
        this._canvas.height = window.innerHeight;
    }

    //function that clears the canvas
    public clear(minXCoor:number = 0, minYCoor: number = 0, maxXCoor: number = this._canvas.width, maxYCoor: number = this._canvas.height): void {
        this._context.clearRect(minXCoor, minYCoor, maxXCoor, maxYCoor)
    }

    //function that returns the width of the canvas
    public getWidth(): number {
        return this._canvas.width;
    }

    //function that returns the height of the canvas
    public getHeight(): number {
        return this._canvas.height;
    }

    //function that return the centerpoint of the canvas
    public getCenter(): {X: number, Y: number} {
        return {X: this.getWidth()/2, Y: this.getHeight()/2};
    }

    //function that writes text to the canvas
    public writeTextToCanvas(
        aText: string,
        aFontSize: number,
        aXpos: number,
        aYpos: number,
        aColor: string = "white",
        aAlignment: CanvasTextAlign = "center") {
            this._context.font = `${aFontSize}px galiver-sans`;
            this._context.fillStyle = aColor;
            this._context.textAlign = aAlignment;
            this._context.fillText(aText, aXpos, aYpos);
        }

    //function that places images on the canvas
    public writeImageToCanvas(
        aSrc: string,
        aXpos: number,
        aYpos: number,
        imgWidthDivide: number = 1,
        imgHeightDivide: number = 1
    ) {
        let image = new Image();
        image.src = aSrc;
        image.addEventListener('load', () => {
            this._context.drawImage(image,aXpos, aYpos, image.width/imgWidthDivide, image.height/imgHeightDivide);
        });
    }

    //function that places a button on the canvas
    public writeButtonToCanvas(aCaption: string, aXpos: number = -1, aYpos: number = -1) {
        let buttonImage = new Image();
        buttonImage.src = "./assets/images/UI/buttonBlue.png";
        // Make sure the image is loaded first otherwise nothing will draw.

        buttonImage.addEventListener('load', (): void => {
            let dx = aXpos;
            let dy = aYpos;
            // if x axis is not set, lets center the button horizontally
            if (dx < 0) dx = (this.getWidth() - buttonImage.width) / 2;
            // if y axis is not set, lets center the button vertically
            if (dy < 0) dy = this.getHeight() / 2 + buttonImage.height;

            // center the text based upon the font
            let fontX = dx + ((buttonImage.width + aCaption.length - 18) / 2); // - 1/2 fontsize + buttonBorder
            let fontY = dy + (buttonImage.height - 12); // - 1/2 fontsize + buttonBorder
            this._context.drawImage(buttonImage, dx, dy);
            this.writeTextToCanvas(aCaption, 20, fontX, fontY, '#000');

        });

    }
}
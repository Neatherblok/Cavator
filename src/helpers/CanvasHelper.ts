class CanvasHelper {
    private readonly _canvas: HTMLCanvasElement;
    private readonly _context: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement) {
        this._canvas = canvas;
        this._context = this._canvas.getContext('2d');
        this._canvas.width = window.innerWidth;
        this._canvas.height = window.innerHeight;
    }

    public clear(): void {
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height)
    }

    public getWidth(): number {
        return this._canvas.width;
    }

    public getHeight(): number {
        return this._canvas.height;
    }

    public getCenter(): {X: number, Y: number} {
        return {X: this.getWidth()/2, Y: this.getHeight()/2};
    }

    public writeTextToCanvas(
        aText: string,
        aFontSize: number,
        aXpos: number,
        aYpos: number,
        aColor: string = "white",
        aAlignment: CanvasTextAlign = "center") {
            this._context.font = `${aFontSize}px Minecraft`;
            this._context.fillStyle = aColor;
            this._context.textAlign = aAlignment;
            this._context.fillText(aText, aXpos, aYpos);
        }

    public writeImageToCanvas(
        aSrc: string,
        aXpos: number,
        aYpos: number
    ) {
        let image = new Image();
        image.addEventListener('load', () => {
            this._context.drawImage(image,aXpos, aYpos);
        });
        image.src = aSrc;
    }

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
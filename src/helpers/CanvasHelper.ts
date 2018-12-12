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
}
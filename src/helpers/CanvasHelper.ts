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
}
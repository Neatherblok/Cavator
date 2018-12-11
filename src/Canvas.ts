class Canvas {
    private readonly _canvas: HTMLCanvasElement;
    private readonly _context: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement) {
        this._canvas = canvas;
        this._context = this._canvas.getContext('2d');
        this._canvas.width = window.innerWidth;
        this._canvas.height = window.innerHeight;
        console.log("Canvas constructor active");
    }

    public clear(): void {
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height)
    }
}
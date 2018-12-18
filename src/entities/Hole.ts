class Hole {

    protected _xPos: number;
    protected _yPos: number;
    protected readonly _width: number;
    protected readonly _height: number;
    protected readonly _imageSrc: string;
    protected readonly _canvas: CanvasHelper;
    private _clicks: number;

    public constructor(
        canvas: HTMLCanvasElement,
        imageSource: string,
        xCoor: number,
        yCoor: number,
        width: number,
        height: number,
        clicks: number
    ){
        this._canvas = new CanvasHelper(canvas);
        this._imageSrc = imageSource;
        this._xPos = xCoor;
        this._yPos = yCoor;
        this._width = width;
        this._height = height;
        this._clicks = clicks;
    }

    public draw() {
        this._canvas.writeImageToCanvas(this._imageSrc, this._xPos, this._yPos);
    }

    public getX(): number {
        return this._xPos;
    }

    public getY(): number {
        return this._yPos
    }

    public getWidth(): number {
        return this._width;
    }

    public getHeight(): number {
        return this._height;
    }

    public getClicks(): number {
        return this._clicks;
    }

    public lowerClicks() {
        this._clicks--;
    }
}
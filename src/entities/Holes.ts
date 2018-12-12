class Holes {

    protected _xPos: number;
    protected _yPos: number;
    protected readonly _width: number;
    protected readonly _height: number;
    protected readonly _imageSrc: string;
    protected readonly _canvas: CanvasHelper;

    public constructor(
        canvas: HTMLCanvasElement,
        imageSource: string,
        xCoor: number,
        yCoor: number,
        width: number,
        height: number
    ){
        this._canvas = new CanvasHelper(canvas);
        this._imageSrc = imageSource;
        this._xPos = xCoor;
        this._yPos = yCoor;
        this._width = width;
        this._height = height;
    }

    public draw() {
        this._canvas.writeImageToCanvas(this._imageSrc, this._xPos, this._yPos);
    }

    public getX(): number {
        return this._xPos;
    }
        return this._yPos
    }

    public getWidth(): number {
        return this._width;
    }

    public getHeight(): number {
        return this._height;
    }
}
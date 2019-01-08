class Hole {

    protected _xPos: number;
    protected _yPos: number;
    protected readonly _width: number;
    protected readonly _height: number;
    protected readonly _imageSrc: string;
    protected readonly _canvas: CanvasHelper;
    private _clicks: number;
    private _itemOrJoker: number;

    public constructor(
        canvas: HTMLCanvasElement,
        imageSource: string,
        xCoor: number,
        yCoor: number,
        width: number,
        height: number,
        clicks: number,
        itemOrJoker: number,
    ){
        this._canvas = new CanvasHelper(canvas);
        this._imageSrc = imageSource;
        this._xPos = xCoor;
        this._yPos = yCoor;
        this._width = width;
        this._height = height;
        this._clicks = clicks;
        this._itemOrJoker = itemOrJoker;
    }

    //function that draws the holes on the screen
    public draw() {
        this._canvas.writeImageToCanvas(this._imageSrc, this._xPos, this._yPos);
    }

    //function that returns the most left X-position of the hole
    public getX(): number {
        return this._xPos;
    }

    //function that returns the most upper Y-position of the hole
    public getY(): number {
        return this._yPos
    }

    //function that returns the width of the hole
    public getWidth(): number {
        return this._width;
    }

    //function that returns the height of the hole
    public getHeight(): number {
        return this._height;
    }

    //function that return the amount of clicks left
    public getClicks(): number {
        return this._clicks;
    }

    //function that lowers the clicks that are left
    public lowerClicks() {
        this._clicks--;
    }

    public itemOrJokerSelector(){
        if(this._itemOrJoker == 14){
            return true;
        }
        else{
            return false;
        }
    }
}
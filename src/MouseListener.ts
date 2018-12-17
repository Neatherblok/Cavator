class MouseListener {
    private dTimer: number;
    protected readonly canvasElement: HTMLCanvasElement;
    protected readonly _canvas: CanvasHelper;
  
    constructor() {
      this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
      this._canvas = new CanvasHelper(this.canvasElement);
      this.init();
    }
  
    public init() {
      this.mouseHandlers();
    }
  
    private mouseHandlers() {
      document.addEventListener('mousemove', this.onMouseMove)
    }

    public eraScreenClick(eraNumber: number): {Xmin: number, Xmax: number, Ymin: number, Ymax: number}{
      if(eraNumber == 1){
        return {Xmin: 110, Xmax: 193, Ymin: this._canvas.getHeight()-127, Ymax: this._canvas.getHeight()-56}
      }
      else if(eraNumber == 2){
        return {Xmin: 252, Xmax: 335, Ymin: this._canvas.getHeight()-127, Ymax: this._canvas.getHeight()-56}
      }
      else if(eraNumber == 3){
        return {Xmin: 394, Xmax: 477, Ymin: this._canvas.getHeight()-127, Ymax: this._canvas.getHeight()-56}
      }
      else if(eraNumber == 4){
        return {Xmin: 540, Xmax: 623, Ymin: this._canvas.getHeight()-127, Ymax: this._canvas.getHeight()-56}
      }
      else if(eraNumber == 5){
        return {Xmin: 683, Xmax: 766, Ymin: this._canvas.getHeight()-127, Ymax: this._canvas.getHeight()-56}
      }
      else if(eraNumber == 6){
        return {Xmin: 825, Xmax: 908, Ymin: this._canvas.getHeight()-127, Ymax: this._canvas.getHeight()-56}
      }
      else if(eraNumber == 7){
        return {Xmin: 969, Xmax: 1052, Ymin: this._canvas.getHeight()-127, Ymax: this._canvas.getHeight()-56}
      }
      else if(eraNumber == 8){
        return {Xmin: 1113, Xmax: 1196, Ymin: this._canvas.getHeight()-127, Ymax: this._canvas.getHeight()-56}
      }
      else if(eraNumber == 9){
        return {Xmin: 1263, Xmax: 1346, Ymin: this._canvas.getHeight()-127, Ymax: this._canvas.getHeight()-56}
      }
      else if(eraNumber == 10){
        return {Xmin: 1413, Xmax: 1496, Ymin: this._canvas.getHeight()-127, Ymax: this._canvas.getHeight()-56}
      }
    }
  
    private onMouseMove = (event: MouseEvent) => {
      clearTimeout(this.dTimer);
      this.dTimer = setTimeout(() => {
        console.log(event.pageX, event.pageY)
      }, 500);
    }
  }
    
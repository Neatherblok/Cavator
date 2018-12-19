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
        return {Xmin: this._canvas.getWidth()*0.017, Xmax: this._canvas.getWidth()*0.017+102, Ymin: this._canvas.getHeight()-200, Ymax: this._canvas.getHeight()-83}
      }
      else if(eraNumber == 2){
        return {Xmin: this._canvas.getWidth()*0.117, Xmax: this._canvas.getWidth()*0.117+102, Ymin: this._canvas.getHeight()-200, Ymax: this._canvas.getHeight()-83}
      }
      else if(eraNumber == 3){
        return {Xmin: this._canvas.getWidth()*0.217, Xmax: this._canvas.getWidth()*0.217+102, Ymin: this._canvas.getHeight()-200, Ymax: this._canvas.getHeight()-83}
      }
      else if(eraNumber == 4){
        return {Xmin: this._canvas.getWidth()*0.317, Xmax: this._canvas.getWidth()*0.317+102, Ymin: this._canvas.getHeight()-200, Ymax: this._canvas.getHeight()-83}
      }
      else if(eraNumber == 5){
        return {Xmin: this._canvas.getWidth()*0.417, Xmax: this._canvas.getWidth()*0.417+102, Ymin: this._canvas.getHeight()-200, Ymax: this._canvas.getHeight()-83}
      }
      else if(eraNumber == 6){
        return {Xmin: this._canvas.getWidth()*0.517, Xmax: this._canvas.getWidth()*0.517+102, Ymin: this._canvas.getHeight()-200, Ymax: this._canvas.getHeight()-83}
      }
      else if(eraNumber == 7){
        return {Xmin: this._canvas.getWidth()*0.617, Xmax: this._canvas.getWidth()*0.617+102, Ymin: this._canvas.getHeight()-200, Ymax: this._canvas.getHeight()-83}
      }
      else if(eraNumber == 8){
        return {Xmin: this._canvas.getWidth()*0.717, Xmax: this._canvas.getWidth()*0.717+102, Ymin: this._canvas.getHeight()-200, Ymax: this._canvas.getHeight()-83}
      }
      else if(eraNumber == 9){
        return {Xmin: this._canvas.getWidth()*0.817, Xmax: this._canvas.getWidth()*0.817+102, Ymin: this._canvas.getHeight()-200, Ymax: this._canvas.getHeight()-83}
      }
      else if(eraNumber == 10){
        return {Xmin: this._canvas.getWidth()*0.917, Xmax: this._canvas.getWidth()*0.917+102, Ymin: this._canvas.getHeight()-200, Ymax: this._canvas.getHeight()-83}
      }
    }
  
    private onMouseMove = (event: MouseEvent) => {
      clearTimeout(this.dTimer);
      this.dTimer = setTimeout(() => {
        console.log(event.pageX, event.pageY)
      }, 500);
    }
  }
    
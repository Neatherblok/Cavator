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
  
      //function that activate a follow on the movement of the mouse
    private mouseHandlers() {
      document.addEventListener('mousemove', this.onMouseMove)
    }

      //function that defines every era area on canvas screen
    public eraScreenClick(eraNumber: number): {Xmin: number, Xmax: number, Ymin: number, Ymax: number}{
        //era 1
      if(eraNumber == 1){
        return {Xmin: this._canvas.getWidth()*0.017, Xmax: this._canvas.getWidth()*0.017+102, Ymin: this._canvas.getHeight()-180, Ymax: this._canvas.getHeight()-63}
      }
        //era 2
      else if(eraNumber == 2){
        return {Xmin: this._canvas.getWidth()*0.117, Xmax: this._canvas.getWidth()*0.117+102, Ymin: this._canvas.getHeight()-180, Ymax: this._canvas.getHeight()-63}
      }
        //era 3
      else if(eraNumber == 3){
        return {Xmin: this._canvas.getWidth()*0.217, Xmax: this._canvas.getWidth()*0.217+102, Ymin: this._canvas.getHeight()-180, Ymax: this._canvas.getHeight()-63}
      }
        //era 4
      else if(eraNumber == 4){
        return {Xmin: this._canvas.getWidth()*0.317, Xmax: this._canvas.getWidth()*0.317+102, Ymin: this._canvas.getHeight()-180, Ymax: this._canvas.getHeight()-63}
      }
        //era 5
      else if(eraNumber == 5){
        return {Xmin: this._canvas.getWidth()*0.417, Xmax: this._canvas.getWidth()*0.417+102, Ymin: this._canvas.getHeight()-180, Ymax: this._canvas.getHeight()-63}
      }
        //era 6
      else if(eraNumber == 6){
        return {Xmin: this._canvas.getWidth()*0.517, Xmax: this._canvas.getWidth()*0.517+102, Ymin: this._canvas.getHeight()-180, Ymax: this._canvas.getHeight()-63}
      }
        //era 7
      else if(eraNumber == 7){
        return {Xmin: this._canvas.getWidth()*0.617, Xmax: this._canvas.getWidth()*0.617+102, Ymin: this._canvas.getHeight()-180, Ymax: this._canvas.getHeight()-63}
      }
        //era 8
      else if(eraNumber == 8){
        return {Xmin: this._canvas.getWidth()*0.717, Xmax: this._canvas.getWidth()*0.717+102, Ymin: this._canvas.getHeight()-180, Ymax: this._canvas.getHeight()-63}
      }
        //era 9
      else if(eraNumber == 9){
        return {Xmin: this._canvas.getWidth()*0.817, Xmax: this._canvas.getWidth()*0.817+102, Ymin: this._canvas.getHeight()-180, Ymax: this._canvas.getHeight()-63}
      }
        //era 10
      else if(eraNumber == 10){
        return {Xmin: this._canvas.getWidth()*0.917, Xmax: this._canvas.getWidth()*0.917+102, Ymin: this._canvas.getHeight()-180, Ymax: this._canvas.getHeight()-63}
      }
    }
  
      //function that follows the movement of the mouse
    private onMouseMove = (event: MouseEvent) => {
      clearTimeout(this.dTimer);
      this.dTimer = setTimeout(() => {
      }, 500);
    }
  }
    
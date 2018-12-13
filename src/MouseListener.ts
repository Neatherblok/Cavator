class MouseListener {
    private dTimer: number;
  
    constructor() {
      this.init();
    }
  
    private init() {
      this.mouseHandlers();
    }
  
    private mouseHandlers() {
      document.addEventListener('mousemove', this.onMouseMove)
    }
  
    private onMouseMove = (event: MouseEvent) => {
      clearTimeout(this.dTimer);
      this.dTimer = setTimeout(() => {
        console.log(event.pageX, event.pageY)
      }, 500);
    }
  }
    
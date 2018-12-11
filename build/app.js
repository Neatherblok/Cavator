class Canvas {
    constructor(canvas) {
        this._canvas = canvas;
        this._context = this._canvas.getContext('2d');
        this._canvas.width = window.innerWidth;
        this._canvas.height = window.innerHeight;
        console.log("Canvas constructor active");
    }
    clear() {
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }
}
class Game {
    constructor() {
        this.draw = () => {
            this._canvas.clear();
        };
        this.canvasElement = document.getElementById('canvas');
        this._canvas = new Canvas(this.canvasElement);
    }
}
window.addEventListener('load', init);
function init() {
    const cavator = new Game();
    window.setInterval(cavator.draw, 500 / 30);
}
console.log("test");
//# sourceMappingURL=app.js.map
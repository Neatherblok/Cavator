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
    writeTextToCanvas(aText, aFontSize, aXpos, aYpos, aColor = "white", aAlignment = "center") {
        this._context.font = `${aFontSize}px Minecraft`;
        this._context.fillStyle = aColor;
        this._context.textAlign = aAlignment;
        this._context.fillText(aText, aXpos, aYpos);
    }
}
class Game {
    constructor() {
        this.draw = () => {
            this._canvas.clear();
            this._canvas.writeTextToCanvas(`Your score`, 50, 200, 200, "black", "center");
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
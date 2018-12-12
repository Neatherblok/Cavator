class Game {
    constructor() {
        this.screen = new Array(Startscreen, GameScreen, EraSelectionScreen);
        this.currentGameScreen = 0;
        this.draw = () => {
            this._canvas.clear();
            this.screen[this.currentGameScreen];
            console.log(Startscreen);
        };
        this.canvasElement = document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
    }
}
window.addEventListener('load', init);
function init() {
    const cavator = new Game();
    window.setInterval(cavator.draw, 1000 / 60);
}
class Holes {
    constructor(canvas, imageSource, xCoor, yCoor, width, height) {
        this._canvas = new CanvasHelper(canvas);
        this._imageSrc = imageSource;
        this._xPos = xCoor;
        this._yPos = yCoor;
        this._width = width;
        this._height = height;
    }
    draw() {
        this._canvas.writeImageToCanvas(this._imageSrc, this._xPos, this._yPos);
    }
    getX() {
        return this._xPos;
    }
    getY() {
        return this._yPos;
    }
    getWidth() {
        return this._width;
    }
    getHeight() {
        return this._height;
    }
}
class CanvasHelper {
    constructor(canvas) {
        this._canvas = canvas;
        this._context = this._canvas.getContext('2d');
        this._canvas.width = window.innerWidth;
        this._canvas.height = window.innerHeight;
    }
    clear() {
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }
    getWidth() {
        return this._canvas.width;
    }
    getHeight() {
        return this._canvas.height;
    }
    getCenter() {
        return { X: this.getWidth() / 2, Y: this.getHeight() / 2 };
    }
    writeTextToCanvas(aText, aFontSize, aXpos, aYpos, aColor = "white", aAlignment = "center") {
        this._context.font = `${aFontSize}px Minecraft`;
        this._context.fillStyle = aColor;
        this._context.textAlign = aAlignment;
        this._context.fillText(aText, aXpos, aYpos);
    }
    writeImageToCanvas(aSrc, aXpos, aYpos) {
        let image = new Image();
        image.addEventListener('load', () => {
            this._context.drawImage(image, aXpos, aYpos);
        });
        image.src = aSrc;
    }
}
class MathHelper {
    static randomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}
class EraSelectionScreen {
}
class GameScreen extends Game {
    constructor() {
        super();
        this.draw = () => {
            this.holes.draw();
        };
        this.holes = new Holes(this.canvasElement, "..\assets\images\hole1.png", 100, 100, 32, 32);
    }
}
class Startscreen extends Game {
    constructor() {
        super();
        this.draw = () => {
            this._canvas.writeTextToCanvas("Cavator", 30, this._canvas.getCenter().X, this._canvas.getCenter().Y, "black");
        };
    }
}
//# sourceMappingURL=app.js.map
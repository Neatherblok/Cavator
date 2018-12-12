class Game {
    constructor() {
        this.screen = new Array("this.Startscreen.draw()", "this.Gamescreen.draw()", "this.EraSelectionscreen.draw()");
        this.currentGameScreenNumber = 0;
        this.draw = () => {
            this._canvas.clear();
            let currentGameScreen = eval(this.screen[this.currentGameScreenNumber]);
            currentGameScreen;
        };
        this.Startscreen = new StartScreen();
        this.Gamescreen = new GameScreen();
        this.EraSelectionscreen = new EraSelectionScreen();
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
class Item {
    constructor() {
        this._itemList = new Array();
        this._itemList =
            [
                {
                    name: "Karel de Grote",
                    source: "../assets/img/items/karel_de_grote.png",
                    era: 3,
                    hint1: "Was eerst Koning der Franken, werd vervolgens keizer van het West-Romeinse Rijk",
                    hint2: "Zorgde voor de Karolingische renaissance"
                },
                {
                    name: "VOC munt",
                    source: "../assets/img/items/voc_munt.png",
                    era: 6,
                    hint1: "De VOC = Verenigde Oost-Indische Compagnie",
                    hint2: "Zorgde voor een financiële opbloei"
                },
                {
                    name: "Weverij",
                    source: "../assets/img/items/weverij.png",
                    era: 8,
                    hint1: "Het stoken van kolen zorgt voor de aandrijving",
                    hint2: "Soms werkten ook kinderen in de weverij"
                }
            ];
        console.log(this._itemList[1][name]);
    }
    getItem(itemNumber, property) {
        const item = this._itemList[itemNumber][property];
        console.log(item);
    }
}
;
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
    constructor() {
        this.draw = () => {
        };
    }
}
class GameScreen {
    constructor() {
        this.holes = new Array();
        this.draw = () => {
            for (let i = 0; i < this.holes.length; i++) {
                this.holes[i].draw();
            }
        };
        this.canvasElement = document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
        for (let index = 0; index < MathHelper.randomNumber(1, 6); index++) {
            this.holes.push(new Holes(this.canvasElement, "./assets/images/hole1.png", MathHelper.randomNumber(0, this._canvas.getWidth() - 200), MathHelper.randomNumber(0, this._canvas.getHeight() - 200), 130, 120));
        }
    }
}
class StartScreen {
    constructor() {
        this.draw = () => {
            this._canvas.writeTextToCanvas("Cavator", 100, this._canvas.getCenter().X, this._canvas.getCenter().Y - 200, "black");
        };
        this.canvasElement = document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
    }
}
//# sourceMappingURL=app.js.map
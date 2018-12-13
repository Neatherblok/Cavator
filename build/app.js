class Game {
    constructor() {
        this.screen = ["this.Startscreen.draw()", "this.Gamescreen.draw()", "this.EraSelectionscreen.draw()"];
        this.currentGameScreenNumber = 0;
        this.draw = () => {
            this._canvas.clear();
            let currentGameScreen = eval(this.screen[this.currentGameScreenNumber]);
            currentGameScreen;
        };
        this.nextScreen = (event) => {
            console.log(this.currentGameScreenNumber);
            if (this.currentGameScreenNumber == 1) {
                console.log("jaa");
                ++this.currentGameScreenNumber;
            }
            else if (this.currentGameScreenNumber == 0) {
                console.log(event.clientY);
                if (event.clientX >= (this._canvas.getCenter().X - 111) && event.clientX <= (this._canvas.getCenter().X + 111)
                    && event.clientY >= (this._canvas.getCenter().Y + 200) && event.clientY <= this._canvas.getCenter().Y + 239) {
                    ++this.currentGameScreenNumber;
                    this.Gamescreen.timer();
                }
            }
        };
        this.canvasElement = document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
        this.Startscreen = new StartScreen();
        this.Gamescreen = new GameScreen();
        this.EraSelectionscreen = new EraSelectionScreen();
        this.itemList = new ItemList;
    }
}
window.addEventListener('load', init);
function init() {
    const cavator = new Game();
    window.setInterval(cavator.draw, 1000 / 60);
    window.addEventListener("click", cavator.nextScreen);
}
class MouseListener {
    constructor() {
        this.onMouseMove = (event) => {
            clearTimeout(this.dTimer);
            this.dTimer = setTimeout(() => {
                console.log(event.pageX, event.pageY);
            }, 500);
        };
        this.init();
    }
    init() {
        this.mouseHandlers();
    }
    mouseHandlers() {
        document.addEventListener('mousemove', this.onMouseMove);
    }
}
class ItemList {
    constructor() {
        this._itemList = new Array();
        this._itemList =
            [
                {
                    name: "Karel de Grote",
                    source: "../assets/images/items/karel_de_grote.png",
                    era: 3,
                    hint1: "Was eerst Koning der Franken, werd vervolgens keizer van het West-Romeinse Rijk",
                    hint2: "Zorgde voor de Karolingische renaissance",
                    hint3: ""
                },
                {
                    name: "VOC munt",
                    source: "../assets/images/items/voc_munt.png",
                    era: 6,
                    hint1: "De VOC = Verenigde Oost-Indische Compagnie",
                    hint2: "Zorgde voor een financiële opbloei",
                    hint3: ""
                },
                {
                    name: "Weverij",
                    source: "../assets/images/items/weverij.png",
                    era: 8,
                    hint1: "Het stoken van kolen zorgt voor de aandrijving",
                    hint2: "Soms werkten ook kinderen in de weverij",
                    hint3: ""
                }
            ];
    }
    getItemProperty(itemNumber, property) {
        const item = this._itemList[itemNumber][property];
        console.log(item);
        return item;
    }
}
;
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
    writeButtonToCanvas(aCaption, aXpos = -1, aYpos = -1) {
        let buttonImage = new Image();
        buttonImage.src = "./assets/images/UI/buttonBlue.png";
        buttonImage.addEventListener('load', () => {
            let dx = aXpos;
            let dy = aYpos;
            if (dx < 0)
                dx = (this.getWidth() - buttonImage.width) / 2;
            if (dy < 0)
                dy = this.getHeight() / 2 + buttonImage.height;
            let fontX = dx + ((buttonImage.width + aCaption.length - 18) / 2);
            let fontY = dy + (buttonImage.height - 12);
            this._context.drawImage(buttonImage, dx, dy);
            this.writeTextToCanvas(aCaption, 20, fontX, fontY, '#000');
        });
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
        this.counter = 180;
        this.score = 0;
        this.draw = () => {
            for (let i = 0; i < this.holes.length; i++) {
                this.holes[i].draw();
            }
            this._canvas.writeTextToCanvas(`Time left: ${this.counter}`, 20, 100, 50);
            this._canvas.writeTextToCanvas(`Score: ${this.score}`, 20, 100, 75);
        };
        this.canvasElement = document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
        for (let index = 0; index < MathHelper.randomNumber(1, 6); index++) {
            this.holes.push(new Holes(this.canvasElement, "./assets/images/hole1.png", MathHelper.randomNumber(0, this._canvas.getWidth() - 200), MathHelper.randomNumber(0, this._canvas.getHeight() - 200), 130, 120));
        }
    }
    timer() {
        let intervalId = setInterval(() => {
            this.counter--;
            if (this.counter === 0)
                clearInterval(intervalId);
        }, 1000);
    }
}
class StartScreen {
    constructor() {
        this.draw = () => {
            this._canvas.writeImageToCanvas("./assets/images/Cavator_logo/CavatorLogo.png", this._canvas.getCenter().X - 200, this._canvas.getCenter().Y - 300);
            this._canvas.writeButtonToCanvas("Play", undefined, this._canvas.getCenter().Y + 200);
        };
        this.canvasElement = document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
    }
}
//# sourceMappingURL=app.js.map
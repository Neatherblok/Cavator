class Game {
    constructor() {
        this.screen = ["this.Startscreen.draw()", "this.Gamescreen.draw()", "this.EraSelectionscreen.draw()"];
        this.sounds = ['buttonHitSFX', 'digging1', 'digging2', 'digging3', 'digging4', 'digging5'];
        this.currentGameScreenNumber = 0;
        this.draw = () => {
            this._canvas.clear();
            let currentGameScreen = eval(this.screen[this.currentGameScreenNumber]);
            currentGameScreen;
        };
        this.nextScreen = (event) => {
            console.log(this.currentGameScreenNumber);
            if (this.currentGameScreenNumber == 2) {
                if (event.clientX >= this.MouseListener.eraScreenClick(this.EraSelectionscreen.randomItemNumber()).Xmin && event.clientX <= this.MouseListener.eraScreenClick(this.EraSelectionscreen.randomItemNumber()).Xmax
                    && event.clientY >= this.MouseListener.eraScreenClick(this.EraSelectionscreen.randomItemNumber()).Ymin && event.clientY <= this.MouseListener.eraScreenClick(this.EraSelectionscreen.randomItemNumber()).Ymax) {
                    this.Gamescreen.addScoreCounter();
                    this.currentGameScreenNumber = 1;
                    this.canvasElement.style.backgroundImage = "url(./assets/images/backgrounds/groundBackground.png)";
                    this.canvasElement.style.backgroundSize = "auto";
                    this.canvasElement.style.cursor = "url(./assets/images/cursor.png), auto";
                    let intervalId = setInterval(() => {
                        this.draw();
                        if (this.currentGameScreenNumber === 2)
                            clearInterval(intervalId);
                    }, 1000 / 60);
                }
            }
            else if (this.currentGameScreenNumber == 1) {
                for (let i = 0; i < this.Gamescreen.getHoles().length; i++) {
                    if (this.Gamescreen.getHoles()[i].getX() <= event.clientX && this.Gamescreen.getHoles()[i].getX() + 128 >= event.clientX
                        && this.Gamescreen.getHoles()[i].getY() <= event.clientY && this.Gamescreen.getHoles()[i].getY() + 110 >= event.clientY) {
                        const randomDigSound = MathHelper.randomNumber(1, this.sounds.length - 1);
                        let audioLink = `./assets/sounds/sfx/diggingSFX/${this.sounds[randomDigSound]}.mp3`;
                        let audio = new Audio(audioLink);
                        audio.play();
                        this.currentGameScreenNumber = 2;
                        this.canvasElement.style.backgroundImage = "url(./assets/images/backgrounds/tableBackgroundConcept.jpg)";
                        this.canvasElement.style.backgroundSize = "100% 100%";
                        this.canvasElement.style.cursor = "auto";
                        this.Gamescreen.regenerateHole(i);
                    }
                }
            }
            else if (this.currentGameScreenNumber == 0) {
                if (event.clientX >= (this._canvas.getCenter().X - 111) && event.clientX <= (this._canvas.getCenter().X + 111)
                    && event.clientY >= (this._canvas.getCenter().Y + 200) && event.clientY <= this._canvas.getCenter().Y + 239) {
                    let audioLink = "./assets/sounds/sfx/buttonHitSFX.mp3";
                    let audio = new Audio(audioLink);
                    audio.play();
                    this.currentGameScreenNumber = 1;
                    this.canvasElement.style.cursor = "url(./assets/images/cursor.png), auto";
                    let intervalId = setInterval(() => {
                        this.draw();
                        if (this.currentGameScreenNumber === 2)
                            clearInterval(intervalId);
                    }, 1000 / 60);
                    this.Gamescreen.timer();
                    console.log(this.Gamescreen.getHoles());
                }
            }
        };
        this.canvasElement = document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
        this.Startscreen = new StartScreen();
        this.Gamescreen = new GameScreen("./assets/images/hole1.png");
        this.EraSelectionscreen = new EraSelectionScreen();
        this.MouseListener = new MouseListener();
        this.itemList = new Item;
    }
}
window.addEventListener('load', init);
function init() {
    const cavator = new Game();
    cavator.draw();
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
        this.canvasElement = document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
        this.init();
    }
    init() {
        this.mouseHandlers();
    }
    mouseHandlers() {
        document.addEventListener('mousemove', this.onMouseMove);
    }
    eraScreenClick(eraNumber) {
        if (eraNumber == 1) {
            return { Xmin: 110, Xmax: 192, Ymin: this._canvas.getHeight() - 126, Ymax: this._canvas.getHeight() - 55 };
        }
        else if (eraNumber == 2) {
            return { Xmin: 110, Xmax: 192, Ymin: this._canvas.getHeight() - 126, Ymax: this._canvas.getHeight() - 55 };
        }
        else if (eraNumber == 3) {
            return { Xmin: 110, Xmax: 192, Ymin: this._canvas.getHeight() - 126, Ymax: this._canvas.getHeight() - 55 };
        }
        else if (eraNumber == 4) {
            return { Xmin: 110, Xmax: 192, Ymin: this._canvas.getHeight() - 126, Ymax: this._canvas.getHeight() - 55 };
        }
        else if (eraNumber == 5) {
            return { Xmin: 110, Xmax: 192, Ymin: this._canvas.getHeight() - 126, Ymax: this._canvas.getHeight() - 55 };
        }
        else if (eraNumber == 6) {
            return { Xmin: 110, Xmax: 192, Ymin: this._canvas.getHeight() - 126, Ymax: this._canvas.getHeight() - 55 };
        }
        else if (eraNumber == 7) {
            return { Xmin: 110, Xmax: 192, Ymin: this._canvas.getHeight() - 126, Ymax: this._canvas.getHeight() - 55 };
        }
        else if (eraNumber == 8) {
            return { Xmin: 110, Xmax: 192, Ymin: this._canvas.getHeight() - 126, Ymax: this._canvas.getHeight() - 55 };
        }
        else if (eraNumber == 9) {
            return { Xmin: 110, Xmax: 192, Ymin: this._canvas.getHeight() - 126, Ymax: this._canvas.getHeight() - 55 };
        }
        else if (eraNumber == 10) {
            return { Xmin: 110, Xmax: 192, Ymin: this._canvas.getHeight() - 126, Ymax: this._canvas.getHeight() - 55 };
        }
    }
}
class Item {
    constructor() {
        this._itemList =
            [
                {
                    name: "Speerpunt",
                    source: "./assets/images/items/1speerpunt.png",
                    era: 1,
                    hint1: "Gevonden in midden Frankrijk, 1989.",
                    hint2: "Gebruikt voor de jacht.",
                    hint3: "Speren zijn de oudst gevonden jachtwapens van de mens."
                },
                {
                    name: "Ötzi de ijsmummie",
                    source: "./assets/images/items/1ijsmummie.png",
                    era: 1,
                    hint1: "Gevonden in de Italiaanse alpen, 1991.",
                    hint2: "De man was gevonden in het ijs.",
                    hint3: "Hij droeg dierenvellen kleding en een koperen bijl."
                },
                {
                    name: "Colosseum",
                    source: "./assets/images/items/2colosseum.png",
                    era: 2,
                    hint1: "Het gebouw staat in Rome, Italië.",
                    hint2: "Het werd gebruikt voor gladiatorengevechten.",
                    hint3: "Het werd officieel geopend door keizer Titus."
                },
                {
                    name: "De helm van Deurne",
                    source: "./assets/images/items/2helm_van_deurne.png",
                    era: 2,
                    hint1: "Deze helm was van een Romeins officier",
                    hint2: "De officier zat bij ruiterafdeling STABLESIA VI.",
                    hint3: "De helm is verguld zilveren versierd."
                },
                {
                    name: "Zwaard van Sint Cosmas en Damianus",
                    source: "./assets/images/items/3zwaard_sint_cosmas.png",
                    era: 3,
                    hint1: "Zij zouden allebei geneesheren zijn geweest.",
                    hint2: "Ze boden kosteloos hun geneeskundige diensten aan.",
                    hint3: "Het christendom ziet hen als de patroonheiligen van beroepen uit de medische sector."
                },
                {
                    name: "Karel de Grote",
                    source: "./assets/images/items/3karel_de_grote.png",
                    era: 3,
                    hint1: "Was eerst Koning der Franken, werd vervolgens keizer van het Heilige Roomse Rijk.",
                    hint2: "Zorgde voor de Karolingische renaissance.",
                    hint3: "Onder hem kregen kunst, literatuur en architectuur een ongewone opleving."
                },
                {
                    name: "Penning uit Holland",
                    source: "./assets/images/items/4penning.png",
                    era: 4,
                    hint1: "Penning (munt) met beeltenis van graaf Dirk VII van Holland",
                    hint2: "Het graafschap van Holland was deel van het Heilige Roomse Rijk.",
                    hint3: "Omdat Dirk geen zonen had, maakte hij Holland erfelijk voor vrouwen."
                },
                {
                    name: "Rotterdams strijkglas",
                    source: "./assets/images/items/4strijkglas.png",
                    era: 4,
                    hint1: "Glas gevonden in Rotterdam, 2017.",
                    hint2: "Het was ooit eigendom van een rijke boer.",
                    hint3: "Het strijkglas is een voorganger van het moderne strijkijzer."
                },
                {
                    name: "Mona Lisa",
                    source: "./assets/images/items/5mona_lisa.png",
                    era: 5,
                    hint1: "Geschilderd door Leonardo Da Vinci.",
                    hint2: "Gemaakt tijdens de Renaissance.",
                    hint3: "Er zijn talloze kopieën van gemaakt."
                },
                {
                    name: "Tandenstoker",
                    source: "./assets/images/items/5tandenstoker.png",
                    era: 5,
                    hint1: "De tandenstoker was een modieus accessoire.",
                    hint2: "Het heeft de vorm van een roofvogelklauw.",
                    hint3: "Ze werden veel gebruikt door reizigers."
                },
                {
                    name: "Willem van Oranje",
                    source: "./assets/images/items/5willem_van_oranje.png",
                    era: 5,
                    hint1: "Dit is Willem van Oranje",
                    hint2: "Hij is vader des vaderlands",
                    hint3: ""
                },
                {
                    name: "De Nachtwacht",
                    source: "./assets/images/items/6nachtwacht.png",
                    era: 6,
                    hint1: "Gemaakt door Rembrandt van Rijn",
                    hint2: "Hangt op dit moment in het Rijksmuseum",
                    hint3: "Bij het inkorten verdween de afbeelding van twee schutters."
                },
                {
                    name: "VOC munt",
                    source: "./assets/images/items/6voc_munt.png",
                    era: 6,
                    hint1: "De VOC = Verenigde Oost-Indische Compagnie.",
                    hint2: "Zorgde voor een financiële opbloei.",
                    hint3: "De VOC was de eerste multinational ter wereld."
                },
                {
                    name: "Trekschuit",
                    source: "./assets/images/items/7trekschuit.png",
                    era: 7,
                    hint1: "Binnenvaartschip dat werd getrokken door paarden aan de oever.",
                    hint2: "De schepen werden gebruikt voor zowel vracht als personen vervoer.",
                    hint3: "Het was een van de voorlopers van modern openbaar vervoer."
                },
                {
                    name: "Napoleon Bonaparte",
                    source: "./assets/images/items/7napoleon.png",
                    era: 7,
                    hint1: "Het lukte hem een groot deel van Europa onder Frans gezag te brengen.",
                    hint2: "Hij was een befaamd militair mastermind.",
                    hint3: "Zijn broer Lodewijk werd koning van Holland."
                },
                {
                    name: "Hoge Bi",
                    source: "./assets/images/items/8hoge_bi.png",
                    era: 8,
                    hint1: "Wordt ook wel vélocipède genoemd.",
                    hint2: "Werd gebruikt in de late Victoriaanse tijd.",
                    hint3: "Deze fiets werd op de Wereldtentoonstelling van Parijs gepresenteerd."
                },
                {
                    name: "Weverij",
                    source: "./assets/images/items/8weverij.png",
                    era: 8,
                    hint1: "Het stoken van kolen zorgt voor de aandrijving",
                    hint2: "Soms werkten ook kinderen in de weverij",
                    hint3: "Later kwamen er sociale voorzieningen voor de fabrieksarbeiders."
                },
                {
                    name: "Vliegtuigbom",
                    source: "./assets/images/items/9vliegtuigbom.png",
                    era: 9,
                    hint1: "Overblijfsel van een oorlog.",
                    hint2: "Gevonden in Vlissingen.",
                    hint3: "Vliegtuigbommen werden veel gebruikt in een Blitzkrieg."
                },
                {
                    name: "Elektrische fiets",
                    source: "./assets/images/items/9elektrische_fiets.png",
                    era: 9,
                    hint1: "Deze fiets is ontwikkeld door Philips.",
                    hint2: "Door de benzineschaarste leefde de belangstelling op.",
                    hint3: "In Amsterdam kwam een elektrische fietstaxi in gebruik."
                },
                {
                    name: "Jodenster",
                    source: "./assets/images/items/9jodenster.png",
                    era: 9,
                    hint1: "Een kenteken dat Joden moesten dragen.",
                    hint2: "Dit gelde alleen in bepaalde gedeeltes van Europa voor een bepaalde periode.",
                    hint3: "Alle Joden vanaf 6 jaar oud moesten de ster dragen."
                },
                {
                    name: "Handboek televisie",
                    source: "./assets/images/items/10handboek_televisie.png",
                    era: 10,
                    hint1: "Boekje ter informatie over hoe een televisie werkt.",
                    hint2: "De eerste landelijke uitzending was vanuit studio Irene in Hilversum.",
                    hint3: "De eerste televisiezender heette Nederland 1."
                },
                {
                    name: "Game Boy",
                    source: "./assets/images/items/10game_boy.png",
                    era: 10,
                    hint1: "Uitgebracht door Nintendo in Japan.",
                    hint2: "Bekend van spelletjes als Super Mario en Pokémon.",
                    hint3: "De spelletjes stonden op cassettes."
                }
            ];
    }
    getItemProperty(itemNumber, property) {
        return this._itemList[itemNumber][property];
    }
    getItemArrayLength() {
        return this._itemList.length;
    }
}
;
class Hole {
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
    clear(minXCoor = 0, minYCoor = 0, maxXCoor = this._canvas.width, maxYCoor = this._canvas.height) {
        this._context.clearRect(minXCoor, minYCoor, maxXCoor, maxYCoor);
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
    loopImage(image, aXpos, aYpos) {
        this._context.drawImage(image, aXpos, aYpos);
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
            this.randomItemPicker();
            this._canvas.writeImageToCanvas(this.itemList.getItemProperty(this.pickedItem, "source"), this._canvas.getCenter().X, this._canvas.getCenter().Y - 200);
        };
        this.canvasElement = document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
        this.itemList = new Item;
    }
    randomItemPicker() {
        this.pickedItem = MathHelper.randomNumber(0, this.itemList.getItemArrayLength());
    }
    randomItemNumber() {
        return this.itemList.getItemProperty(this.pickedItem, "era");
    }
}
class GameScreen {
    constructor(imageUrl) {
        this.hole = new Array();
        this.counter = 180;
        this.score = 0;
        this.draw = () => {
            for (let i = 0; i < this.hole.length; i++) {
                this.hole[i].draw();
            }
            this._canvas.writeTextToCanvas(`Time left: ${this.counter}`, 20, 100, 50);
            this._canvas.writeTextToCanvas(`Score: ${this.score}`, 20, 100, 75);
        };
        this.imageUrl = imageUrl;
        this.canvasElement = document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
        for (let index = 0; index < MathHelper.randomNumber(3, 6); index++) {
            this.hole.push(new Hole(this.canvasElement, this.imageUrl, MathHelper.randomNumber(0, this._canvas.getWidth() - 200), MathHelper.randomNumber(0, this._canvas.getHeight() - 200), 130, 120));
        }
    }
    timer() {
        let intervalId = setInterval(() => {
            this.counter--;
            if (this.counter === 0) {
                clearInterval(intervalId);
            }
        }, 1000);
    }
    getHoles() {
        return this.hole;
    }
    regenerateHole(numberOfHole) {
        this.hole.splice(numberOfHole, 1);
        this.hole.push(new Hole(this.canvasElement, this.imageUrl, MathHelper.randomNumber(0, this._canvas.getWidth() - 200), MathHelper.randomNumber(0, this._canvas.getHeight() - 200), 130, 120));
    }
    addScoreCounter() {
        this.score++;
    }
}
class HighscoreScreen {
    constructor() {
        this.draw = () => {
        };
        this.canvasElement = document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
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
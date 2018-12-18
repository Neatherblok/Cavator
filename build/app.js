class Game {
    constructor() {
        this.screen = ["this.Startscreen.draw()", "this.Gamescreen.draw()", "this.EraSelectionscreen.draw()", "this.HighscoreScreen.draw(this.Gamescreen.getScore())"];
        this.sounds = ['buttonHitSFX', 'digging1', 'digging2', 'digging3', 'digging4', 'digging5'];
        this.currentGameScreenNumber = 0;
        this.draw = () => {
            this._canvas.clear();
            eval(this.screen[this.currentGameScreenNumber]);
        };
        this.nextScreen = (event) => {
            console.log(this.currentGameScreenNumber);
            if (this.currentGameScreenNumber == 2) {
                if (event.clientX >= this.MouseListener.eraScreenClick(this.EraSelectionscreen.randomItemNumber()).Xmin && event.clientX <= this.MouseListener.eraScreenClick(this.EraSelectionscreen.randomItemNumber()).Xmax
                    && event.clientY >= this.MouseListener.eraScreenClick(this.EraSelectionscreen.randomItemNumber()).Ymin && event.clientY <= this.MouseListener.eraScreenClick(this.EraSelectionscreen.randomItemNumber()).Ymax) {
                    this.Gamescreen.addScoreCounter();
                    this.currentGameScreenNumber = 1;
                    let audioLink = `./assets/sounds/sfx/checkSFX/rightSFX.mp3`;
                    let audio = new Audio(audioLink);
                    audio.play();
                    this.canvasElement.style.backgroundImage = "url(./assets/images/backgrounds/groundBackground.png)";
                    this.canvasElement.style.backgroundSize = "auto";
                    this.canvasElement.style.cursor = "url(./assets/images/cursor.png), auto";
                    let intervalId = setInterval(() => {
                        if (this.currentGameScreenNumber === 2)
                            clearInterval(intervalId);
                        if (this.Gamescreen.getCounter() === 0) {
                            clearInterval(intervalId);
                            this.HighscoreScreen = new HighscoreScreen();
                            this.currentGameScreenNumber = 3;
                            this.canvasElement.style.cursor = "url(./assets/images/FeatherCursor2.png), auto";
                        }
                        this.draw();
                    }, 1000 / 60);
                }
                else if (event.clientX >= this.MouseListener.eraScreenClick(1).Xmin && event.clientX <= this.MouseListener.eraScreenClick(1).Xmax
                    && event.clientY >= this.MouseListener.eraScreenClick(1).Ymin && event.clientY <= this.MouseListener.eraScreenClick(1).Ymax
                    || event.clientX >= this.MouseListener.eraScreenClick(2).Xmin && event.clientX <= this.MouseListener.eraScreenClick(2).Xmax
                        && event.clientY >= this.MouseListener.eraScreenClick(2).Ymin && event.clientY <= this.MouseListener.eraScreenClick(2).Ymax
                    || event.clientX >= this.MouseListener.eraScreenClick(3).Xmin && event.clientX <= this.MouseListener.eraScreenClick(3).Xmax
                        && event.clientY >= this.MouseListener.eraScreenClick(3).Ymin && event.clientY <= this.MouseListener.eraScreenClick(3).Ymax
                    || event.clientX >= this.MouseListener.eraScreenClick(4).Xmin && event.clientX <= this.MouseListener.eraScreenClick(4).Xmax
                        && event.clientY >= this.MouseListener.eraScreenClick(4).Ymin && event.clientY <= this.MouseListener.eraScreenClick(4).Ymax
                    || event.clientX >= this.MouseListener.eraScreenClick(5).Xmin && event.clientX <= this.MouseListener.eraScreenClick(5).Xmax
                        && event.clientY >= this.MouseListener.eraScreenClick(5).Ymin && event.clientY <= this.MouseListener.eraScreenClick(5).Ymax
                    || event.clientX >= this.MouseListener.eraScreenClick(6).Xmin && event.clientX <= this.MouseListener.eraScreenClick(6).Xmax
                        && event.clientY >= this.MouseListener.eraScreenClick(6).Ymin && event.clientY <= this.MouseListener.eraScreenClick(6).Ymax
                    || event.clientX >= this.MouseListener.eraScreenClick(7).Xmin && event.clientX <= this.MouseListener.eraScreenClick(7).Xmax
                        && event.clientY >= this.MouseListener.eraScreenClick(7).Ymin && event.clientY <= this.MouseListener.eraScreenClick(7).Ymax
                    || event.clientX >= this.MouseListener.eraScreenClick(8).Xmin && event.clientX <= this.MouseListener.eraScreenClick(8).Xmax
                        && event.clientY >= this.MouseListener.eraScreenClick(8).Ymin && event.clientY <= this.MouseListener.eraScreenClick(8).Ymax
                    || event.clientX >= this.MouseListener.eraScreenClick(9).Xmin && event.clientX <= this.MouseListener.eraScreenClick(9).Xmax
                        && event.clientY >= this.MouseListener.eraScreenClick(9).Ymin && event.clientY <= this.MouseListener.eraScreenClick(9).Ymax
                    || event.clientX >= this.MouseListener.eraScreenClick(10).Xmin && event.clientX <= this.MouseListener.eraScreenClick(10).Xmax
                        && event.clientY >= this.MouseListener.eraScreenClick(10).Ymin && event.clientY <= this.MouseListener.eraScreenClick(10).Ymax
                        && !(event.clientX >= this.MouseListener.eraScreenClick(this.EraSelectionscreen.randomItemNumber()).Xmin && event.clientX <= this.MouseListener.eraScreenClick(this.EraSelectionscreen.randomItemNumber()).Xmax
                            && event.clientY >= this.MouseListener.eraScreenClick(this.EraSelectionscreen.randomItemNumber()).Ymin && event.clientY <= this.MouseListener.eraScreenClick(this.EraSelectionscreen.randomItemNumber()).Ymax)) {
                    this.currentGameScreenNumber = 1;
                    let audioLink = `./assets/sounds/sfx/checkSFX/wrongSFX.mp3`;
                    let audio = new Audio(audioLink);
                    audio.play();
                    this.canvasElement.style.backgroundImage = "url(./assets/images/backgrounds/groundBackground.png)";
                    this.canvasElement.style.backgroundSize = "auto";
                    this.canvasElement.style.cursor = "url(./assets/images/cursor.png), auto";
                    let intervalId = setInterval(() => {
                        if (this.currentGameScreenNumber === 2)
                            clearInterval(intervalId);
                        if (this.Gamescreen.getCounter() === 0) {
                            clearInterval(intervalId);
                            this.HighscoreScreen = new HighscoreScreen();
                            this.currentGameScreenNumber = 3;
                            this.canvasElement.style.cursor = "url(./assets/images/FeatherCursor2.png), auto";
                        }
                        this.draw();
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
                        if (this.Gamescreen.getHoles()[i].getClicks() == 0) {
                            console.log('bigger than 0');
                            this.currentGameScreenNumber = 2;
                            this.canvasElement.style.backgroundImage = "url(./assets/images/backgrounds/tableBackgroundConcept.jpg)";
                            this.canvasElement.style.backgroundSize = "100% 100%";
                            this.canvasElement.style.cursor = "url(./assets/images/FeatherCursor2.png), auto";
                            this.Gamescreen.regenerateHole(i);
                        }
                        else {
                            this.Gamescreen.getHoles()[i].lowerClicks();
                        }
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
                    let intervalId = setInterval(() => {
                        if (this.currentGameScreenNumber === 2)
                            clearInterval(intervalId);
                        if (this.Gamescreen.getCounter() === 0) {
                            clearInterval(intervalId);
                            this.HighscoreScreen = new HighscoreScreen();
                            this.currentGameScreenNumber = 3;
                            this.canvasElement.style.cursor = "url(./assets/images/FeatherCursor2.png), auto";
                        }
                        this.draw();
                    }, 1000 / 60);
                    this.canvasElement.style.cursor = "url(./assets/images/cursor.png), auto";
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
        this.itemList = new Item();
        this._gameHelper = new GameHelper();
        let audioLink = `./assets/sounds/music/dutch_street_organ.wav`;
        let backgroundMusic = new Audio(audioLink);
        backgroundMusic.loop = true;
        backgroundMusic.play();
    }
}
window.addEventListener('load', init);
function init() {
    const cavator = new Game();
    cavator.draw();
    window.addEventListener("click", cavator.nextScreen);
    cavator.canvasElement.style.cursor = "url(./assets/images/FeatherCursor2.png), auto";
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
            return { Xmin: 110, Xmax: 193, Ymin: this._canvas.getHeight() - 127, Ymax: this._canvas.getHeight() - 56 };
        }
        else if (eraNumber == 2) {
            return { Xmin: 252, Xmax: 335, Ymin: this._canvas.getHeight() - 127, Ymax: this._canvas.getHeight() - 56 };
        }
        else if (eraNumber == 3) {
            return { Xmin: 394, Xmax: 477, Ymin: this._canvas.getHeight() - 127, Ymax: this._canvas.getHeight() - 56 };
        }
        else if (eraNumber == 4) {
            return { Xmin: 540, Xmax: 623, Ymin: this._canvas.getHeight() - 127, Ymax: this._canvas.getHeight() - 56 };
        }
        else if (eraNumber == 5) {
            return { Xmin: 683, Xmax: 766, Ymin: this._canvas.getHeight() - 127, Ymax: this._canvas.getHeight() - 56 };
        }
        else if (eraNumber == 6) {
            return { Xmin: 825, Xmax: 908, Ymin: this._canvas.getHeight() - 127, Ymax: this._canvas.getHeight() - 56 };
        }
        else if (eraNumber == 7) {
            return { Xmin: 969, Xmax: 1052, Ymin: this._canvas.getHeight() - 127, Ymax: this._canvas.getHeight() - 56 };
        }
        else if (eraNumber == 8) {
            return { Xmin: 1113, Xmax: 1196, Ymin: this._canvas.getHeight() - 127, Ymax: this._canvas.getHeight() - 56 };
        }
        else if (eraNumber == 9) {
            return { Xmin: 1263, Xmax: 1346, Ymin: this._canvas.getHeight() - 127, Ymax: this._canvas.getHeight() - 56 };
        }
        else if (eraNumber == 10) {
            return { Xmin: 1413, Xmax: 1496, Ymin: this._canvas.getHeight() - 127, Ymax: this._canvas.getHeight() - 56 };
        }
    }
}
class Item {
    constructor() {
        this._itemList =
            [
                {
                    name: "een speerpunt",
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
                    name: "het Colosseum",
                    source: "./assets/images/items/2colosseum.png",
                    era: 2,
                    hint1: "Het gebouw staat in Rome, Italië.",
                    hint2: "Het werd gebruikt voor gladiatorengevechten.",
                    hint3: "Het werd officieel geopend door keizer Titus."
                },
                {
                    name: "de helm van Deurne",
                    source: "./assets/images/items/2helm_van_deurne.png",
                    era: 2,
                    hint1: "Deze helm was van een Romeins officier",
                    hint2: "De officier zat bij ruiterafdeling STABLESIA VI.",
                    hint3: "De helm is verguld zilveren versierd."
                },
                {
                    name: "het zwaard van Sint Cosmas en Damianus",
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
                    name: "een penning uit Holland",
                    source: "./assets/images/items/4penning.png",
                    era: 4,
                    hint1: "Penning (munt) met beeltenis van graaf Dirk VII van Holland",
                    hint2: "Het graafschap van Holland was deel van het Heilige Roomse Rijk.",
                    hint3: "Omdat Dirk geen zonen had, maakte hij Holland erfelijk voor vrouwen."
                },
                {
                    name: "een Rotterdams strijkglas",
                    source: "./assets/images/items/4strijkglas.png",
                    era: 4,
                    hint1: "Glas gevonden in Rotterdam, 2017.",
                    hint2: "Het was ooit eigendom van een rijke boer.",
                    hint3: "Het strijkglas is een voorganger van het moderne strijkijzer."
                },
                {
                    name: "de Mona Lisa",
                    source: "./assets/images/items/5mona_lisa.png",
                    era: 5,
                    hint1: "Geschilderd door Leonardo Da Vinci.",
                    hint2: "Gemaakt tijdens de Renaissance.",
                    hint3: "Er zijn talloze kopieën van gemaakt."
                },
                {
                    name: "een tandenstoker",
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
                    name: "de Nachtwacht",
                    source: "./assets/images/items/6nachtwacht.png",
                    era: 6,
                    hint1: "Gemaakt door Rembrandt van Rijn",
                    hint2: "Hangt op dit moment in het Rijksmuseum",
                    hint3: "Bij het inkorten verdween de afbeelding van twee schutters."
                },
                {
                    name: "een VOC munt",
                    source: "./assets/images/items/6voc_munt.png",
                    era: 6,
                    hint1: "De VOC = Verenigde Oost-Indische Compagnie.",
                    hint2: "Zorgde voor een financiële opbloei.",
                    hint3: "De VOC was de eerste multinational ter wereld."
                },
                {
                    name: "een Trekschuit",
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
                    name: "een hoge Bi",
                    source: "./assets/images/items/8hoge_bi.png",
                    era: 8,
                    hint1: "Wordt ook wel vélocipède genoemd.",
                    hint2: "Werd gebruikt in de late Victoriaanse tijd.",
                    hint3: "Deze fiets werd op de Wereldtentoonstelling van Parijs gepresenteerd."
                },
                {
                    name: "een weverij",
                    source: "./assets/images/items/8weverij.png",
                    era: 8,
                    hint1: "Het stoken van kolen zorgt voor de aandrijving",
                    hint2: "Soms werkten ook kinderen in de weverij",
                    hint3: "Later kwamen er sociale voorzieningen voor de fabrieksarbeiders."
                },
                {
                    name: "een vliegtuigbom",
                    source: "./assets/images/items/9vliegtuigbom.png",
                    era: 9,
                    hint1: "Overblijfsel van een oorlog.",
                    hint2: "Gevonden in Vlissingen.",
                    hint3: "Vliegtuigbommen werden veel gebruikt in een Blitzkrieg."
                },
                {
                    name: "een elektrische fiets",
                    source: "./assets/images/items/9elektrische_fiets.png",
                    era: 9,
                    hint1: "Deze fiets is ontwikkeld door Philips.",
                    hint2: "Door de benzineschaarste leefde de belangstelling op.",
                    hint3: "In Amsterdam kwam een elektrische fietstaxi in gebruik."
                },
                {
                    name: "een jodenster",
                    source: "./assets/images/items/9jodenster.png",
                    era: 9,
                    hint1: "Een kenteken dat Joden moesten dragen.",
                    hint2: "Dit gelde alleen in bepaalde gedeeltes van Europa voor een bepaalde periode.",
                    hint3: "Alle Joden vanaf 6 jaar oud moesten de ster dragen."
                },
                {
                    name: "een televisie handboek",
                    source: "./assets/images/items/10handboek_televisie.png",
                    era: 10,
                    hint1: "Boekje ter informatie over hoe een televisie werkt.",
                    hint2: "De eerste landelijke uitzending was vanuit studio Irene in Hilversum.",
                    hint3: "De eerste televisiezender heette Nederland 1."
                },
                {
                    name: "een Game Boy",
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
    constructor(canvas, imageSource, xCoor, yCoor, width, height, clicks) {
        this._canvas = new CanvasHelper(canvas);
        this._imageSrc = imageSource;
        this._xPos = xCoor;
        this._yPos = yCoor;
        this._width = width;
        this._height = height;
        this._clicks = clicks;
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
    getClicks() {
        return this._clicks;
    }
    lowerClicks() {
        this._clicks--;
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
class GameHelper {
    constructor() {
        this.counter = 180;
        this.score = 0;
        this.canvasElement = document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
    }
    timer() {
        let intervalId = setInterval(() => {
            --this.counter;
            if (this.counter === 0) {
                clearInterval(intervalId);
            }
        }, 1000);
    }
    addScore() {
        this.score++;
    }
    getScore() {
        return this.score;
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
            this._canvas.writeTextToCanvas(`Je hebt ${this.itemList.getItemProperty(this.pickedItem, "name")} gevonden!`, 45, this._canvas.getCenter().X, 100, "yellow");
            this._canvas.writeImageToCanvas(this.itemList.getItemProperty(this.pickedItem, "source"), this._canvas.getCenter().X - 150, this._canvas.getCenter().Y - 200);
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
        this.counter = 150;
        this.score = 0;
        this.draw = () => {
            for (let i = 0; i < this.hole.length; i++) {
                this.hole[i].draw();
            }
            this._canvas.writeTextToCanvas(`Tijd over: ${this.counter} seconden`, 20, 175, 50);
            console.log(this.counter);
            this._canvas.writeTextToCanvas(`Score: ${this.score}`, 20, 100, 75);
        };
        this.imageUrl = imageUrl;
        this.canvasElement = document.getElementById('canvas');
        this._gameHelper = new GameHelper();
        this._canvas = new CanvasHelper(this.canvasElement);
        for (let index = 0; index < MathHelper.randomNumber(3, 6); index++) {
            this.hole.push(new Hole(this.canvasElement, this.imageUrl, MathHelper.randomNumber(0, this._canvas.getWidth() - 200), MathHelper.randomNumber(0, this._canvas.getHeight() - 200), 130, 120, MathHelper.randomNumber(0, 2)));
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
    getCounter() {
        return this.counter;
    }
    addScoreCounter() {
        this.score++;
    }
    getScore() {
        return this.score;
    }
    regenerateHole(numberOfHole) {
        this.hole.splice(numberOfHole, 1);
        this.hole.push(new Hole(this.canvasElement, this.imageUrl, MathHelper.randomNumber(0, this._canvas.getWidth() - 200), MathHelper.randomNumber(0, this._canvas.getHeight() - 200), 130, 120, MathHelper.randomNumber(0, 2)));
    }
}
class HighscoreScreen {
    constructor() {
        this.draw = (score) => {
            this._canvas.writeTextToCanvas(`Je hebt een score van ${score} behaald!`, 45, this._canvas.getCenter().X, 100, "yellow");
            this._canvas.writeButtonToCanvas("Probeer opnieuw", undefined, this._canvas.getCenter().Y + 200);
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
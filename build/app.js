class Game {
    constructor() {
        this.screen = ["this.Startscreen.draw()", "this.Gamescreen.draw()", "this.EraSelectionscreen.draw()", "this.HighscoreScreen.draw()", "this.GameExplanationscreen.draw()", "this.EraExplanationscreen.draw()"];
        this.sounds = ['buttonHitSFX', 'digging1', 'digging2', 'digging3', 'digging4', 'digging5'];
        this.currentGameScreenNumber = 0;
        this.time = 150;
        this.draw = () => {
            this._canvas.clear();
            eval(this.screen[this.currentGameScreenNumber]);
            console.log(this.time);
        };
        this.nextScreen = (event) => {
            if (this.currentGameScreenNumber == 5) {
                if (event.clientX >= (this._canvas.getCenter().X - 111) && event.clientX <= (this._canvas.getCenter().X + 111)
                    && event.clientY >= (this._canvas.getCenter().Y + 250) && event.clientY <= this._canvas.getCenter().Y + 289) {
                    let audioLink = "./assets/sounds/sfx/buttonHitSFX.mp3";
                    let audio = new Audio(audioLink);
                    audio.play();
                    this.currentGameScreenNumber = 0;
                    this.draw();
                }
            }
            else if (this.currentGameScreenNumber == 4) {
                if (event.clientX >= (this._canvas.getCenter().X - 111) && event.clientX <= (this._canvas.getCenter().X + 111)
                    && event.clientY >= (this._canvas.getCenter().Y + 200) && event.clientY <= this._canvas.getCenter().Y + 239) {
                    let audioLink = "./assets/sounds/sfx/buttonHitSFX.mp3";
                    let audio = new Audio(audioLink);
                    audio.play();
                    this.currentGameScreenNumber = 0;
                    this.draw();
                }
            }
            else if (this.currentGameScreenNumber == 3) {
                if (event.clientX >= (this._canvas.getCenter().X - 111) && event.clientX <= (this._canvas.getCenter().X + 111)
                    && event.clientY >= (this._canvas.getCenter().Y + 200) && event.clientY <= this._canvas.getCenter().Y + 239) {
                    for (let i = 1; i < 6; i++) {
                        document.getElementById(`place${i}`).innerHTML = '';
                    }
                    let audioLink = "./assets/sounds/sfx/buttonHitSFX.mp3";
                    let audio = new Audio(audioLink);
                    audio.play();
                    this.currentGameScreenNumber = 1;
                    document.getElementById("timerText").innerHTML = `Tijd over: 150 seconden`;
                    document.getElementById("scoreText").innerHTML = `Je score is: 0`;
                    this.resetCounter();
                    this.timer();
                    this.Gamescreen.resetScore();
                    this.draw();
                }
            }
            else if (this.currentGameScreenNumber == 2) {
                if (event.clientX >= this.MouseListener.eraScreenClick(this.EraSelectionscreen.randomItemNumber()).Xmin && event.clientX <= this.MouseListener.eraScreenClick(this.EraSelectionscreen.randomItemNumber()).Xmax
                    && event.clientY >= this.MouseListener.eraScreenClick(this.EraSelectionscreen.randomItemNumber()).Ymin && event.clientY <= this.MouseListener.eraScreenClick(this.EraSelectionscreen.randomItemNumber()).Ymax) {
                    this.Gamescreen.addScoreCounter();
                    let audioLink = `./assets/sounds/sfx/checkSFX/rightSFX.mp3`;
                    let audio = new Audio(audioLink);
                    audio.play();
                    this.currentGameScreenNumber = 1;
                    this.draw();
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
                    let audioLink = `./assets/sounds/sfx/checkSFX/wrongSFX.mp3`;
                    let audio = new Audio(audioLink);
                    audio.play();
                    this.currentGameScreenNumber = 1;
                    this.draw();
                    this._canvas.writeTextToCanvas(`Het juiste tijdvak:`, 20, this._canvas.getCenter().X, 50, 'white');
                    this._canvas.writeImageToCanvas(`./assets/images/eraLogos/era${this.EraSelectionscreen.randomItemNumber()}.png`, this._canvas.getCenter().X + 100, 20, 2, 2);
                }
            }
            else if (this.currentGameScreenNumber == 1) {
                for (let i = 0; i < this.Gamescreen.getHole().length; i++) {
                    if (this.Gamescreen.getHole()[i].getX() <= event.clientX && this.Gamescreen.getHole()[i].getX() + 128 >= event.clientX
                        && this.Gamescreen.getHole()[i].getY() <= event.clientY && this.Gamescreen.getHole()[i].getY() + 110 >= event.clientY) {
                        const randomDigSound = MathHelper.randomNumber(1, this.sounds.length - 1);
                        let audioLink = `./assets/sounds/sfx/diggingSFX/${this.sounds[randomDigSound]}.mp3`;
                        let audio = new Audio(audioLink);
                        audio.play();
                        if (this.Gamescreen.getHole()[i].getClicks() == 0) {
                            if (this.Gamescreen.getHole()[i].itemOrJokerSelector() == false) {
                                this.currentGameScreenNumber = 2;
                                this.Gamescreen.regenerateHole(i);
                                this.draw();
                            }
                            else if (this.Gamescreen.getHole()[i].itemOrJokerSelector() == true) {
                                this.time += 10;
                                this.Gamescreen.regenerateHole(i);
                                this.draw();
                                this._canvas.writeTextToCanvas(`Je hebt een zandloper gevonden!`, 20, this._canvas.getCenter().X, 50, 'white');
                                this._canvas.writeTextToCanvas(`+10 seconden`, 20, this._canvas.getCenter().X, 80, 'white');
                            }
                        }
                        else {
                            this.Gamescreen.getHole()[i].lowerClicks();
                        }
                    }
                }
            }
            else if (this.currentGameScreenNumber == 0) {
                if (event.clientX >= (this._canvas.getCenter().X - 111) && event.clientX <= (this._canvas.getCenter().X + 111)
                    && event.clientY >= (this._canvas.getCenter().Y + 150) && event.clientY <= this._canvas.getCenter().Y + 189) {
                    let audioLink = "./assets/sounds/sfx/buttonHitSFX.mp3";
                    let audio = new Audio(audioLink);
                    audio.play();
                    this.timer();
                    this.currentGameScreenNumber = 1;
                    this.draw();
                    document.getElementById('scoreText').innerHTML = `Je score is: 0`;
                    document.getElementById("timerText").innerHTML = `Tijd over: 150 seconden`;
                }
                else if (event.clientX >= (this._canvas.getCenter().X - 111) && event.clientX <= (this._canvas.getCenter().X + 111)
                    && event.clientY >= (this._canvas.getCenter().Y + 200) && event.clientY <= this._canvas.getCenter().Y + 239) {
                    let audioLink = "./assets/sounds/sfx/buttonHitSFX.mp3";
                    let audio = new Audio(audioLink);
                    audio.play();
                    this.currentGameScreenNumber = 4;
                    this.draw();
                }
                else if (event.clientX >= (this._canvas.getCenter().X - 111) && event.clientX <= (this._canvas.getCenter().X + 111)
                    && event.clientY >= (this._canvas.getCenter().Y + 250) && event.clientY <= this._canvas.getCenter().Y + 289) {
                    let audioLink = "./assets/sounds/sfx/buttonHitSFX.mp3";
                    let audio = new Audio(audioLink);
                    audio.play();
                    this.currentGameScreenNumber = 5;
                    this.draw();
                }
            }
        };
        this.canvasElement = document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
        this.Startscreen = new StartScreen();
        this.Gamescreen = new GameScreen();
        this.EraSelectionscreen = new EraSelectionScreen();
        this.GameExplanationscreen = new GameExplanationScreen();
        this.EraExplanationscreen = new EraExplanationScreen();
        this.MouseListener = new MouseListener();
        this.itemList = new Item();
        this._cookieAdd = new CookieAdd;
        this.audioLink = `./assets/sounds/music/dutch_street_organ.wav`;
        this.backgroundMusic = new Audio(this.audioLink);
        this._cookieAdd.muteCookie(this._cookieAdd.checkCookie('backgroundMusic', null));
        this.muteButton = document.getElementById("mute");
        this.muteButton.addEventListener("click", (e) => this.backgroundMusicController());
        document.addEventListener('mousedown', function (event) {
            if (event.detail > 1) {
                event.preventDefault();
            }
        }, false);
    }
    backgroundMusicController() {
        this.backgroundMusic.loop = true;
        this.backgroundMusic.play();
        if (this._cookieAdd.checkCookie('backgroundMusic', null) != false && this._cookieAdd.checkCookie('backgroundMusic', null) != true) {
            this._cookieAdd.muteCookie(true);
        }
        else if (this._cookieAdd.checkCookie('backgroundMusic', null) == true) {
            this._cookieAdd.muteCookie(true);
            this.backgroundMusic.muted = false;
            this.muteButton.innerHTML = "<img src='./assets/images/UI/volUp.png' alt='background music on'>";
        }
        else if (this._cookieAdd.checkCookie('backgroundMusic', null) == false) {
            this._cookieAdd.muteCookie(false);
            this.backgroundMusic.muted = true;
            this.muteButton.innerHTML = "<img src='./assets/images/UI/volOff.png' alt='background music muted'>";
        }
        console.log(this._cookieAdd.checkCookie('backgroundMusic', null));
    }
    timer() {
        let intervalId = setInterval(() => {
            const timerText = document.getElementById("timerText");
            timerText.innerHTML = `Tijd over: ${this.time - 1} seconden`;
            this.time--;
            if (this.time === 0) {
                clearInterval(intervalId);
                timerText.innerHTML = '';
                this.HighscoreScreen = new HighscoreScreen();
                this.currentGameScreenNumber = 3;
                this.draw();
                document.getElementById("scoreText").innerHTML = '';
            }
        }, 1000);
    }
    resetCounter() {
        this.time = 150;
    }
}
window.addEventListener('load', init);
function init() {
    const cavator = new Game();
    cavator.backgroundMusicController();
    cavator.draw();
    window.addEventListener("click", cavator.nextScreen);
}
class MouseListener {
    constructor() {
        this.onMouseMove = (event) => {
            clearTimeout(this.dTimer);
            this.dTimer = setTimeout(() => {
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
            return { Xmin: this._canvas.getWidth() * 0.017, Xmax: this._canvas.getWidth() * 0.017 + 102, Ymin: this._canvas.getHeight() - 180, Ymax: this._canvas.getHeight() - 63 };
        }
        else if (eraNumber == 2) {
            return { Xmin: this._canvas.getWidth() * 0.117, Xmax: this._canvas.getWidth() * 0.117 + 102, Ymin: this._canvas.getHeight() - 180, Ymax: this._canvas.getHeight() - 63 };
        }
        else if (eraNumber == 3) {
            return { Xmin: this._canvas.getWidth() * 0.217, Xmax: this._canvas.getWidth() * 0.217 + 102, Ymin: this._canvas.getHeight() - 180, Ymax: this._canvas.getHeight() - 63 };
        }
        else if (eraNumber == 4) {
            return { Xmin: this._canvas.getWidth() * 0.317, Xmax: this._canvas.getWidth() * 0.317 + 102, Ymin: this._canvas.getHeight() - 180, Ymax: this._canvas.getHeight() - 63 };
        }
        else if (eraNumber == 5) {
            return { Xmin: this._canvas.getWidth() * 0.417, Xmax: this._canvas.getWidth() * 0.417 + 102, Ymin: this._canvas.getHeight() - 180, Ymax: this._canvas.getHeight() - 63 };
        }
        else if (eraNumber == 6) {
            return { Xmin: this._canvas.getWidth() * 0.517, Xmax: this._canvas.getWidth() * 0.517 + 102, Ymin: this._canvas.getHeight() - 180, Ymax: this._canvas.getHeight() - 63 };
        }
        else if (eraNumber == 7) {
            return { Xmin: this._canvas.getWidth() * 0.617, Xmax: this._canvas.getWidth() * 0.617 + 102, Ymin: this._canvas.getHeight() - 180, Ymax: this._canvas.getHeight() - 63 };
        }
        else if (eraNumber == 8) {
            return { Xmin: this._canvas.getWidth() * 0.717, Xmax: this._canvas.getWidth() * 0.717 + 102, Ymin: this._canvas.getHeight() - 180, Ymax: this._canvas.getHeight() - 63 };
        }
        else if (eraNumber == 9) {
            return { Xmin: this._canvas.getWidth() * 0.817, Xmax: this._canvas.getWidth() * 0.817 + 102, Ymin: this._canvas.getHeight() - 180, Ymax: this._canvas.getHeight() - 63 };
        }
        else if (eraNumber == 10) {
            return { Xmin: this._canvas.getWidth() * 0.917, Xmax: this._canvas.getWidth() * 0.917 + 102, Ymin: this._canvas.getHeight() - 180, Ymax: this._canvas.getHeight() - 63 };
        }
    }
}
class CookieAdd {
    constructor() {
    }
    setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    checkCookie(subject, score) {
        if (subject == 'highscore') {
            let i = 1;
            while (i < 6) {
                var user = this.getCookie(`username` + i);
                const points = Number(this.getCookie(`points` + i));
                if ((points == null || points <= score)) {
                    user = prompt("HIGHSCORE! Geef een spelersnaam in:", "");
                    for (let y = 5; y > i - 1; y--) {
                        this.setCookie((`username` + (y + 1)), this.getCookie(`username` + y), 30);
                        this.setCookie((`points` + (y + 1)), Number(this.getCookie(`points` + y)), 30);
                    }
                    if (user != "" && user != null) {
                        this.setCookie((`username` + i), user, 30);
                        this.setCookie((`points` + i), score, 30);
                    }
                    i = 6;
                }
                else {
                    i++;
                }
            }
            for (let z = 1; z < 6; z++) {
                document.getElementById(`place${z}`).innerHTML = `${this.getCookie(`username` + z)}: ${Number(this.getCookie(`points` + z))} punten`;
            }
        }
        else if (subject == 'backgroundMusic') {
            const muted = this.getCookie('muted');
            if (muted == 'false') {
                return false;
            }
            else if (muted == 'true') {
                return true;
            }
        }
    }
    muteCookie(condition) {
        if (condition == true) {
            this.setCookie('muted', 'false', 30);
        }
        else if (condition == false) {
            this.setCookie('muted', 'true', 30);
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
                    hint2: "De oudste ijsmummie gevonden in Europa",
                    hint3: "Hij droeg dierenvellen kleding en een koperen bijl."
                },
                {
                    name: "een hunebed",
                    source: "./assets/images/items/1hunebed.png",
                    era: 1,
                    hint1: "Hunebedden zijn resten van oude grafkamers.",
                    hint2: "Ze zijn te vinden in gebieden van de trechterbekercultuur.",
                    hint3: "De meeste hunebedden zijn in Drenthe."
                },
                {
                    name: "een T-rex fossiel",
                    source: "./assets/images/items/1t_rex.png",
                    era: 1,
                    hint1: "De Tyrannosaurus Rex betekent koning-tiransauriër.",
                    hint2: "Deze Dinosauriërs leefden in het laat krijt tijdperk.",
                    hint3: "Het eerste fossiel van een T-rex werd gevonden in 1874."
                },
                {
                    name: "een mammoet",
                    source: "./assets/images/items/1mammoet.png",
                    era: 1,
                    hint1: "De mammoet is een al uitgestorven diersoort.",
                    hint2: "Het is familie van de olifant.",
                    hint3: "Het had een dikke vacht, voor tegen de kou."
                },
                {
                    name: "de Stonehenge",
                    source: "./assets/images/items/1stonehenge.png",
                    era: 1,
                    hint1: "Het is een oud monument gelegen in Engeland.",
                    hint2: "Stonehenge diende vroeger als begraafplaats.",
                    hint3: "Het komt uit de Jonge Steentijd."
                },
                {
                    name: "grotschilderingen",
                    source: "./assets/images/items/1grotschilderingen.png",
                    era: 1,
                    hint1: "Deze grotschilderingen werden getekend door jagers-verzamelaars.",
                    hint2: "Dit waren de eerste tekenen van kunst door de mens.",
                    hint3: "Dit soort tekeningen konden als ritueel voor de jacht staan."
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
                    hint1: "Deze helm was van een Romeinse officier.",
                    hint2: "De officier zat bij ruiterafdeling STABLESIA VI.",
                    hint3: "De helm is verguld zilveren versierd."
                },
                {
                    name: "een ostrakon",
                    source: "./assets/images/items/2ostrakon.png",
                    era: 2,
                    hint1: "Werd gebruikt om minder belangrijke dingen op te schrijven.",
                    hint2: "In Athene werd hier een stem mee uitgebracht.",
                    hint3: "Ostrakon is een goedkope versie voor Papyrus."
                },
                {
                    name: "het masker van Toetanchamon",
                    source: "./assets/images/items/2masker_toetanchamon.png",
                    era: 2,
                    hint1: "Toetanchamon was een farao van de 18e Dynastie.",
                    hint2: "De graftombe van de farao werd gevonden in 1922.",
                    hint3: "Toetanchamon was maar 19 toen hij stierf."
                },
                {
                    name: "het Parthenon",
                    source: "./assets/images/items/2parthenon.png",
                    era: 2,
                    hint1: "Dit was gebouwd voor de beschermgodin van Athene, Griekenland.",
                    hint2: "Deze tempel was het hoogtepunt van klassieke, Atheense bouwkunst.",
                    hint3: "Onderdeel van de monumentale herbouw van de Akropolis."
                },
                {
                    name: "de Olympische Spelen",
                    source: "./assets/images/items/2discuswerper.png",
                    era: 2,
                    hint1: "Het is genoemd naar Olympia, de plaats waar ze werden gehouden.",
                    hint2: "Vroeger mochten alleen mannen meedoen.",
                    hint3: "Het wordt nog steeds gehouden in andere vorm."
                },
                {
                    name: "Sfinx van Gizeh",
                    source: "./assets/images/items/2sfinx.png",
                    era: 2,
                    hint1: "Het staat bij de drie grote piramiden in Gizeh, Egypte.",
                    hint2: "Het was gebouwd voor de farao Khafra.",
                    hint3: "Het katvormige gebouw staat in de woestijn in Egypte."
                },
                {
                    name: "de Chinese Muur",
                    source: "./assets/images/items/2chinesemuur.png",
                    era: 2,
                    hint1: "Het Chinees keizerrijk bouwde deze muur tegen vijandelijke nomadische ruitervolkeren.",
                    hint2: "Het wordt gezien als het grootste bouwwerk uit de geschiedenis.",
                    hint3: "Wachttorens op de muur communiceerden met elkaar via rookpluimen.",
                },
                {
                    name: "het zwaard van Sint Cosmas",
                    source: "./assets/images/items/3zwaard_sint_cosmas.png",
                    era: 3,
                    hint1: "Zij zouden allebei geneesheren zijn geweest.",
                    hint2: "Ze boden kosteloos hun geneeskundige diensten aan.",
                    hint3: "Het christendom ziet hen als de patroonheiligen van de medische sector."
                },
                {
                    name: "Karel de Grote",
                    source: "./assets/images/items/3karel_de_grote.png",
                    era: 3,
                    hint1: "Was keizer van het Heilige Roomse Rijk.",
                    hint2: "Zorgde voor de Karolingische renaissance.",
                    hint3: "Onder hem kregen kunst, literatuur en architectuur een ongewone opleving."
                },
                {
                    name: "een penannulaire broche",
                    source: "./assets/images/items/3broche.png",
                    era: 3,
                    hint1: "Was eigendom van een belangrijke viking.",
                    hint2: "Het is een onvolledige ring.",
                    hint3: "Gemaakt in Schotland of Ierland."
                },
                {
                    name: "een viking zwaard",
                    source: "./assets/images/items/3viking_zwaard.png",
                    era: 3,
                    hint1: "Het zwaard is gevonden in Skaftárhreppur, IJsland.",
                    hint2: "Het is misschien het zwaard van de eerste inwoner van IJsland.",
                    hint3: "Het zwaard werd waarschijnlijk gebruikt voor een begrafenis.",
                },
                {
                    name: "een vikingschip",
                    source: "./assets/images/items/3vikingschip.png",
                    era: 3,
                    hint1: "Het werd gebruikt voor transport, handel en ontdekkingsreizen.",
                    hint2: "Ook werden ze gebruikt in oorlogsmissies en plunderingen.",
                    hint3: "De vikingschepen werden gebouwd door Scandinavische vikings."
                },
                {
                    name: "de drukpers",
                    source: "./assets/images/items/3drukpers.png",
                    era: 3,
                    hint1: "Hiermee konden boeken gekopieerd worden en dus makkelijker verspreid worden.",
                    hint2: "Werd gebruikt door Maarten Luther om zijn ideeen te verspreiden.",
                    hint3: "Hiermee werd ook de Gutenbergbijbel gemaakt."
                },
                {
                    name: "buskruit",
                    source: "./assets/images/items/3buskruit.png",
                    era: 3,
                    hint1: "Buskruit is het oudst bekende explosieve mengsel.",
                    hint2: "Het werd al in tijdens de Tang-dynastie in China gemaakt.",
                    hint3: "Het wordt gebruikt om vuurpijlen af te schieten."
                },
                {
                    name: "een grafsteen",
                    source: "./assets/images/items/3grafsteen.png",
                    era: 3,
                    hint1: "Domitianus van Hoei was de eerste bisschop in Nederland.",
                    hint2: "Hij woonde toen in Maastricht.",
                    hint3: "Deze grafsteen komt uit diezelfde tijd."
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
                    hint2: "Resten van in oven gebakken glazen potten.",
                    hint3: "Het strijkglas is een voorganger van het moderne strijkijzer."
                },
                {
                    name: "een narrenschoen",
                    source: "./assets/images/items/4narrenschoen.png",
                    era: 4,
                    hint1: "De hofnar is de grappenmaker van een vorst.",
                    hint2: "Hij kon grappen maken zonder dat hij gestraft werd.",
                    hint3: "Soms droeg hij ook een staf."
                },
                {
                    name: "het stadhuis van Haarlem",
                    source: "./assets/images/items/4stadhuis_haarlem.png",
                    era: 4,
                    hint1: "Werd gebouwd nadat een jachthuis was gesloopt in de 14e eeuw.",
                    hint2: "Het stadhuis is ontworpen door o.a. Lieve de Key.",
                    hint3: "Het gebouw is tegenwoordig een rijksmonument."
                },
                {
                    name: "een spinnewiel",
                    source: "./assets/images/items/4spinnewiel.png",
                    era: 4,
                    hint1: "Een mechaniek om van wol een draad te spinnen.",
                    hint2: "Ook wel een schippertje genoemd, omdat het vaak werd gebruikt op schepen.",
                    hint3: "Er ook katoen of vlas gebruikt worden voor het spinnen."
                },
                {
                    name: "de getijdenmolen van Middelburg",
                    source: "./assets/images/items/4getijdenmolen.png",
                    era: 4,
                    hint1: "Het wordt aangedreven door het tij.",
                    hint2: "Er zijn nog steeds resten te vinden in Zeeland.",
                    hint3: "Het wordt gebruikt in combinatie met het waterrad."
                },
                {
                    name: "een waterrad",
                    source: "./assets/images/items/4waterrad.png",
                    era: 4,
                    hint1: "Door het waterrad kon overgestapt worden van mankracht naar waterkracht.",
                    hint2: "Ze zijn aangelegd in heel Midden-Europa.",
                    hint3: "Ze liggen vaak in de buurt bij getijdenmolens."
                },
                {
                    name: "een hoogoven",
                    source: "./assets/images/items/4hoogoven.png",
                    era: 4,
                    hint1: "Installatie waarin ijzererts wordt omgezet in ijzer.",
                    hint2: "Omdat het ijzer vloeibaar is kan het gegoten worden.",
                    hint3: "Voor de verhitting is koolstof nodig."
                },
                {
                    name: "een standerdmolen",
                    source: "./assets/images/items/4standerdmolen.png",
                    era: 4,
                    hint1: "De oudste vermelding van een standerdmolen in Nederland is uit Willemskerke (Zeeuws-Vlaanderen).",
                    hint2: "Het oudste houten type windmolen in de Lage Landen.",
                    hint3: "Uit de standerdmolen is de bekende wipmolen ontstaan."
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
                    hint1: "De tandenstoker was in die tijd een modieus accessoire.",
                    hint2: "Het heeft de vorm van een roofvogelklauw.",
                    hint3: "Ze werden veel gebruikt door reizigers."
                },
                {
                    name: "Willem van Oranje",
                    source: "./assets/images/items/5willem_van_oranje.png",
                    era: 5,
                    hint1: "Hij wordt vaak de vader des vaderlands genoemd.",
                    hint2: "Hij verkocht zijn bezittingen om tegen Spanje te vechten.",
                    hint3: "De lijfspreuk van de prins was 'Je maintiendrai'."
                },
                {
                    name: "Maarten Luther",
                    source: "./assets/images/items/5maarten_luther.png",
                    era: 5,
                    hint1: "Hij was tegen het aflaatsysteem van de Katholieke Kerk.",
                    hint2: "Hij schreef 95 stellingen, waarin hij wantoestanden uitligt.",
                    hint3: "Deze daad wordt gezien als het begin van de reformatie."
                },
                {
                    name: "een boterspaan",
                    source: "./assets/images/items/5boterspaan.png",
                    era: 5,
                    hint1: "Houten lepel die werd gebruikt om boter te scheppen.",
                    hint2: "De lepel had groeven zodat boter niet bleef plakken.",
                    hint3: "Boter wordt pas vanaf de 16e eeuw gegeten."
                },
                {
                    name: "een donderbus",
                    source: "./assets/images/items/5donderbus.png",
                    era: 5,
                    hint1: "Een handvuurwapen dat werd gebruikt door strijdende partijen op het slagveld.",
                    hint2: "Het was geen precisiewapen, maar op korte afstand uiterst gevaarlijk.",
                    hint3: "De lading bestond uit een bundel kogels (ook wel een druiventros genoemd)."
                },
                {
                    name: "een beiaard",
                    source: "./assets/images/items/5beiaard.png",
                    era: 5,
                    hint1: "Muziekinstrument bestaande uit op elkaar afgestemde bronzen klokken.",
                    hint2: "De beiaard is het zwaarste van alle muziekinstrumenten.",
                    hint3: "De beiaardcultuur wordt erkend als immaterieel cultureel erfgoed."
                },
                {
                    name: "de Nachtwacht",
                    source: "./assets/images/items/6nachtwacht.png",
                    era: 6,
                    hint1: "Gemaakt door Rembrandt van Rijn.",
                    hint2: "Hangt op dit moment in het Rijksmuseum.",
                    hint3: "Bij het inkorten verdween de afbeelding van twee schutters."
                },
                {
                    name: "een VOC munt",
                    source: "./assets/images/items/6voc_munt.png",
                    era: 6,
                    hint1: "De VOC = Vereenigde Oostindische Compagnie.",
                    hint2: "Zorgde voor een financiële opbloei in Nederland.",
                    hint3: "De VOC was de eerste multinational ter wereld."
                },
                {
                    name: "het Paleis op de Dam",
                    source: "./assets/images/items/6paleis_dam.png",
                    era: 6,
                    hint1: "Het werd oorspronkelijk gebouwd als stadhuis.",
                    hint2: "Later werd het aan Lodewijk Napoleon aangeboden als paleis.",
                    hint3: "Het bevindt zich op de Dam in Amsterdam."
                },
                {
                    name: "een straatlantaarn",
                    source: "./assets/images/items/6lantaarn.png",
                    era: 6,
                    hint1: "Ontworpen door Jan van der Heyden.",
                    hint2: "Als brandstof werd raapolie gebruikt.",
                    hint3: "De lantaarn was voorzien van 2 ruiten."
                },
                {
                    name: "Michiel de Ruyter",
                    source: "./assets/images/items/6de_Ruyter.png",
                    era: 6,
                    hint1: "Een berucht zeevaarder die vocht tegen de Engelsen.",
                    hint2: "Michiel de Ruyter was zoon van Adriaan, een bierdrager.",
                    hint3: "Hij heeft het Nederlands korps Mariniers opgericht."
                },
                {
                    name: "een telescoop",
                    source: "./assets/images/items/6telescoop.png",
                    era: 6,
                    hint1: "Uitgevonden in Middelburg, tijdens Nederlands hoogtij dagen.",
                    hint2: "De mogelijke uitvinder had zijn microscoop aan een stadhouder laten zien.",
                    hint3: "De eerste telescoop wordt Hollandse Kijker genoemd."
                },
                {
                    name: "de eerste duikboot",
                    source: "./assets/images/items/6duikboot.png",
                    era: 6,
                    hint1: "Is ontworpen door Cornelis Drebbel.",
                    hint2: "Drebbel heeft meerdere keren gevaren op de Theems.",
                    hint3: "Het was bekleed met ingevet varkensleer, waardoor het waterdicht was."
                },
                {
                    name: "een mechanische rekenmachine",
                    source: "./assets/images/items/6rekenmachine.png",
                    era: 6,
                    hint1: "Is gebouwd door Wilhelm Schickard.",
                    hint2: "De machine kon getallen van zes cijfers optellen en aftrekken.",
                    hint3: "De rekenmachine werd gebruikt om astronomische tabellen te berekenen."
                },
                {
                    name: "een slingeruurwerk",
                    source: "./assets/images/items/6slingeruurwerk.png",
                    era: 6,
                    hint1: "De uitvinder van het slingeruurwerk is Christiaan Huygens.",
                    hint2: "De klok blijft gelijkmatig lopen door de slinger.",
                    hint3: "Als de klok verkeerd afgesteld is, loopt de klok te snel of te langzaam."
                },
                {
                    name: "een trekschuit",
                    source: "./assets/images/items/7trekschuit.png",
                    era: 7,
                    hint1: "Binnenvaartschip dat werd getrokken door paarden aan de oever.",
                    hint2: "De schepen werden gebruikt voor zowel vracht- als personenvervoer.",
                    hint3: "Het was één van de voorlopers van modern openbaar vervoer."
                },
                {
                    name: "De Amsterdam",
                    source: "./assets/images/items/7amsterdam.png",
                    era: 7,
                    hint1: "De Amsterdam was een transportschip voor de VOC.",
                    hint2: "Tijdens de eerste reis ging 'de Amsterdam' verloren tijdens een storm.",
                    hint3: "Er is een replica van het schip in Amsterdam."
                },
                {
                    name: "Napoleon Bonaparte",
                    source: "./assets/images/items/7napoleon.png",
                    era: 7,
                    hint1: "Het lukte hem een groot deel van Europa onder Frans gezag te brengen.",
                    hint2: "Napoleon was een leider tijdens de Franse revolutie.",
                    hint3: "Zijn broer Lodewijk werd koning van Holland."
                },
                {
                    name: "de Amerikaanse onafhankelijkheidsverklaring",
                    source: "./assets/images/items/7declaration.png",
                    era: 7,
                    hint1: "Het document verklaard de VS onafhankelijk van Groot-Britannië.",
                    hint2: "De verklaring werd vertegenwoordigd door de 13 koloniën.",
                    hint3: "Het tekenen van de verklaring word op 4 juli gevierd als Independence day."
                },
                {
                    name: "de eerste Nederlandse grondwet",
                    source: "./assets/images/items/7grondwet.png",
                    era: 7,
                    hint1: "Opgesteld door de Bataafse republiek en de Nationale vergadering.",
                    hint2: "De wet stelde de scheiding van machten vast.",
                    hint3: "Er werd een zeker kiesrecht opgesteld in de grondwet."
                },
                {
                    name: "een heteluchtballon",
                    source: "./assets/images/items/7heteluchtballon.png",
                    era: 7,
                    hint1: "Luchtvaartuig waarbij een mand opstijgt, hangende aan een ballon.",
                    hint2: "De heteluchtballon werd door Joseph en Étienne Montgolfier gedemonstreerd.",
                    hint3: "De heteluchtballon is het oudste type luchtballon."
                },
                {
                    name: "de eerste batterij",
                    source: "./assets/images/items/7batterij.png",
                    era: 7,
                    hint1: "Eerst werd het gebruikt voor geneeskrachtige werkingen.",
                    hint2: "Met de eerste paar werd geëxperimenteerd op kikkerpoten die samentrokken.",
                    hint3: "De eerste paar batterijen bestonden uit koper, zink en vilt."
                },
                {
                    name: "een hoge bi",
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
                    hint1: "Het stoken van kolen zorgt voor de aandrijving via stoommachines.",
                    hint2: "Soms werkten ook kinderen in de weverij.",
                    hint3: "Later kwamen er sociale voorzieningen voor de fabrieksarbeiders."
                },
                {
                    name: "de eerste foto",
                    source: "./assets/images/items/8eerste_foto.png",
                    era: 8,
                    hint1: "Gemaakt door Joseph Niépce.",
                    hint2: "Het duurde 8 uur om de foto te maken.",
                    hint3: "Hij noemde het 'schrijven met de zon'."
                },
                {
                    name: "Max Havelaar",
                    source: "./assets/images/items/8max_havelaar.png",
                    era: 8,
                    hint1: "Boek geschreven door Multatuli.",
                    hint2: "In het boek werd kritiek gegeven op het cultuurstelsel.",
                    hint3: "Dit cultuurstelsel was in Nederlands-Indië."
                },
                {
                    name: "een stoommachine",
                    source: "./assets/images/items/8stoommachine.png",
                    era: 8,
                    hint1: "De stoommachine werd ontworpen door Thomas Savery en Thomas Newcomen.",
                    hint2: "Het werkt doordat stoom voor beweging zorgt.",
                    hint3: "Deze verbeteringen maakte de stoommachine tot wat het nu is."
                },
                {
                    name: "de Leeuw van Waterloo",
                    source: "./assets/images/items/8waterloo.png",
                    era: 8,
                    hint1: "Een herdenkingsmonument voor de Slag bij Waterloo.",
                    hint2: "Het monument staat op een 45 meter hoge kunstmatige heuvel.",
                    hint3: "Napoleon Bonaparte werd hier definitief verslagen."
                },
                {
                    name: "de eerste telefoon",
                    source: "./assets/images/items/8telefoon.png",
                    era: 8,
                    hint1: "Uitgevonden door Alexander Graham Bell.",
                    hint2: "Het eerste bericht was 'Mr. Watson, come here. I want to see you.'",
                    hint3: "Zijn telefoonmaatschappij werd een van 's werelds grootste bedrijven."
                },
                {
                    name: "een stethoscoop",
                    source: "./assets/images/items/8stethoscoop.png",
                    era: 8,
                    hint1: "Een instrument om naar geluiden in het lichaam te luisteren.",
                    hint2: "De meeste artsen maken nog gebruik van het traditionele model.",
                    hint3: "Artsen moeten hem eigenlijk altijd bij zich hebben."
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
                    hint1: "Deze fiets is ontwikkeld door het bedrijf Philips.",
                    hint2: "Door de benzineschaarste leefde de belangstelling op.",
                    hint3: "In Amsterdam kwam een elektrische fietstaxi in gebruik."
                },
                {
                    name: "een jodenster",
                    source: "./assets/images/items/9jodenster.png",
                    era: 9,
                    hint1: "Een kenteken dat Joden moesten dragen voor een bepaalde periode.",
                    hint2: "Dit gelde alleen in bepaalde gedeeltes van Europa.",
                    hint3: "Alle Joden vanaf 6 jaar oud moesten de ster dragen."
                },
                {
                    name: "een propaganda poster",
                    source: "./assets/images/items/9propaganda.png",
                    era: 9,
                    hint1: "Een poster uit de Verenigde Staten.",
                    hint2: "Wervings poster, want er was een tekort aan soldaten.",
                    hint3: "Het personage op de poster is Uncle Sam."
                },
                {
                    name: "een zeppelin",
                    source: "./assets/images/items/9zeppelin.png",
                    era: 9,
                    hint1: "Bedacht door graaf Ferdinand von Zeppelin.",
                    hint2: "De ballon is gevuld met gas waardoor het gevaarte vliegt.",
                    hint3: "De zeppelin was het eerste militaire en commerciële luchtvaart voertuig."
                },
                {
                    name: "een winkelwagentje",
                    source: "./assets/images/items/9winkelwagentje.png",
                    era: 9,
                    hint1: "De eerste winkelwagen was een uitvinding van Sylvan Goldman.",
                    hint2: "Hij had gezien dat klanten moeite hadden met te volle winkelmanden.",
                    hint3: "Veel winkels waren overgegaan op zelfbediening."
                },
                {
                    name: "penicilline",
                    source: "./assets/images/items/9penicilline.png",
                    era: 9,
                    hint1: "Was ontdekt door Alexander Fleming.",
                    hint2: "Het was het eerste algemeen bruikbare antibioticum.",
                    hint3: "In Nederland werd het voor het eerst gebruikt in Kamp Westerbork."
                },
                {
                    name: "een magnetron",
                    source: "./assets/images/items/9magnetron.png",
                    era: 9,
                    hint1: "Een soort oven waarin met microgolfstraling voedsel verwarmd of gekookt kan worden.",
                    hint2: "De eerste magnetron was de Amerikaanse RadaRange.",
                    hint3: "Is per ongeluk ontdekt door Percy Spencer."
                },
                {
                    name: "een stofzuiger",
                    source: "./assets/images/items/9stofzuiger.png",
                    era: 9,
                    hint1: "De eerste stofzuiger was 50 kilogram.",
                    hint2: "Hij stond op een kar en werd getrokken door paarden.",
                    hint3: "Alleen rijke mensen en bedrijven konden een stofzuiger betalen."
                },
                {
                    name: "een televisie handboek",
                    source: "./assets/images/items/10handboek_televisie.png",
                    era: 10,
                    hint1: "Boekje met informatie over hoe een televisie werkt.",
                    hint2: "De eerste landelijke uitzending was vanuit Hilversum.",
                    hint3: "De eerste televisiezender heette Nederland 1."
                },
                {
                    name: "een Game Boy",
                    source: "./assets/images/items/10game_boy.png",
                    era: 10,
                    hint1: "Uitgebracht door Nintendo in Japan.",
                    hint2: "Bekend van spelletjes als Super Mario en Pokémon.",
                    hint3: "De spelletjes stonden op cassettes."
                },
                {
                    name: "de eerste mobiele telefoon",
                    source: "./assets/images/items/10mobiele_telefoon.png",
                    era: 10,
                    hint1: "Gemaakt door Ericsson.",
                    hint2: "Het werd gebruikt door dokters in Zweden.",
                    hint3: "Hij weegt 14 kilogram."
                },
                {
                    name: "de Oosterscheldekering",
                    source: "./assets/images/items/10oosterscheldekering.png",
                    era: 10,
                    hint1: "Kan gesloten worden bij hoog water.",
                    hint2: "Is onderdeel van het Deltaplan.",
                    hint3: "Dit plan werd gestart als resultaat van de watersnoodramp."
                },
                {
                    name: "het International Space Station (ISS)",
                    source: "./assets/images/items/10iss.png",
                    era: 10,
                    hint1: "ISS is een bemande sataliet gebouwd voor onderzoek.",
                    hint2: "Vliegt in 93 om de aarde.",
                    hint3: "Het station weegt ongeveer 420kg.",
                },
                {
                    name: "een muziekcassette",
                    source: "./assets/images/items/10muziekcassette.png",
                    era: 10,
                    hint1: "Een magneetband die wordt gebruikt om muziek op te slaan.",
                    hint2: "De compacte muziekcassette is een ontwikkeling geweest door Lou Ottens.",
                    hint3: "Hij was een werknemer van Philips.",
                },
                {
                    name: "een compact disc",
                    source: "./assets/images/items/10cd.png",
                    era: 10,
                    hint1: "Een optische schijf, die voor de opslag van muziek werd gebruikt.",
                    hint2: "De CD is gezamenlijk ontwikkeld door Philips en Sony.",
                    hint3: "Later werd de CD ook voor video gebruikt.",
                },
                {
                    name: "een laser",
                    source: "./assets/images/items/10laser.png",
                    era: 10,
                    hint1: "Een soort licht dat maar in 1 richting straalt.",
                    hint2: "Lasers worden voor veel verschillende doelen gebruikt.",
                    hint3: "Volgens de kranten zou de laser toen 'een dodende straal' zijn.",
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
    constructor(canvas, imageSource, xCoor, yCoor, width, height, clicks, itemOrJoker) {
        this._canvas = new CanvasHelper(canvas);
        this._imageSrc = imageSource;
        this._xPos = xCoor;
        this._yPos = yCoor;
        this._width = width;
        this._height = height;
        this._clicks = clicks;
        this._itemOrJoker = itemOrJoker;
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
    itemOrJokerSelector() {
        if (this._itemOrJoker == 14) {
            return true;
        }
        else {
            return false;
        }
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
        this._context.font = `${aFontSize}px galiver-sans`;
        this._context.fillStyle = aColor;
        this._context.textAlign = aAlignment;
        this._context.fillText(aText, aXpos, aYpos);
    }
    writeImageToCanvas(aSrc, aXpos, aYpos, imgWidthDivide = 1, imgHeightDivide = 1) {
        let image = new Image();
        image.src = aSrc;
        image.addEventListener('load', () => {
            this._context.drawImage(image, aXpos, aYpos, image.width / imgWidthDivide, image.height / imgHeightDivide);
        });
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
class EraExplanationScreen {
    constructor() {
        this.draw = () => {
            this.canvasElement.style.backgroundImage = "url(./assets/images/backgrounds/tableBackground.jpg)";
            this.canvasElement.style.backgroundSize = "100% 100%";
            this.canvasElement.style.cursor = "url(./assets/images/FeatherCursor.png), auto";
            this.canvasElement.style.cursor = "url(./assets/images/FeatherCursor.cur), auto";
            this._canvas.writeImageToCanvas("./assets/images/eraLogos/era1.png", 25, 25);
            this._canvas.writeImageToCanvas("./assets/images/eraLogos/era2.png", 25, 150);
            this._canvas.writeImageToCanvas("./assets/images/eraLogos/era3.png", 25, 275);
            this._canvas.writeImageToCanvas("./assets/images/eraLogos/era4.png", 25, 400);
            this._canvas.writeImageToCanvas("./assets/images/eraLogos/era5.png", 475, 25);
            this._canvas.writeImageToCanvas("./assets/images/eraLogos/era6.png", 475, 150);
            this._canvas.writeImageToCanvas("./assets/images/eraLogos/era7.png", 475, 275);
            this._canvas.writeImageToCanvas("./assets/images/eraLogos/era8.png", 475, 400);
            this._canvas.writeImageToCanvas("./assets/images/eraLogos/era9.png", 925, 275);
            this._canvas.writeImageToCanvas("./assets/images/eraLogos/era10.png", 925, 400);
            this._canvas.writeTextToCanvas("Tijd van jagers en boeren", 15, 150, 50, "yellow", "left");
            this._canvas.writeTextToCanvas("Prehistorie tot 3000 v. Chr.", 15, 150, 70, "yellow", "left");
            this._canvas.writeTextToCanvas("De levenswijze van jagers-verzamelaars", 15, 150, 90, "yellow", "left");
            this._canvas.writeTextToCanvas("Het ontstaan van landbouwsamenlevingen", 15, 150, 110, "yellow", "left");
            this._canvas.writeTextToCanvas("Tijd van Grieken en Romeinen", 15, 150, 175, "yellow", "left");
            this._canvas.writeTextToCanvas("3000 v. Chr. tot 500", 15, 150, 195, "yellow", "left");
            this._canvas.writeTextToCanvas("De groei van het Romeinse rijk", 15, 150, 215, "yellow", "left");
            this._canvas.writeTextToCanvas("Ontwikkeling van christendom en jodendom", 15, 150, 235, "yellow", "left");
            this._canvas.writeTextToCanvas("Tijd van monniken en ridders", 15, 150, 300, "yellow", "left");
            this._canvas.writeTextToCanvas("500 tot 1000", 15, 150, 320, "yellow", "left");
            this._canvas.writeTextToCanvas("De verspreiding van het christendom", 15, 150, 340, "yellow", "left");
            this._canvas.writeTextToCanvas("Agrarische cultuur via het hofstelsel", 15, 150, 360, "yellow", "left");
            this._canvas.writeTextToCanvas("Tijd van steden en staten", 15, 150, 425, "yellow", "left");
            this._canvas.writeTextToCanvas("1000 tot 1500", 15, 150, 445, "yellow", "left");
            this._canvas.writeTextToCanvas("De opkomst van handel en ambacht", 15, 150, 465, "yellow", "left");
            this._canvas.writeTextToCanvas("Begin van staatsvorming en centralisatie", 15, 150, 485, "yellow", "left");
            this._canvas.writeTextToCanvas("Tijd van ontdekkers en hervormers", 15, 600, 50, "yellow", "left");
            this._canvas.writeTextToCanvas("1500 tot 1600", 15, 600, 70, "yellow", "left");
            this._canvas.writeTextToCanvas("De Opstand in de Nederlanden", 15, 600, 90, "yellow", "left");
            this._canvas.writeTextToCanvas("De protestantse reformatie", 15, 600, 110, "yellow", "left");
            this._canvas.writeTextToCanvas("Tijd van regenten en vorsten", 15, 600, 175, "yellow", "left");
            this._canvas.writeTextToCanvas("1600 tot 1700", 15, 600, 195, "yellow", "left");
            this._canvas.writeTextToCanvas("De Gouden Eeuw", 15, 600, 215, "yellow", "left");
            this._canvas.writeTextToCanvas("Het begin van een wereldeconomie", 15, 600, 235, "yellow", "left");
            this._canvas.writeTextToCanvas("Tijd van pruiken en revoluties", 15, 600, 300, "yellow", "left");
            this._canvas.writeTextToCanvas("1700 tot 1800", 15, 600, 320, "yellow", "left");
            this._canvas.writeTextToCanvas("De Verlichting", 15, 600, 340, "yellow", "left");
            this._canvas.writeTextToCanvas("Democratische revoluties in Europa", 15, 600, 360, "yellow", "left");
            this._canvas.writeTextToCanvas("Tijd van burgers en stoommachines", 15, 600, 425, "yellow", "left");
            this._canvas.writeTextToCanvas("1800 tot 1900", 15, 600, 445, "yellow", "left");
            this._canvas.writeTextToCanvas("De industriële revolutie", 15, 600, 465, "yellow", "left");
            this._canvas.writeTextToCanvas("Verdergaande democratisering", 15, 600, 485, "yellow", "left");
            this._canvas.writeTextToCanvas("Tijd van wereldoorlogen", 15, 1050, 300, "yellow", "left");
            this._canvas.writeTextToCanvas("1900 tot 1950", 15, 1050, 320, "yellow", "left");
            this._canvas.writeTextToCanvas("Het voeren van twee wereldoorlogen", 15, 1050, 340, "yellow", "left");
            this._canvas.writeTextToCanvas("De Duitse bezetting van Nederland", 15, 1050, 360, "yellow", "left");
            this._canvas.writeTextToCanvas("Tijd van televisie en computers", 15, 1050, 425, "yellow", "left");
            this._canvas.writeTextToCanvas("1950 tot nu", 15, 1050, 445, "yellow", "left");
            this._canvas.writeTextToCanvas("De dreiging van een atoomoorlog", 15, 1050, 465, "yellow", "left");
            this._canvas.writeTextToCanvas("De toenemende westerse welvaart", 15, 1050, 485, "yellow", "left");
            this._canvas.writeButtonToCanvas("Terug", undefined, this._canvas.getCenter().Y + 250);
        };
        this.canvasElement = document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
    }
}
class EraSelectionScreen {
    constructor() {
        this.draw = () => {
            this.randomItemPicker();
            this.canvasElement.style.backgroundImage = "url(./assets/images/backgrounds/tableBackground.jpg)";
            this.canvasElement.style.backgroundSize = "100% 100%";
            this.canvasElement.style.cursor = "url(./assets/images/FeatherCursor.png), auto";
            this.canvasElement.style.cursor = "url(./assets/images/FeatherCursor.cur), auto";
            this._canvas.writeTextToCanvas(`Je hebt ${this.itemList.getItemProperty(this.pickedItem, "name")} gevonden!`, 35, this._canvas.getCenter().X, 100, "yellow");
            this._canvas.writeImageToCanvas(this.itemList.getItemProperty(this.pickedItem, "source"), this._canvas.getCenter().X / 2 - 150, this._canvas.getCenter().Y - 200);
            this._canvas.writeImageToCanvas("./assets/images/eraLogos/era1.png", this._canvas.getWidth() * 0.017, this._canvas.getHeight() - 180);
            this._canvas.writeImageToCanvas("./assets/images/eraLogos/era2.png", this._canvas.getWidth() * 0.117, this._canvas.getHeight() - 180);
            this._canvas.writeImageToCanvas("./assets/images/eraLogos/era3.png", this._canvas.getWidth() * 0.217, this._canvas.getHeight() - 180);
            this._canvas.writeImageToCanvas("./assets/images/eraLogos/era4.png", this._canvas.getWidth() * 0.317, this._canvas.getHeight() - 180);
            this._canvas.writeImageToCanvas("./assets/images/eraLogos/era5.png", this._canvas.getWidth() * 0.417, this._canvas.getHeight() - 180);
            this._canvas.writeImageToCanvas("./assets/images/eraLogos/era6.png", this._canvas.getWidth() * 0.517, this._canvas.getHeight() - 180);
            this._canvas.writeImageToCanvas("./assets/images/eraLogos/era7.png", this._canvas.getWidth() * 0.617, this._canvas.getHeight() - 180);
            this._canvas.writeImageToCanvas("./assets/images/eraLogos/era8.png", this._canvas.getWidth() * 0.717, this._canvas.getHeight() - 180);
            this._canvas.writeImageToCanvas("./assets/images/eraLogos/era9.png", this._canvas.getWidth() * 0.817, this._canvas.getHeight() - 180);
            this._canvas.writeImageToCanvas("./assets/images/eraLogos/era10.png", this._canvas.getWidth() * 0.917, this._canvas.getHeight() - 180);
            this._canvas._context.lineWidth = 2;
            this._canvas._context.beginPath();
            this._canvas.writeTextToCanvas("-3000", 20, this._canvas.getWidth() * 0.105, this._canvas.getHeight() - 20, "yellow", "center");
            this._canvas.writeTextToCanvas("500", 20, this._canvas.getWidth() * 0.205, this._canvas.getHeight() - 20, "yellow", "center");
            this._canvas.writeTextToCanvas("1000", 20, this._canvas.getWidth() * 0.305, this._canvas.getHeight() - 20, "yellow", "center");
            this._canvas.writeTextToCanvas("1500", 20, this._canvas.getWidth() * 0.405, this._canvas.getHeight() - 20, "yellow", "center");
            this._canvas.writeTextToCanvas("1600", 20, this._canvas.getWidth() * 0.505, this._canvas.getHeight() - 20, "yellow", "center");
            this._canvas.writeTextToCanvas("1700", 20, this._canvas.getWidth() * 0.605, this._canvas.getHeight() - 20, "yellow", "center");
            this._canvas.writeTextToCanvas("1800", 20, this._canvas.getWidth() * 0.705, this._canvas.getHeight() - 20, "yellow", "center");
            this._canvas.writeTextToCanvas("1900", 20, this._canvas.getWidth() * 0.805, this._canvas.getHeight() - 20, "yellow", "center");
            this._canvas.writeTextToCanvas("1950", 20, this._canvas.getWidth() * 0.905, this._canvas.getHeight() - 20, "yellow", "center");
            this._canvas._context.moveTo(this._canvas.getWidth() * 0.014, this._canvas.getHeight() - 60);
            this._canvas._context.lineTo(this._canvas.getWidth() * 0.985, this._canvas.getHeight() - 60);
            this._canvas._context.moveTo(this._canvas.getWidth() * 0.014, this._canvas.getHeight() - 59);
            this._canvas._context.lineTo(this._canvas.getWidth() * 0.985, this._canvas.getHeight() - 59);
            this._canvas._context.stroke();
            this._canvas._context.strokeStyle = "yellow";
            this._canvas._context.strokeRect((this._canvas.getWidth() * 0.75) - (this._canvas.getWidth() * 0.125), this._canvas.getHeight() * 0.18 - 1, this._canvas.getWidth() * 0.35, this._canvas.getHeight() * 0.5 + 2);
            this._canvas._context.fillStyle = "grey";
            this._canvas._context.fillRect((this._canvas.getWidth() * 0.75) - (this._canvas.getWidth() * 0.125 - 1), this._canvas.getHeight() * 0.18, this._canvas.getWidth() * 0.35 - 2, this._canvas.getHeight() * 0.5);
            this._canvas.writeTextToCanvas('Info', 40, this._canvas.getWidth() * 0.83, this._canvas.getHeight() * 0.24, "black", "right");
            for (let i = 1; i <= 3; i++) {
                this._canvas.writeTextToCanvas(`• ${this.itemList.getItemProperty(this.pickedItem, `hint${i}`).split(" ").splice(0, 5).join(" ")}`, 20, this._canvas.getWidth() * 0.80, this._canvas.getHeight() * (0.15 + 0.13 * i), "black", "center");
                if (this.itemList.getItemProperty(this.pickedItem, `hint${i}`).length > 6) {
                    this._canvas.writeTextToCanvas(this.itemList.getItemProperty(this.pickedItem, `hint${i}`).split(" ").splice(5, this.itemList.getItemProperty(this.pickedItem, `hint${i}`).length).join(" "), 20, this._canvas.getWidth() * 0.80, this._canvas.getHeight() * (0.20 + 0.13 * i), "black", "center");
                }
            }
        };
        this.canvasElement = document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
        this.itemList = new Item;
    }
    randomItemPicker() {
        this.pickedItem = MathHelper.randomNumber(0, this.itemList.getItemArrayLength() - 1);
    }
    randomItemNumber() {
        return this.itemList.getItemProperty(this.pickedItem, "era");
    }
}
class GameExplanationScreen {
    constructor() {
        this.draw = () => {
            this.canvasElement.style.backgroundImage = "url(./assets/images/backgrounds/tableBackground.jpg)";
            this.canvasElement.style.backgroundSize = "100% 100%";
            this.canvasElement.style.cursor = "url(./assets/images/FeatherCursor.png) 4 12, auto";
            this.canvasElement.style.cursor = "url(./assets/images/FeatherCursor.cur), auto";
            this._canvas.writeTextToCanvas(this.explanation1_0, 20, this._canvas.getWidth() / 32, 100, "yellow", "left");
            this._canvas.writeTextToCanvas(this.explanation1_1, 20, this._canvas.getWidth() / 32, 130, "yellow", "left");
            this._canvas.writeImageToCanvas("./assets/images/screenshots/gameScreen.png", this._canvas.getCenter().X + 130, 30);
            this._canvas.writeTextToCanvas(this.explanation2, 20, this._canvas.getWidth() / 32, 250, "yellow", "left");
            this._canvas.writeImageToCanvas("./assets/images/screenshots/eraSelectionScreen.png", this._canvas.getCenter().X + 130, 270);
            this._canvas.writeTextToCanvas(this.explanation3_0, 20, this._canvas.getWidth() / 32, 400, "yellow", "left");
            this._canvas.writeTextToCanvas(this.explanation3_1, 20, this._canvas.getWidth() / 32, 430, "yellow", "left");
            this._canvas.writeButtonToCanvas("Terug", undefined, this._canvas.getCenter().Y + 200);
        };
        this.canvasElement = document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
        this.explanation1_0 = "Het doel van het spel is om zoveel mogelijk voorwerpen op te graven.";
        this.explanation1_1 = "Dat doe je door meerdere keren te klikken op de gaten.";
        this.explanation2 = "Hierna krijg je de keuze om het goede tijdvak bij het voorwerp te zoeken.";
        this.explanation3_0 = "Als je het juiste antwoord hebt gekozen krijg je een punt erbij, ";
        this.explanation3_1 = "als je het fout hebt krijg je het goede antwoord te zien.";
    }
}
class GameScreen {
    constructor() {
        this.hole = new Array();
        this.score = 0;
        this.holeUrl = ["./assets/images/hole1.png", ""];
        this.draw = () => {
            for (let i = 0; i < this.hole.length; i++) {
                this.hole[i].draw();
            }
            this.canvasElement.style.backgroundImage = "url(./assets/images/backgrounds/groundBackground.png)";
            this.canvasElement.style.backgroundSize = "auto";
            this.canvasElement.style.cursor = "url(./assets/images/shovelCursor.png) 4 12, auto";
            this.canvasElement.style.cursor = "url(./assets/images/shovelCursor.cur), auto";
        };
        this.canvasElement = document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
        for (let index = 0; index < MathHelper.randomNumber(3, 6); index++) {
            this.hole.push(new Hole(this.canvasElement, `./assets/images/holes/hole${MathHelper.randomNumber(1, 2)}.png`, MathHelper.randomNumber(0, this._canvas.getWidth() - 200), MathHelper.randomNumber(100, this._canvas.getHeight() - 250), 130, 120, MathHelper.randomNumber(4, 6), MathHelper.randomNumber(0, 14)));
        }
    }
    ;
    getHole() {
        return this.hole;
    }
    addScoreCounter() {
        this.score++;
        document.getElementById('scoreText').innerHTML = `Je score is: ${this.score}`;
    }
    resetScore() {
        this.score = 0;
    }
    regenerateHole(numberOfHole) {
        this.hole.splice(numberOfHole, 1);
        this.hole.push(new Hole(this.canvasElement, `./assets/images/holes/hole${MathHelper.randomNumber(1, 2)}.png`, MathHelper.randomNumber(0, this._canvas.getWidth() - 200), MathHelper.randomNumber(100, this._canvas.getHeight() - 250), 130, 120, MathHelper.randomNumber(4, 6), MathHelper.randomNumber(0, 14)));
    }
}
class HighscoreScreen {
    constructor() {
        this.draw = () => {
            this.canvasElement.style.backgroundImage = "url(./assets/images/backgrounds/tableBackground.jpg)";
            this.canvasElement.style.backgroundSize = "100% 100%";
            this.canvasElement.style.cursor = "url(./assets/images/FeatherCursor.png) 4 12, auto";
            this.canvasElement.style.cursor = "url(./assets/images/FeatherCursor.cur), auto";
            this._canvas.writeTextToCanvas(`Je hebt een score van ${Number(document.getElementById("scoreText").innerHTML.substring('Je score is: '.length))} behaald!`, 45, this._canvas.getCenter().X, 100, "yellow");
            this._canvas.writeButtonToCanvas("Probeer opnieuw", undefined, this._canvas.getCenter().Y + 200);
            this._cookieAdd.checkCookie('highscore', Number(document.getElementById("scoreText").innerHTML.substring('Je score is: '.length)));
            console.log(document.getElementById("scoreText").innerHTML.substring('Je score is: '.length));
        };
        this.canvasElement = document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
        this._cookieAdd = new CookieAdd;
    }
}
class StartScreen {
    constructor() {
        this.draw = () => {
            for (let i = 1; i < 6; i++) {
                document.getElementById(`place${i}`).innerHTML = '';
            }
            this.canvasElement.style.backgroundImage = "url(./assets/images/backgrounds/tableBackground.jpg)";
            this.canvasElement.style.backgroundSize = "100% 100%";
            this.canvasElement.style.cursor = "url(./assets/images/FeatherCursor.png), auto";
            this.canvasElement.style.cursor = "url(./assets/images/FeatherCursor.cur), auto";
            this._canvas.writeImageToCanvas("./assets/images/Cavator_logo/CavatorLogo.png", this._canvas.getCenter().X - 200, this._canvas.getCenter().Y - 300);
            this._canvas.writeButtonToCanvas("Speel", undefined, this._canvas.getCenter().Y + 150);
            this._canvas.writeButtonToCanvas("Speluitleg", undefined, this._canvas.getCenter().Y + 200);
            this._canvas.writeButtonToCanvas("Uitleg tijdvakken", undefined, this._canvas.getCenter().Y + 250);
        };
        this.canvasElement = document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
    }
}
//# sourceMappingURL=app.js.map
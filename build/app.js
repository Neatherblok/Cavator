class Game {
    constructor() {
        this.screen = ["this.Startscreen.draw()", "this.Gamescreen.draw()", "this.EraSelectionscreen.draw()", "this.HighscoreScreen.draw(this.Gamescreen.getScore())"];
        this.sounds = ['buttonHitSFX', 'digging1', 'digging2', 'digging3', 'digging4', 'digging5'];
        this.currentGameScreenNumber = 0;
        this.time = 151;
        this.draw = () => {
            this._canvas.clear();
            eval(this.screen[this.currentGameScreenNumber]);
            console.log(this.time);
        };
        this.nextScreen = (event) => {
            if (this.currentGameScreenNumber == 3) {
                if (event.clientX >= (this._canvas.getCenter().X - 111) && event.clientX <= (this._canvas.getCenter().X + 111)
                    && event.clientY >= (this._canvas.getCenter().Y + 200) && event.clientY <= this._canvas.getCenter().Y + 239) {
                    let audioLink = "./assets/sounds/sfx/buttonHitSFX.mp3";
                    let audio = new Audio(audioLink);
                    audio.play();
                    this.currentGameScreenNumber = 0;
                    this.resetCounter();
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
                            this.currentGameScreenNumber = 2;
                            this.Gamescreen.regenerateHole(i);
                        }
                        else {
                            this.Gamescreen.getHole()[i].lowerClicks();
                        }
                    }
                }
                this.draw();
            }
            else if (this.currentGameScreenNumber == 0) {
                if (event.clientX >= (this._canvas.getCenter().X - 111) && event.clientX <= (this._canvas.getCenter().X + 111)
                    && event.clientY >= (this._canvas.getCenter().Y + 200) && event.clientY <= this._canvas.getCenter().Y + 239) {
                    let audioLink = "./assets/sounds/sfx/buttonHitSFX.mp3";
                    let audio = new Audio(audioLink);
                    audio.play();
                    this.timer();
                    this.currentGameScreenNumber = 1;
                    this.draw();
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
            }
        }, 1000);
    }
    resetCounter() {
        this.time = 151;
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
            return { Xmin: this._canvas.getWidth() * 0.017, Xmax: this._canvas.getWidth() * 0.017 + 102, Ymin: this._canvas.getHeight() - 200, Ymax: this._canvas.getHeight() - 83 };
        }
        else if (eraNumber == 2) {
            return { Xmin: this._canvas.getWidth() * 0.117, Xmax: this._canvas.getWidth() * 0.117 + 102, Ymin: this._canvas.getHeight() - 200, Ymax: this._canvas.getHeight() - 83 };
        }
        else if (eraNumber == 3) {
            return { Xmin: this._canvas.getWidth() * 0.217, Xmax: this._canvas.getWidth() * 0.217 + 102, Ymin: this._canvas.getHeight() - 200, Ymax: this._canvas.getHeight() - 83 };
        }
        else if (eraNumber == 4) {
            return { Xmin: this._canvas.getWidth() * 0.317, Xmax: this._canvas.getWidth() * 0.317 + 102, Ymin: this._canvas.getHeight() - 200, Ymax: this._canvas.getHeight() - 83 };
        }
        else if (eraNumber == 5) {
            return { Xmin: this._canvas.getWidth() * 0.417, Xmax: this._canvas.getWidth() * 0.417 + 102, Ymin: this._canvas.getHeight() - 200, Ymax: this._canvas.getHeight() - 83 };
        }
        else if (eraNumber == 6) {
            return { Xmin: this._canvas.getWidth() * 0.517, Xmax: this._canvas.getWidth() * 0.517 + 102, Ymin: this._canvas.getHeight() - 200, Ymax: this._canvas.getHeight() - 83 };
        }
        else if (eraNumber == 7) {
            return { Xmin: this._canvas.getWidth() * 0.617, Xmax: this._canvas.getWidth() * 0.617 + 102, Ymin: this._canvas.getHeight() - 200, Ymax: this._canvas.getHeight() - 83 };
        }
        else if (eraNumber == 8) {
            return { Xmin: this._canvas.getWidth() * 0.717, Xmax: this._canvas.getWidth() * 0.717 + 102, Ymin: this._canvas.getHeight() - 200, Ymax: this._canvas.getHeight() - 83 };
        }
        else if (eraNumber == 9) {
            return { Xmin: this._canvas.getWidth() * 0.817, Xmax: this._canvas.getWidth() * 0.817 + 102, Ymin: this._canvas.getHeight() - 200, Ymax: this._canvas.getHeight() - 83 };
        }
        else if (eraNumber == 10) {
            return { Xmin: this._canvas.getWidth() * 0.917, Xmax: this._canvas.getWidth() * 0.917 + 102, Ymin: this._canvas.getHeight() - 200, Ymax: this._canvas.getHeight() - 83 };
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
                    user = prompt("Geef een gamenaam in:", "");
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
                    name: "Een mammoet",
                    source: "./assets/images/items/1mammoet.png",
                    era: 1,
                    hint1: "De mammoet is een al uitgestorven diersoort.",
                    hint2: "Het is familie van de olifant.",
                    hint3: "Het had een dikke vacht, voor tegen de kou."
                },
                {
                    name: "Stonehenge",
                    source: "./assets/images/items/1stonehenge.png",
                    era: 1,
                    hint1: "Het is een oud monument gelegen in Engeland.",
                    hint2: "Stonehenge diende vroeger als begraafplaats.",
                    hint3: "Het komt uit de Jonge Steentijd."
                },
                {
                    name: "Grotschilderingen",
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
                    name: "het zwaard van Sint Cosmas en Damianus",
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
                    name: "een viking zwaard.",
                    source: "./assets/images/items/3viking_zwaard.png",
                    era: 3,
                    hint1: "Het zwaard is gevonden in Skaftárhreppur, IJsland.",
                    hint2: "Het is misschien het zwaard van de eerste inwoner van IJsland.",
                    hint3: "Het zwaard werd waarschijnlijk gebruikt voor een begrafenis.",
                },
                {
                    name: "een vikingschip",
                    source: "./assets/images/items/3vikingschip",
                    era: 3,
                    hint1: "Het werd gebruikt voor transport, handel en ontdekkingsreizen.",
                    hint2: "Ook werden ze gebruikt in oorlogsmissies en plunderingen.",
                    hint3: "De vikingschepen werden gebouwd door Scandinavische vikings."
                },
                {
                    name: "de drukpers",
                    source: "./assets/images/items/",
                    era: 3,
                    hint1: "Hiermee konden boeken gekopieerd worden en dus makkelijker verspreid worden",
                    hint2: "Werd gebruikt door Maarten Luther om zijn ideeen te verspreiden.",
                    hint3: "Hiermee werd ook de Gutenbergbijbel gemaakt."
                },
                {
                    name: "",
                    source: "./assets/images/items/",
                    era: 3,
                    hint1: "",
                    hint2: "",
                    hint3: ""
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
                    name: "het spinnewiel",
                    source: "./assets/images/items/",
                    era: 4,
                    hint1: "",
                    hint2: "",
                    hint3: ""
                },
                {
                    name: "een getijdenmolen",
                    source: "./assets/images/items/",
                    era: 4,
                    hint1: "Het wordt aangedreven door het tij",
                    hint2: "Er zijn nog steeds resten te vinden in Zeeland",
                    hint3: "Het wordt gebruikt in combinatie met het waterrad"
                },
                {
                    name: "het waterrad",
                    source: "./assets/images/items/",
                    era: 4,
                    hint1: "Door het waterrad kon overgestapt worden van mankracht naar waterkracht",
                    hint2: "Ze zijn aangelegd in heel Midden-Europa",
                    hint3: "Ze liggen vaak in de buurt bij getijdenmolens"
                },
                {
                    name: "een hoogoven",
                    source: "./assets/images/items/",
                    era: 4,
                    hint1: "",
                    hint2: "",
                    hint3: ""
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
                    source: "./assets/images/items/7stoommachine.png",
                    era: 8,
                    hint1: "De stoommachine werd ontworpen door Thomas Savery en Thomas Newcomen.",
                    hint2: "Het werkt doordat stoom voor beweging zorgt.",
                    hint3: "Deze verbeteringen maakte de stoommachine tot wat het nu is."
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
        this._context.font = `${aFontSize}px galiver-sans`;
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
            this.canvasElement.style.backgroundImage = "url(./assets/images/backgrounds/tableBackground.jpg)";
            this.canvasElement.style.backgroundSize = "100% 100%";
            this.canvasElement.style.cursor = "url(./assets/images/FeatherCursor.png), auto";
            this._canvas.writeTextToCanvas(`Je hebt ${this.itemList.getItemProperty(this.pickedItem, "name")} gevonden!`, 45, this._canvas.getCenter().X, 100, "yellow");
            this._canvas.writeImageToCanvas(this.itemList.getItemProperty(this.pickedItem, "source"), this._canvas.getCenter().X - 150, this._canvas.getCenter().Y - 200);
            this._canvas.writeImageToCanvas("./assets/images/eraLogos/era1.png", this._canvas.getWidth() * 0.017, this._canvas.getHeight() - 200);
            this._canvas.writeImageToCanvas("./assets/images/eraLogos/era2.png", this._canvas.getWidth() * 0.117, this._canvas.getHeight() - 200);
            this._canvas.writeImageToCanvas("./assets/images/eraLogos/era3.png", this._canvas.getWidth() * 0.217, this._canvas.getHeight() - 200);
            this._canvas.writeImageToCanvas("./assets/images/eraLogos/era4.png", this._canvas.getWidth() * 0.317, this._canvas.getHeight() - 200);
            this._canvas.writeImageToCanvas("./assets/images/eraLogos/era5.png", this._canvas.getWidth() * 0.417, this._canvas.getHeight() - 200);
            this._canvas.writeImageToCanvas("./assets/images/eraLogos/era6.png", this._canvas.getWidth() * 0.517, this._canvas.getHeight() - 200);
            this._canvas.writeImageToCanvas("./assets/images/eraLogos/era7.png", this._canvas.getWidth() * 0.617, this._canvas.getHeight() - 200);
            this._canvas.writeImageToCanvas("./assets/images/eraLogos/era8.png", this._canvas.getWidth() * 0.717, this._canvas.getHeight() - 200);
            this._canvas.writeImageToCanvas("./assets/images/eraLogos/era9.png", this._canvas.getWidth() * 0.817, this._canvas.getHeight() - 200);
            this._canvas.writeImageToCanvas("./assets/images/eraLogos/era10.png", this._canvas.getWidth() * 0.917, this._canvas.getHeight() - 200);
            this._canvas._context.lineWidth = 2;
            this._canvas._context.beginPath();
            this._canvas._context.moveTo(this._canvas.getWidth() * 0.014, this._canvas.getHeight() - 80);
            this._canvas._context.lineTo(this._canvas.getWidth() * 0.985, this._canvas.getHeight() - 80);
            this._canvas._context.moveTo(this._canvas.getWidth() * 0.014, this._canvas.getHeight() - 79);
            this._canvas._context.lineTo(this._canvas.getWidth() * 0.985, this._canvas.getHeight() - 79);
            this._canvas._context.stroke();
            this._canvas._context.strokeStyle = "yellow";
            this._canvas._context.strokeRect(this._canvas.getWidth() * 0.70 - 1, this._canvas.getHeight() * 0.18 - 1, 422, this._canvas.getHeight() * 0.5 + 2);
            this._canvas._context.fillStyle = "grey";
            this._canvas._context.fillRect(this._canvas.getWidth() * 0.70, this._canvas.getHeight() * 0.18, 420, this._canvas.getHeight() * 0.5);
            this._canvas.writeTextToCanvas('Hints', 40, this._canvas.getWidth() * 0.87, this._canvas.getHeight() * 0.24, "black", "right");
            for (let i = 1; i <= 3; i++) {
                this._canvas.writeTextToCanvas(`• ${this.itemList.getItemProperty(this.pickedItem, `hint${i}`).split(" ").splice(0, 5).join(" ")}`, 20, this._canvas.getWidth() * 0.83, this._canvas.getHeight() * (0.15 + 0.13 * i), "black", "center");
                if (this.itemList.getItemProperty(this.pickedItem, `hint${i}`).length > 6) {
                    this._canvas.writeTextToCanvas(this.itemList.getItemProperty(this.pickedItem, `hint${i}`).split(" ").splice(5, this.itemList.getItemProperty(this.pickedItem, `hint${i}`).length).join(" "), 20, this._canvas.getWidth() * 0.83, this._canvas.getHeight() * (0.20 + 0.13 * i), "black", "center");
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
class ExplanationScreen {
    constructor() {
        this.draw = () => {
            this._canvas.writeTextToCanvas(this.explanation, 20, this._canvas.getCenter().X, this._canvas.getCenter().Y);
            this._canvas.writeButtonToCanvas("Terug naar titelscherm", undefined, this._canvas.getCenter().Y + 200);
        };
        this.canvasElement = document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
        this.explanation = "Het doel om het spel is om zoveel mogelijk voorwerpen op te graven";
    }
}
class GameScreen {
    constructor(imageUrl) {
        this.hole = new Array();
        this.score = 0;
        this.draw = () => {
            for (let i = 0; i < this.hole.length; i++) {
                this.hole[i].draw();
            }
            this._canvas.writeTextToCanvas(`Score: ${this.score}`, 20, 75, 75, "white", "left");
            this.canvasElement.style.backgroundImage = "url(./assets/images/backgrounds/groundBackground.png)";
            this.canvasElement.style.backgroundSize = "auto";
            this.canvasElement.style.cursor = "url(./assets/images/shovelCursor.png), auto";
        };
        this.imageUrl = imageUrl;
        this.canvasElement = document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
        for (let index = 0; index < MathHelper.randomNumber(3, 6); index++) {
            this.hole.push(new Hole(this.canvasElement, this.imageUrl, MathHelper.randomNumber(0, this._canvas.getWidth() - 200), MathHelper.randomNumber(0, this._canvas.getHeight() - 200), 130, 120, MathHelper.randomNumber(4, 6)));
        }
    }
    getHole() {
        return this.hole;
    }
    addScoreCounter() {
        this.score++;
    }
    getScore() {
        return this.score;
    }
    resetScore() {
        this.score = 0;
    }
    regenerateHole(numberOfHole) {
        this.hole.splice(numberOfHole, 1);
        this.hole.push(new Hole(this.canvasElement, this.imageUrl, MathHelper.randomNumber(0, this._canvas.getWidth() - 200), MathHelper.randomNumber(0, this._canvas.getHeight() - 200), 130, 120, MathHelper.randomNumber(0, 2)));
    }
}
class HighscoreScreen {
    constructor() {
        this.draw = (score) => {
            this.canvasElement.style.backgroundImage = "url(./assets/images/backgrounds/tableBackground.jpg)";
            this.canvasElement.style.backgroundSize = "100% 100%";
            this.canvasElement.style.cursor = "url(./assets/images/FeatherCursor.png), auto";
            this._canvas.writeTextToCanvas(`Je hebt een score van ${score} behaald!`, 45, this._canvas.getCenter().X, 100, "yellow");
            this._canvas.writeButtonToCanvas("Probeer opnieuw", undefined, this._canvas.getCenter().Y + 200);
            this._cookieAdd.checkCookie('highscore', score);
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
            this.canvasElement.style.backgroundImage = "url(./assets/images/backgrounds/groundBackground.png)";
            this.canvasElement.style.backgroundSize = "auto";
            this.canvasElement.style.cursor = "url(./assets/images/FeatherCursor.png), auto";
            this._canvas.writeImageToCanvas("./assets/images/Cavator_logo/CavatorLogo.png", this._canvas.getCenter().X - 200, this._canvas.getCenter().Y - 300);
            this._canvas.writeButtonToCanvas("Speel", undefined, this._canvas.getCenter().Y + 200);
        };
        this.canvasElement = document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
    }
}
//# sourceMappingURL=app.js.map
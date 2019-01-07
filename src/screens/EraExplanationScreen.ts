class EraExplanationScreen{

    protected readonly canvasElement: HTMLCanvasElement;
    protected readonly _canvas: CanvasHelper;
    
    public constructor(){
        this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);

    }

    //draws explanationscreen
    public draw = () => {
        this.canvasElement.style.backgroundImage = "url(./assets/images/backgrounds/tableBackground.jpg)";
        this.canvasElement.style.backgroundSize = "100% 100%"
        this.canvasElement.style.cursor = "url(./assets/images/FeatherCursor.png), auto";
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
        
        this._canvas.writeTextToCanvas("Tijd van jagers en boeren",15,150,50,"yellow","left");
        this._canvas.writeTextToCanvas("Prehistorie tot 3000 v. Chr.",15,150,70,"yellow","left");
        this._canvas.writeTextToCanvas("De levenswijze van jagers-verzamelaars",15,150,90,"yellow","left");
        this._canvas.writeTextToCanvas("Het ontstaan van landbouwsamenlevingen",15,150,110,"yellow","left");

        this._canvas.writeTextToCanvas("Tijd van Grieken en Romeinen",15,150,175,"yellow","left");
        this._canvas.writeTextToCanvas("3000 v. Chr. tot 500",15,150,195,"yellow","left");
        this._canvas.writeTextToCanvas("De groei van het Romeinse rijk",15,150,215,"yellow","left");
        this._canvas.writeTextToCanvas("Ontwikkeling van christendom en jodendom",15,150,235,"yellow","left");

        this._canvas.writeTextToCanvas("Tijd van monniken en ridders",15,150,300,"yellow","left");
        this._canvas.writeTextToCanvas("500 tot 1000",15,150,320,"yellow","left");
        this._canvas.writeTextToCanvas("De verspreiding van het christendom",15,150,340,"yellow","left");
        this._canvas.writeTextToCanvas("Agrarische cultuur via het hofstelsel",15,150,360,"yellow","left");

        this._canvas.writeTextToCanvas("Tijd van steden en staten",15,150,425,"yellow","left");
        this._canvas.writeTextToCanvas("1000 tot 1500",15,150,445,"yellow","left");
        this._canvas.writeTextToCanvas("De opkomst van handel en ambacht",15,150,465,"yellow","left");
        this._canvas.writeTextToCanvas("Begin van staatsvorming en centralisatie",15,150,485,"yellow","left");


        this._canvas.writeTextToCanvas("Tijd van ontdekkers en hervormers",15,600,50,"yellow","left");
        this._canvas.writeTextToCanvas("1500 tot 1600",15,600,70,"yellow","left");
        this._canvas.writeTextToCanvas("De Opstand in de Nederlanden",15,600,90,"yellow","left");
        this._canvas.writeTextToCanvas("De protestantse reformatie",15,600,110,"yellow","left");

        this._canvas.writeTextToCanvas("Tijd van regenten en vorsten",15,600,175,"yellow","left");
        this._canvas.writeTextToCanvas("1600 tot 1700",15,600,195,"yellow","left");
        this._canvas.writeTextToCanvas("De Gouden Eeuw",15,600,215,"yellow","left");
        this._canvas.writeTextToCanvas("Het begin van een wereldeconomie",15,600,235,"yellow","left");

        this._canvas.writeTextToCanvas("Tijd van pruiken en revoluties",15,600,300,"yellow","left");
        this._canvas.writeTextToCanvas("1700 tot 1800",15,600,320,"yellow","left");
        this._canvas.writeTextToCanvas("De Verlichting",15,600,340,"yellow","left");
        this._canvas.writeTextToCanvas("Democratische revoluties in Europa",15,600,360,"yellow","left");

        this._canvas.writeTextToCanvas("Tijd van burgers en stoommachines",15,600,425,"yellow","left");
        this._canvas.writeTextToCanvas("1800 tot 1900",15,600,445,"yellow","left");
        this._canvas.writeTextToCanvas("De industriële revolutie",15,600,465,"yellow","left");
        this._canvas.writeTextToCanvas("Verdergaande democratisering",15,600,485,"yellow","left");


        this._canvas.writeTextToCanvas("Tijd van wereldoorlogen",15,1050,300,"yellow","left");
        this._canvas.writeTextToCanvas("1900 tot 1950",15,1050,320,"yellow","left");
        this._canvas.writeTextToCanvas("Het voeren van twee wereldoorlogen",15,1050,340,"yellow","left");
        this._canvas.writeTextToCanvas("De Duitse bezetting van Nederland",15,1050,360,"yellow","left");

        this._canvas.writeTextToCanvas("Tijd van televisie en computers",15,1050,425,"yellow","left");
        this._canvas.writeTextToCanvas("1950 tot nu",15,1050,445,"yellow","left");
        this._canvas.writeTextToCanvas("De dreiging van een atoomoorlog",15,1050,465,"yellow","left");
        this._canvas.writeTextToCanvas("De toenemende westerse welvaart",15,1050,485,"yellow","left");
        
        this._canvas.writeButtonToCanvas("Terug", undefined, this._canvas.getCenter().Y + 250);
    }
}
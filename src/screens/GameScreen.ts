class GameScreen {
    protected readonly canvasElement: HTMLCanvasElement;
    protected readonly _canvas: CanvasHelper;
    //keeps the information of holes in an array
    private hole = new Array<Hole>();
    //keeps the score in the game
    private score: number = 0;
    private imageUrl: string;

    public constructor(imageUrl: string) {
        this.imageUrl = imageUrl
        this.canvasElement = <HTMLCanvasElement>document.getElementById('canvas');
        this._canvas = new CanvasHelper(this.canvasElement);
            //generates random amount of holes between 3 and 6 and push them in an array
        for (let index = 0; index < MathHelper.randomNumber(3, 6); index++) {
            this.hole.push(new Hole(this.canvasElement, this.imageUrl, MathHelper.randomNumber(0, this._canvas.getWidth() - 200), MathHelper.randomNumber(0, this._canvas.getHeight() - 200), 130, 120, MathHelper.randomNumber(0, 2)))
        }
    }

    //draws gamescreen
    public draw = () => {
            //draws every hole on the canvas
        for (let i = 0; i < this.hole.length; i++) {
            this.hole[i].draw();
        }
            //draws current score on canvas
        this._canvas.writeTextToCanvas(`Score: ${this.score}`, 20, 75, 75, "white", "left");
        this.canvasElement.style.backgroundImage = "url(./assets/images/backgrounds/groundBackground.png)";
        this.canvasElement.style.backgroundSize = "auto";
        this.canvasElement.style.cursor = "url(./assets/images/shovelCursor.png), auto"
    }

        //function returns every hole
    public getHole() {
        return this.hole;
    }

        //function that add point to score counter
    public addScoreCounter() {
        this.score++;
    }

        //function that returns current score
    public getScore() {
        return this.score;
    }

        //function that reset score to 0
    public resetScore() {
        this.score = 0;
    }

        //function that deletes and add new hole
    public regenerateHole(numberOfHole: number) {
        this.hole.splice(numberOfHole, 1);
        this.hole.push(new Hole(this.canvasElement, this.imageUrl, MathHelper.randomNumber(0, this._canvas.getWidth() - 200), MathHelper.randomNumber(0, this._canvas.getHeight() - 200), 130, 120, MathHelper.randomNumber(0, 2)))
    }
}
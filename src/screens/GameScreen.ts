class GameScreen extends Game{
    private holes: Holes;

    public constructor() {
        super();
        this.holes = new Holes(this.canvasElement, "..\assets\images\hole1.png", 100, 100, 32, 32);
    }

    public draw = () => {
        this.holes.draw();
    }
}
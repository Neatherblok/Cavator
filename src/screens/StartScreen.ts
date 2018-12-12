///<reference path="../Game.ts"/>

class StartScreen extends Game {

    public constructor(){
        super();
    }

    public draw = () => {
        this._canvas.writeTextToCanvas("Cavator", 30, this._canvas.getCenter().X, this._canvas.getCenter().Y, "black");
    }

}
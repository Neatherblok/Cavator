class ScreenSelector {

    private screen: string[] = ["this.Startscreen.draw()", "this.Gamescreen.draw()", "this.EraSelectionscreen.draw()"];
    private currentGameScreenNumber: number = 0;
    private currentGameScreen: any = eval(this.screen[this.currentGameScreenNumber])

    public constructor(_gameScreenNumber: number){
        this.currentGameScreenNumber = _gameScreenNumber
    }

    public current(){
        return this.currentGameScreen;
    }

    public nextScreen(){
        this.currentGameScreenNumber++
        console.log(this.currentGameScreenNumber)
    }

}
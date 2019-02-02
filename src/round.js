class Round{
    constructor(data){
        this.gameData = data;
        this.gameQuestions;
        this.gameround = "One";
    }
    setupround(){
        board = new Board(this.gameQuestions)
        wheel.SetWheelValue()
        this.parseDataForGame()
        board.grabPhraseForRound()
        board.placeClueOnTheGame()
        board.placePhraseOnBoard()
    }
    displayRound(){
        domUpdates.displayRound(this.gameround)
    }
    changeRound(){
        switch(this.gameround){
            case "One":
            this.gameround = "Two";
            wheel.SetWheelValue()
            this.displayRound();
            break;
            case "Two": 
            this.gameround = "Three"
            wheel.SetWheelValue()
            this.displayRound()
            break;
            case "Three": 
            this.gameround = "Four"
            wheel.SetWheelValue()
            this.displayRound()
            break;
            case "Four": 
            this.gameround = "Bonus"
            wheel.SetWheelValue()
            this.displayRound()
        }
    }
    parseDataForGame(){
        this.gameQuestions = Object.keys(this.gameData).reduce((acc, round) => {
            let array = this.gameData[round].puzzle_bank
                for (let i =  array.length - 1; i > 0; i--) {
                    const r = Math.floor(Math.random() * (i + 1));
                    [array[i], array[r]] = [array[r], array[i]];
                } 
            acc.push(array.pop());
            return acc;
        }, [])
    }
}
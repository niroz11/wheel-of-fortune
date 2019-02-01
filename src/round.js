class Round{
    constructor(data){
        this.gameData = data;
        this.gameQuestions;
        this.gameround = "One";
    }
    setupround(){
        wheel.SetWheelValue()
        this.parseDataForGame()
    }
    displayRound(){
        domUpdates.displayRound(this.gameround)
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
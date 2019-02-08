import data from "./data.js"
import $ from 'jquery';
import domUpdates from "./Dom.js";

export default class Round{
    constructor(data){
        this.gameData = data;
        this.gameQuestions;
        this.gameround = "One";
        this.wheel;
    }
    setupround(wheel, board){
        this.parseDataForGame()
        this.startNewRound(wheel, board)   
    }
    startNewRound(wheel, board){
        this.displayRound()
        wheel.SetWheelValue()
        domUpdates.updateAllScore()
        board.grabPhraseForRound(this.gameQuestions)
        board.placeClueOnTheGame()
        board.placePhraseOnBoard() 
        console.log(board.roundPhrase)
    }
    resetRound(game){
            domUpdates.resetRound()
        if(this.gameround === "Four"){
            game.bonus = new Bonus()
            game.bonus.grabPlayer(game)
            game.bonus.grabPhrase()
            game.bonus.giveLetters()
            domUpdates.displayBonusOption(game.bonus.bonusPlayer)
            domUpdates.displayRoundPhrase(game.bonus.bonusPhrase)
            domUpdates.displayRoundClue(game.bonus.bonusPhrase)
            domUpdates.lettersPick(game.bonus.lettersGiven)
            game.bonus.displayPickLetter()
            console.log(game.bonus.bonusPhrase)
        }else{
            this.changeRound()
            game.board.usedLetter = []
            this.startNewRound(game.wheel, game.board)
        }
    }
    displayRound(){
        domUpdates.displayRound(this.gameround)
    }
    changeRound(game){
        switch(this.gameround){
            case "One":
            this.gameround = "Two";
            break;
            case "Two": 
            this.gameround = "Three"
            break;
            case "Three": 
            this.gameround = "Four"
            break;
            case "Four": 
            this.gameround = "Bonus"
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

class Bonus extends Round{
	constructor(data){
		super(data);
		this.letters = ['a','b','c','d', 'e', 'f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		this.lettersGiven = [];
		this.bonusWheelValue = [1,10000,20000, 500, 5000, 30000];
		this.bonusPhrase;
        this.bonusPlayer;
        this.bonusPoint;
        this.guesses = 3;
	}
	grabPlayer(game){
		let playerPlaces = game.player.sort((numa, numb) => {
			return numb.bank - numa.bank
        })
        domUpdates.displayWinner(playerPlaces)
        this.bonusPlayer = playerPlaces.shift()
	}
	grabPhrase(){
		let numb = Math.floor(Math.random() * 23)
		this.bonusPhrase = data.puzzles.four_word_answers.puzzle_bank[numb]
	}
	giveLetters(){
		for(var i = 0; i < 5; i++){
            let numb = Math.floor(Math.random() * this.letters.length)
			this.lettersGiven.push(this.letters.splice(numb, 1).join(""))
		}
	}
	displayPickLetter(){
        $(this.lettersGiven).each((i, letter) => {
            domUpdates.flipCard(letter); 
        })
        setTimeout(() => {
            domUpdates.dispalyBonusWheel()
        }, 2000)
    }
	BonusRoundWheel(){
        let num = Math.floor(Math.random() * 6)
        this.bonusPoint = this.bonusWheelValue[num]
		domUpdates.dispalyBonusWheel()
    }
    displayPlayersPickLetter(letter){
        let array = letter.split('')
        $(array).each((i, letter) => {
            domUpdates.flipCard(letter); 
        })
    }
	bonusCheckAnswer(input){
       if( input.toLowerCase() === this.bonusPhrase.correct_answer.toLowerCase()){
           this.bonusPlayer.bank += this.bonusPoint
           domUpdates.displayEnd(this.bonusPlayer)
           $(".guess-bonus-section").remove()
       }else if(input !== this.bonusPhrase.correct_answer && this.guesses > 1){
            this.guesses--
            $(".guess-bonus-section").remove()
            domUpdates.displayBonusphrase(this.guesses)
       }else{
            $(".guess-bonus-section").remove()
           domUpdates.displayEnd(this.bonusPlayer)
       }
	 }
}
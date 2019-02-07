import Game from "./Game.js";
import data from "./data.js"
import Wheel from "./Wheel.js";
import Board from "./Board.js";
import $ from 'jquery';
import domUpdates from "./Dom.js";
import Bonus from "./BonusRound.js";

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
        board.grabPhraseForRound(this)
        board.placeClueOnTheGame()
        board.placePhraseOnBoard() 
        console.log(board.roundPhrase)
    }
    resetRound(game){
        if(this.gameround === "Four"){
            game.bonus = new Bonus()
            game.bonus.grabPlayer(game)
            game.bonus.grabPhrase()
            game.bonus.giveLetters()
            domUpdates.displayRoundPhrase(game.bonus.bonusPhrase)
            domUpdates.displayRoundClue(game.bonus.bonusPhrase)
            domUpdates.lettersPick(game.bonus.lettersGiven)
            console.log(game.bonus.lettersGiven)
        }else{
            this.changeRound()
            domUpdates.resetRound()
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
        console.log("hello world how re ho", this.gameQuestions)
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
	}
	grabPlayer(game){
		this.bonusPlayer = game.player.sort((numa, numb) => {
			return numb.bank - numa.bank
		}).shift()
	}
	grabPhrase(){
		let numb = Math.floor(Math.random() * 24)
		this.bonusPhrase = data.puzzles.four_word_answers.puzzle_bank[numb]
	}
	giveLetters(){
		for(var i = 0; i < 5; i++){
            let numb = Math.floor(Math.random() * this.letters.length)
			this.lettersGiven.push(this.letters.splice(numb, 1).join(""))
		}
	}
	// displayMethod(){
	// 	domUpdates.
	// }

	// displayWheel(){
	// 	domUpdates
	// }
	// displayPlayerPick(){
	// 	domUpdates
	// }
}
import domUpdates from "./Dom.js";
import $ from "jquery";
class Board{
	constructor(){
		this.roundData;
		this.roundPhrase;
		this.usedLetters = [];
		this.vowels = ["e","u","i","o","a"]
	}
	grabPhraseForRound(round){
		this.roundData = (round.gameQuestions.shift())
		this.roundPhrase = this.roundData.correct_answer
	}
	placePhraseOnBoard(){
		domUpdates.displayRoundPhrase(this.roundData)
	}
	placeClueOnTheGame(){
		domUpdates.displayRoundClue(this.roundData)
	}
	checkLetter(game, letter){
		if(this.usedLetters.includes(letter) || this.vowels.includes(letter)){
			domUpdates.pickLetterAlert()
		}else if(this.roundPhrase.toLowerCase().includes(letter)  && !this.vowels.includes(letter)){
			game.player[game.playerInPlay].account += game.wheel.spinValue;
			this.usedLetters.push(letter);
			$('.display-used-letters').append(letter);
			domUpdates.flipCard(letter)
			domUpdates.removeLetterDisplay()
		}else{
			game.changePlayer()
			this.usedLetters.push(letter);
			$('.display-used-letters').append(letter);
			domUpdates.removeLetterDisplay()
		}
		domUpdates.updateScore(game);
	}
	checkVowel(game, letter){
		game.player[game.playerInPlay].account -= 100;
		if(this.usedLetters.includes(letter) || !this.vowels.includes(letter)){
			domUpdates.pickVowelAlert()
		}else if(this.roundPhrase.toLowerCase().includes(letter) && this.vowels.includes(letter)){
			this.usedLetters.push(letter);
			$('.display-used-letters').append(letter);
			domUpdates.flipCard(letter);
			domUpdates.removeVowelDisplay();
		}else{
			game.changePlayer()
			this.usedLetters.push(letter);
			$('.display-used-letters').append(letter);
			domUpdates.removeVowelDisplay();
		}
		domUpdates.updateScore(game);
	}
	checkGuessPhrase(game){
		if(this.roundPhrase.toLowerCase() === $(".guess-input").val()){
			game.player[game.playerInPlay].bank += game.player[game.playerInPlay].account

			$(game.player).each((i, player) => player.account = 0)
			game.round.resetRound(game)
		}else{
			game.changePlayer()
		}
		domUpdates.closePhraseGuess()
	}
} 

export default Board;
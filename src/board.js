import domUpdates from "./dom.js";
import $ from "jquery";
class Board{
	constructor(){
		this.roundData;
		this.roundPhrase;
		this.usedLetters = [];
		this.vowels = ["e","u","i","o","a"]
	}
	grabPhraseForRound(round){
		this.roundData =(round.gameQuestions.shift())
		this.roundPhrase = this.roundData.correct_answer.split("-").join('')
	}
	placePhraseOnBoard(){
		let index = 0
		switch(this.roundData.number_of_words){
			case 1:
			let centerText = 14 - this.roundData.correct_answer.length;
			index = Math.floor(centerText/2 + 12);
			break;
			case 2:
			if(this.roundData.correct_answer.length > 15){
				let centerText = 14 - this.roundData.correct_answer.length;
				index = Math.floor(centerText/2 + 12);
			}else{
				// make equation to split word to two array
			}
			break;
			case 3:
			// figure out equation for 3 words
			break;
			case 4:
			// figure out equation for 4 words
			break;
		}

		domUpdates.displayRoundPhrase(this, this.roundData, index)
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
		if(this.usedLetters.includes(letter) || !this.vowels.includes(letter)){
			domUpdates.pickVowelAlert()
		}else if(this.roundPhrase.toLowerCase().includes(letter) && this.vowels.includes(letter)){
			game.player[game.playerInPlay].account -= 100;
			this.usedLetters.push(letter);
			$('.display-used-letters').append(letter);
			domUpdates.flipCard(letter);
			domUpdates.removeVowelDisplay();
		}else{
			game.player[game.playerInPlay].account -= 100;
			alert("check vowel you got it wrong");
			this.usedLetters.push(letter);
			$('.display-used-letters').append(letter);
			domUpdates.removeVowelDisplay();
		}
		domUpdates.updateScore(game);
	}

	checkGuessPhrase(){
		return true;
	}
	checkPhraseIsCompleted(){
		return true;
	}
	displayLetter(){
		return true;
	}
} 

export default Board;
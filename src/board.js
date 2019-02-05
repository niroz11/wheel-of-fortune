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
			// figure out equation for two word
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
		console.log("game", game)
		console.log("letter", letter)
		console.log("used letters", this.usedLetters)
		if(!this.usedLetters.includes(letter)){
			$('.display-used-letters').append(letter);
		}
		if(this.usedLetters.includes(letter)){
			alert("Pick another letter");
		}else if(this.roundPhrase.toLowerCase().includes(letter)  && !this.vowels.includes(letter)){
			game.player[game.playerInPlay].account += game.wheel.spinValue;
			alert("check letter right answer working")
			this.usedLetters.push(letter);
			domUpdates.removeLetterDisplay()
		}else{
			game.changePlayer()
			alert("check letter everything is wrong working")
			this.usedLetters.push(letter);
			domUpdates.removeLetterDisplay()
		}
		console.log(game.wheel.currentWheelValue)
		console.log(game.player[0].account)
		console.log(game.player)
	}
	checkVowel(letter){
		if(!this.usedLetters.includes(letter)){
			$('.display-used-letters').append(letter);
		}
		if(this.usedLetters.includes(letter) && this.vowels.includes(letter)){
			alert("check vowel pick another vowel working ")
		}else if(this.roundPhrase.toLowerCase().includes(letter)){
			alert("check vowel you got it right working");
			this.usedLetters.push(letter);
			domUpdates.removeVowelDisplay()
		}else{
			alert("check vowel you got it wrong");
			this.usedLetters.push(letter);
			domUpdates.removeVowelDisplay()
		}
	}

	checkGuessPhrase(){
		return true;
	}
	checkPhrase(){
		return true;
	}
	displayLetter(){
		return true;
	}
} 

export default Board;
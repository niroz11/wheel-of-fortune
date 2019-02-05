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
	checkLetter(letter){
		if(!this.usedLetters.includes(letter)){
			$('.display-used-letters').append(letter);
		}
		if(this.usedLetters.includes(letter)){
			console.log("check letter pick another working")
		}else if(this.roundPhrase.toLowerCase().includes(letter)  && !this.vowels.includes(letter)){
			console.log("check letter right answer working")
			this.usedLetters.push(letter);
		}else{
			console.log("check letter everything is wrong working")
			this.usedLetters.push(letter);
		}
	}
	checkVowel(letter){
		if(!this.usedLetters.includes(letter)){
			$('.display-used-letters').append(letter);
		}
		if(this.usedLetters.includes(letter) && this.vowels.includes(letter)){
			console.log("check vowel pick another vowel working ")
		}else if(this.roundPhrase.toLowerCase().includes(letter)){
			console.log("check vowel you got it right working");
			this.usedLetters.push(letter);
		}else{
			console.log("check vowel you got it wrong");
			this.usedLetters.push(letter);
		}
		domUpdates.removeVowelDisplay()
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
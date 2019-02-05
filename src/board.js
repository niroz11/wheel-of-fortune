import domUpdates from "./dom.js";
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
		console.log(this.roundPhrase)
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
			// figure out equation for 3 words
			break;
		}

		domUpdates.displayRoundPhrase(this, this.roundData, index)
	}
	placeClueOnTheGame(){
		domUpdates.displayRoundClue(this.roundPhrase)
	}
	checkLetter(letter){
		if(this.usedLetters.includes(letter)){
			console.log("pick another letter")
		}else if(this.roundPhrase.toLowerCase().includes(letter)  && !this.vowels.includes(letter)){
			console.log("you got it right here are your points")
			this.usedLetters.push(letter);
		}else{
			console.log("you got it wrong")
			this.usedLetters.push(letter);
		}
	}
	checkVowel(letter){
		if(this.usedLetters.includes(letter) && this.vowels.includes(letter)){
			console.log("pick another vowel")
		}else if(this.roundPhrase.toLowerCase().includes(letter)){
			console.log("pick another vowel");
			this.usedLetters.push(letter);
		}else{
			console.log("you got it wrong");
			this.usedLetters.push(letter);
		}
		domUpdates.removeVowelDisplay()
	}
} 

export default Board;
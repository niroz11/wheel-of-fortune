class Board{
	constructor(data){
		this.roundPhrase = data;
	}
	grabPhraseForRound(){
		this.roundPhrase =(round.gameQuestions.shift())
	}
	placePhraseOnBoard(){
		let index = 0
		switch(this.roundPhrase.number_of_words){
			case 1:
			let centerText = 14 - this.roundPhrase.correct_answer.length;
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

		domUpdates.displayRoundPhrase(this.roundPhrase, index)
	}
	placeClueOnTheGame(){
		domUpdates.displayRoundClue(this.roundPhrase)
	}
	checkLetter(){

	}
	checkVowel(letter){
		if(["a","b","c"].includes(letter))
		domUpdates.removeVowelDisplay()
	}
}
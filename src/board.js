class Board{
	constructor(){
		this.roundPhrase = data;
	}
	grabPhraseForRound(){
		this.roundPhrase =(round.gameQuestions.shift())
	}
	placePhraseOnBoard(){
		// this should place the clu
	}
	placeClueOnTheGameO(){
		domUpdates.DisplayRoundClue(this.roundPhrase)
	}
	checkLetter(){

	}
	checkVowel(letter){
		if(["a","b","c"].includes(letter))
		domUpdates.removeVowelDisplay()
	}
}
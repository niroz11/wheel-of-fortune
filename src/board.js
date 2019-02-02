class Board{
	constructor(){
		this.roundPhrase;
	}
	grabPhraseForRound(){
		this.roundPhrase =(round.gameQuestions.shift())
	}
	placePhraseOnBoard(){
		// this should place the clu
	}
	placeClueOnTheGameO(){

	}
	checkLetter(){

	}
	checkVowel(letter){
		if(["a","b","c"].includes(letter))
		domUpdates.removeVowelDisplay()
	}
}
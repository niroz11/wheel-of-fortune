class Board{
	constructor(data){
		this.roundPhrase = data;
	}
	grabPhraseForRound(){
		this.roundPhrase =(round.gameQuestions.shift())
	}
	placePhraseOnBoard(){
		domUpdates.displayRoundPhrase(this.roundPhrase)
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
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
			console.log(this.roundData.correct_answer)
			if(this.roundData.correct_answer.length < 13){
				let centerText = 14 - this.roundData.correct_answer.length;
				index = Math.floor(centerText/2 + 12);
			}else{
				console.log("what up")
				let wordone = this.roundData.correct_answer.split(" ")[0]
				console.log(wordone)
				let wordtwo = this.roundData.correct_answer.split(" ")[1]
				console.log(wordtwo)
				let centerTextone = 14 - wordone.length;
				let indexone = Math.floor(centerTextone/2 + 12);
				let centerTexttwo = 14 - wordtwo.length;
				let indextwo = Math.floor(centerTexttwo/2 + 26);
				domUpdates.displayRoundPhraseTwo(wordone, wordtwo, indexone, indextwo)
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
			game.round.startNewRound(game.wheel, game.board)
			$(game.player).each((i, player) => player.account = 0)
		}else{
			game.changePlayer()
		}
		domUpdates.closePhraseGuess()
	}
	checkPhraseIsCompleted(){
		return true;
	}
	displayLetter(){
		return true;
	}
} 

export default Board;
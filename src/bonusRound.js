import Game from "./game.js";
import data from "./data.js"
import Wheel from "./wheel.js";
import Round from "./round.js";
import $ from 'jquery';
import Board from "./board.js";
import domUpdates from "./dom.js";

class Bonus extends round {
	constructor(){
		super()
		this.letters = ['a','b','c','d', 'e', 'f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		this.lettersGiven = [];
		this.bonusWheelValue = [1,10000,20000, 500, 5000, 30000];
		this.bonusPhrase;
		this.bonusPlayer;
	}
	grabPlayer(){
		this.bonusPlayer = game.player.sort((numa, numb) => {
			return numb.bank - numa.bank
		}).shift()
	}
	grabPhrase(){
		let numb = Math.floor(Math.random() * 24)
		this.bonusPhrase = data.puzzles.four_word_answers.puzzle_bank[numb]
	}
	giveLetters(){
		let numb = Math.floor(Math.random() * this.letters.length)
		for(var i = 0; i < 5; i++){
			this.lettersGiven.push(this.letters.splice(numb, 1))
		}
	}
	displayMethod(){
		domUpdates.
	}

	displayWheel(){
		domUpdates
	}
	displayPlayerPick(){
		domUpdates
	}
}
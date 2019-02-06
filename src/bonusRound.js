import Game from "./game.js";
import data from "./data.js"
import Wheel from "./wheel.js";
import Round from "./round.js";
import $ from 'jquery';
import Board from "./board.js";

class Bonus extends round {
	constructor(){
		super()
		this.letters = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
		this.vowels = ['a','e','i','o','u'];
		this.bonusWheelValue = [1,10000,20000, 500, 5000, 30000];
		this.bonusPhrase;
	}
	grabPlayer(){

	}
	grabMethod(){

	}
	displayMethod(){

	}
	giveLetters(){

	}

}
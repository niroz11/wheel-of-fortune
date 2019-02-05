import data from "./data.js"
import Player from "./player.js"
import Wheel from "./wheel.js"
import Round from "./round.js"
import Board from "./board.js"
import $ from 'jquery';
import domUpdates from "./dom.js";

class Game{
	constructor(){
		this.data = data;
		this.player = [];
		this.playerInPlay = 0;
		this.gamedata;
		this.usedLetters = [];
		this.wheel;
		this.round;
		this.board;
	}
	setNewGame(round){
		this.addPlayer()
		this.parseData()
		this.round.parseDataForGame()
		this.round.setupround(this.wheel, this.board)
		this.round.displayRound()
		domUpdates.displayOption()
	}
	addPlayer(){
		$(".playerName").each((i, name) => {
			this.player.push(new Player($(name).val()))
		})
		domUpdates.displayname(this)
	}
	changePlayer(){
		switch(this.playerInPlay){
			case 0:
			this.playerInPlay = 1;
			break;
			case 1:
			this.playerInPlay = 2;
			break;
		    default:
			this.playerInPlay = 0;
		}
	}
	parseData(){
		this.gamedata = Object.values(this.data) 
		this.wheel = new Wheel(this.gamedata[1]);
		this.round = new Round(this.gamedata[2]);
		this.board = new Board();
	}
}

export default Game;



class Game{
	constructor(){
		this.player = [];
		this.playerInPlay = 0;
		this.gamedata;
		this.usedLetters = [];
	}
	setNewGame(){
		this.addPlayer()
		this.parseData()
		round.parseDataForGame()
		round.setupround()
		round.displayRound()
		domUpdates.displayOption()
	}
	addPlayer(){
		$(".playerName").each((i, name) => {
			this.player.push(new Player($(name).val()))
		})
		domUpdates.displayname()
	}
	parseData(){
		this.gamedata = Object.values(data) 
		wheel = new Wheel(this.gamedata[1]);
		round = new Round(this.gamedata[2]);
	}
}

export default Game;
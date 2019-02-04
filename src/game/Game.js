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
		console.log(this.player)
	}
	addPlayer(){
		$(".playerName").each((i, name) => {
			this.player.push(new Player($(name).val()))
		})
		domUpdates.displayname()
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
		this.gamedata = Object.values(data) 
		wheel = new Wheel(this.gamedata[1]);
		round = new Round(this.gamedata[2]);
	}
}

class Game{
	constructor(){
		this.player = [];
		this.playerInPlay = 0;
		this.gamedata;
	}
	setGame(){
		domUpdates.displayOption()
		this.addPlayer()
		round.setupround()
	}
	addPlayer(){
		// refactor this later into a foreach loop
		this.player.push(new Player($(".playerName0").val()))
		this.player.push(new Player($(".playerName1").val()))
		this.player.push(new Player($(".playerName2").val()))
		domUpdates.displayname()
		this.parseData()
	}
	addBoard(){
		$('.board-piece').text('hello world');
	}
	parseData(){
		this.gamedata = Object.values(data) 
		wheel = new Wheel(this.gamedata[1]);
		round = new Round(this.gamedata[2]);
	}
}
class Game{
	constructor(){
		this.player = [];
		this.playerInPlay = 0;
		this.gamedata;
		this.usedLetters = [];
	}
	setGame(){
		domUpdates.displayOption()
		// domUpdates.displayPuzzle();
		this.addPlayer()
		round.parseDataForGame()
		round.setupround()
		round.displayRound()
	}
	addPlayer(){
		if(!$(".input:contains('')")){
			console.log("this work try it ")
		}
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
	checkGuess(round){
		
	}
}
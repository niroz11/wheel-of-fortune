class Game{
	constructor(){
		this.player = [];
		this.playerInPlay = 0;
		this.gamedata;
	}
	addPlayer(){
		// refactor this later into a foreach loop
		this.player.push(new Player($(".playerName0").val()));
		this.player.push(new Player($(".playerName1").val()));
		this.player.push(new Player($(".playerName2").val()));
		domUpdates.displayname();
		this.parseData();
	}
	addBoard(){
		$('.board-piece').text('hello world');
	}
	parseData(){
		let dataValue = Object.values(data);
		dataValue.shift;
		this.gamedata = dataValue;
		wheel = new Wheel(this.gamedata[1]);
	}
}
class Game{
	constructor(){
		this.player = []
		this.playerInPlay = 0;
	}
	addPlayer(){
		// refactor this later into a foreach loop
		this.player.push(new Player($(".playerName0").val()))
		this.player.push(new Player($(".playerName1").val()))
		this.player.push(new Player($(".playerName2").val()))
		domUpdates.displayname()
	}
	addBoard(){
		$('.board-piece').text('hello world');
	}
}
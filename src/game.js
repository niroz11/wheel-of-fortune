class Game{
	constructor(){
		this.players = [];
		this.playerInPlay = 0;

	}
	addPlayer(){
		
		this.players.push(new Player($('.name-input-one').val()))
		this.players.push(new Player($('.name-input-two').val()))
		this.players.push(new Player($('.name-input-three').val()))
		}
		
	addBoard(){
	$('.board-piece').text('hello world');
	}

}


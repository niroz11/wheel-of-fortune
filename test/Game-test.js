import chai from 'chai';
const expect = chai.expect;
const Game = require('../src/game.js')
global.Player = require('../src/player.js')

global.$ = require('jquery')

describe('Game', function() {
	var game;
	
  	beforeEach(function(){
  		game = new Game();
  	})

it('it should add player', function(){
	// var player1 = new Player('Heather');
	// var player2 = new Player('Niraj');
	// var player3 = new Player('Gabe');
	game.addPlayer();
	// expect(game.player).to.equal.length(3);

});

it('should spin wheel',function(){
	
})










});



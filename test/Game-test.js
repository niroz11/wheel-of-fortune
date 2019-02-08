// import chai, { expect } from 'chai';
import chai from 'chai';
const expect = chai.expect;
import Game from '../src/game.js';
import domUpdates from '../src/dom.js'
import spies from 'chai-spies';

chai.use(spies);

// global.$ = require('jquery')

describe('game', function() {
    let game;
    beforeEach(() =>{
        game = new Game()
    chai.spy.on(domUpdates, ['displayname','pushPlayer','displayOption','updateAllScore' ], () => true);
    })
    
    afterEach(() => {
        chai.spy.restore(domUpdates)
    })
	it("should pass the test", () => {
        expect(true).to.equal(true);
    })
    it("should be a object", () => {
        expect(game).to.be.an('object');
    })
    it("should have a default setting", () => {
        expect(game.data).to.be.an('object');
        expect(game.player).to.deep.equal([]);
        expect(game.playerInPlay).to.equal(0);
        expect(game.gameData).to.equal(undefined);
        expect(game.wheel).to.equal(undefined);
        expect(game.round).to.equal(undefined);
        expect(game.board).to.equal(undefined);
        expect(game.bonus).to.equal(undefined);
    })
    it("should be able to set new game", () => {
    	game.addPlayer();

       expect(domUpdates.pushPlayer).to.have.been.called(1);
       expect(domUpdates.displayname).to.have.been.called(1);
    })
    
    it("should be able to change player", () => {
    	game.changePlayer();
    	expect(game.playerInPlay).to.equal(1);
    })
    



    
})




import chai, { expect }from 'chai';
import Board from '../src/board';
import domUpdates from "../src/dom.js"
import spies from 'chai-spies';
chai.use(spies);


global.$ = require('jquery')

describe('Board', function() {
    let board
    beforeEach(() =>{
        board = new Board()
    chai.spy.on(domUpdates, 'displayRoundClue', () => true);
    });

    afterEach(() => {
        chai.spy.restore(domUpdates)
    })
	it("should pass the test", () => {
        expect(true).to.equal(true);
    })
    it("should be a object", () => {
        expect(board).to.be.an('object');
    })
    it("should have a default setting", () => {
        expect(board.roundData).to.deep.equal(undefined);
        expect(board.roundPhrase).to.deep.equal(undefined);
        expect(board.usedLetters).to.deep.equal([]);
        expect(board.vowels).to.deep.equal(["e","u","i","o","a"]);
    })
    it("should be able to display the round clue", () => {
        board.placeClueOnTheGame()
        expect(domUpdates.displayRoundClue).to.have.been.called(1)
        expect(domUpdates.displayRoundClue).to.have.been.called.with(board.roundData)
    })
    
})


import chai from 'chai';
const expect = chai.expect
import Board from '../src/board';
import domUpdates from "../src/dom.js"
import Game from '../src/game';
import $ from "jquery"
import spies from 'chai-spies';
chai.use(spies);

chai.spy.on(domUpdates, ['displayRoundClue', 'displayRoundPhrase', 'updateScore', 'closePhraseGuess' ], () => true);

describe('Board', function() {
    let board
    beforeEach(() =>{
        board = new Board()
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
    })
    it("shoul be able to display the round phrase", () => {
        board.placePhraseOnBoard()
        expect(domUpdates.displayRoundPhrase).to.have.been.called(1)
    })
    it("should update score when player enters a letter", () => {
        board.roundPhrase = "hello"
        board.checkLetter()
        expect(domUpdates.updateScore).to.have.been.called(1)
    })
    it("should close the phrase section after guessing", () => {
        board.roundPhrase = "hello"
        board.checkGuessPhrase()
        expect(domUpdates.closePhraseGuess).to.have.been.called(1)
    })
    
})


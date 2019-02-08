import chai, { expect } from 'chai';
import Board from '../src/board';
import domUpdates from "../src/dom.js"

import spies from 'chai-spies';
chai.use(spies);

chai.spy.on(domUpdates, ['displayRound', 'updateScore', 'closePhraseGuess', 'displayRoundClue', 'displayRoundPhrase', 'displayGuessphrase'], () => true);

describe('Board', function() {
    let board
    beforeEach(() =>{
        board = new Board()
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
        expect(domUpdates.displayRoundClue).to.have.been.called()
    })
    it("should be able to display the round phrase", () => {
        board.placePhraseOnBoard()
        expect(domUpdates.displayRoundPhrase).to.have.been.called()
    })
    it("should update score when player enters a letter", () => {
        board.roundPhrase = "hello"
        board.checkLetter()
        expect(domUpdates.updateScore).to.have.been.called.once
    })
    it("should close the phrase section after guessing", () => {
        board.roundPhrase = "hello"
        board.checkGuessPhrase()
        expect(domUpdates.closePhraseGuess).to.have.been.called(1)
    })
    it("should be able to assign values to its key values pair", () => {
         board.grabPhraseForRound([{hello: "hello"},{}])
         expect(board.roundData).to.deep.equal({hello: "hello"})
         expect(board.roundPhrase).to.deep.equal(undefined)
    })
    
})


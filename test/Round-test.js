import chai, { expect } from 'chai';
import Round from "../src/Round.js";
import data from "../src/data.js";
import spies from 'chai-spies';
import Game from "../src/Game.js"
import Wheel from "../src/Wheel.js"
import board from "../src/Board.js"
import domUpdates from "../src/Dom.js"
import Board from '../src/Board.js';
chai.use(spies);


describe('Round', function() {
    let round
    let board
    let wheel
    beforeEach(() =>{
        round = new Round(Object.values(data)[2]);
        wheel = new Wheel(Object.values(data)[1]);
        board = new Board();
    })
    chai.spy.on(domUpdates, ['displayRound', 'resetRound', 'updateAllScore', 'displayRoundClue', 'displayRoundPhrase'], () => true);
    it("should be a object", () => {
        expect(round).to.be.an('object');
    })
    it("should have a default setting", () => {
        expect(round.gameData).to.deep.equal(Object.values(data)[2]);
        expect(round.gameQuestions).to.deep.equal(undefined);
        expect(round.gameround).to.deep.equal("One");
        expect(round.wheel).to.deep.equal(undefined);
    })
    it("should change round when function is invoke", () => {
        round.changeRound()
        expect(round.gameround).to.equal("Two")
    })
    it("should be able to pass down the round to the dom", () => {
        round.displayRound()
        expect(domUpdates.displayRound).to.have.been.called.with(round.gameround)
    })
    it("should change round and the reset round it invoke", () => {
        round.parseDataForGame()
        expect(round.gameQuestions).to.have.length(4)
    })
})

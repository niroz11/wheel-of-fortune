import chai, { expect } from 'chai';
import Round from "../src/Round.js";
import data from "../src/data.js";
import spies from 'chai-spies';
import domUpdates from "../src/Dom.js"
chai.use(spies);

global.$ = require('jquery')

describe('Round', function() {
    let round
    beforeEach(() =>{
        round = new Round(data)
    })
    chai.spy.on(domUpdates, 'displayRound', () => true);
	it("should pass the test", () => {
        expect(true).to.equal(true)
    })
    it("should be a object", () => {
        expect(round).to.be.an('object');
    })
    it("should have a default setting", () => {
        expect(round.gameData).to.deep.equal(data);
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
})

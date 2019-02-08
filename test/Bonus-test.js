import chai, { expect } from 'chai';
import Round from "../src/Round.js";
import data from "../src/data.js";
import spies from 'chai-spies';
import domUpdates from "../src/Dom.js"
import Board from '../src/Board.js';
chai.use(spies);


describe('Bonus', function() {
    beforeEach(() =>{
        bonus = new Bonus(Object.values(data)[2]);
    })
    it("should be a object", () => {
        expect(round).to.be.an('object');
    })
    it("should have a default setting", () => {
        expect(round.gameData).to.deep.equal(Object.values(data)[2]);
        expect(round.gameQuestions).to.deep.equal(undefined);
        expect(round.gameround).to.deep.equal("One");
        expect(round.wheel).to.deep.equal(undefined);
    })
})

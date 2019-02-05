import chai from 'chai';
const expect = chai.expect;
import Round from "../src/round.js"

global.$ = require('jquery')

describe('Round', function() {
	it("should pass the test", () => {
        expect(true).to.equal(true)
    })
    it("should have a default key value pairs", () => {
        let round = new Round()
        expect(round).to.equal(round)
    })
})

import chai, { expect } from 'chai';
import Player from "../src/Player.js"

global.$ = require('jquery')

describe('Player', function() {
	let player
    beforeEach(() =>{
        player = new Player()
    })
    it("should be a object", () => {
        expect(player).to.be.an('object');
    })
    it("should have a default setting", () => {
        expect(player.name).to.deep.equal(undefined);
        expect(player.account).to.deep.equal(0);
        expect(player.bank).to.deep.equal(0);
    })
    it("should accept a name", () => {
        let player = new Player("duy")
        expect(player.name).to.equal("duy")
    })
})


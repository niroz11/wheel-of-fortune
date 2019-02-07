import chai, { expect } from 'chai';
import Game from '../src/Game.js';
import domUpdates from "../src/Dom.js"
import spies from 'chai-spies';
chai.use(spies);

global.$ = require('jquery')

describe('Game', function() {
	let game	
  	beforeEach(() => {
  		game = new Game();
	  })
	//   chai.spy.on(domUpdates, '', () => true);
	it("should pass this test", () => {
		expect(true).to.equal(true)
	})

	// it('should spin wheel',function(){
		
	// })
})




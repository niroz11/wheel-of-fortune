import chai, { expect } from 'chai';
import Game from '../src/Game.js'
import Player from '../src/player.js'
import Wheel from '../src/Wheel.js'
import domUpdates from '../src/Dom.js'
import data from '../src/data.js'
import spies from 'chai-spies';
chai.use(spies);



describe('Wheel', function() {
	let wheel;
  	beforeEach(function(){
  		wheel = new Wheel([1,2,3,4,5,6]);
  		chai.spy.on(domUpdates, [
  			'spinAnimation',
  			'displayWheelValue',
  			'removeWheel',
  			'updateScore',
  			'displayEnterLetter' ], () => true);
  	})
  	afterEach(() => {
  		chai.spy.restore(domUpdates);
  	})
	it("should be a object", () => {
        expect(wheel).to.be.an('object');
    })
    it("should have a default setting", () => {
        expect(wheel.wheelValue).to.deep.equal([1,2,3,4,5,6]);
        expect(wheel.currentWheelValue).to.deep.equal([]);
        expect(wheel.spinValue).to.deep.equal(undefined);
    })
	it('should set wheel value', function(){
		wheel.SetWheelValue();
		expect(wheel.currentWheelValue).to.have.length(6);
	})
	it("should display the enter letter if player guess right", () => {
		wheel.determinePlayer()
		expect(domUpdates.displayEnterLetter).to.have.been.called()
	})

	it('should spin the wheel', function(){
		wheel.SetWheelValue();
		wheel.spinWheel();
		expect(domUpdates.spinAnimation).to.have.been.called(1);
		expect(wheel.spinValue).that.is.a('number');
	})
	it('should invoke updateScore when determinePlayer', function(){
		let game = new Game(data);
		let player = new Player();
		wheel.spinValue = "BANKRUPT";
		game.player = [{name:'bob',account:0, bank:0},{name:'niraj',account:0, bank:0},{name:'justin',account:0, bank:0},]
		wheel.determinePlayer(game);
		expect(domUpdates.updateScore).to.have.been.called(1);
	})

});




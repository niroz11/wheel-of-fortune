import chai from 'chai';
const expect = chai.expect;
import Wheel from '../src/Wheel.js'
import domUpdates from '../src/dom.js'
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


it('it should set wheel value', function(){
	wheel.SetWheelValue();
	expect(wheel.currentWheelValue).to.have.length(6);

})

it('it should spin the wheel', function(){
	wheel.SetWheelValue();
	wheel.spinWheel();
	expect(domUpdates.spinAnimation).to.have.been.called(1);
	// expect(domUpdates.displayWheelValue).to.have.been.called(1);
	// expect(domUpdates.removeWheel).to.have.been.called(1);
	 expect(wheel.spinValue).that.is.a('number');

})

it('it should spin the wheel', function(){
	let game = new Game();
	wheel.spinValue = "BANKRUPT";
	wheel.determinePlayer(game);

})











});




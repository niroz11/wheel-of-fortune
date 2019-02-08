import chai, { expect } from 'chai';
import Wheel from "../src/Wheel.js"
import domUpdates from "../src/dom.js"
import spies from 'chai-spies';
chai.use(spies);



describe('Wheel', function() {
	let wheel;
  	beforeEach(function(){
		wheel = new Wheel([1,2,3,4,5,6]);
		chai.spy.on(domUpdates, ['spinAnimation', 'removeWheel', 'displayEnterLetter'], () => true);
		chai.spy.on(wheel, 'wheelanimation', () => true);
	  })
	  afterEach(function() {
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
	it("should be able to spin the wheel and set a value", () => {
		wheel.spinWheel()
		expect(wheel.spinValue).to.be.an("number")
	})
	it("should display the enter letter if player guess right", () => {
		wheel.determinePlayer()
		expect(domUpdates.displayEnterLetter).to.have.been.called()
	})
});




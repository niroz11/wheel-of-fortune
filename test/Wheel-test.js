import chai, { expect } from 'chai';
import Wheel from "../src/Wheel.js"
import data from "../src/data.js"
import spies from 'chai-spies';
chai.use(spies);

describe('Wheel', function() {
	let wheel;
	
  	beforeEach(function(){
  		wheel = new Wheel([1,2,3,4,5,6]);
  	})

it('it should set wheel value', function(){
	wheel.SetWheelValue();
	expect(wheel.currentWheelValue).to.have.length(6);

})









});




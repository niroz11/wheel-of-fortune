import chai from 'chai';
const expect = chai.expect;
const Wheel = require('../src/wheel/wheel.js')
const data = require('../src/index/data.js')

var wheel;
describe('Wheel', function() {
	
  	beforeEach(function(){
  		wheel = new Wheel([1,2,3,4,5,6]);
  	})

it('it should set wheel value', function(){
	wheel.SetWheelValue();
	expect(wheel.currentWheelValue).to.have.length(6);

})









});



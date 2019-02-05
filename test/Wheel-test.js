import chai from 'chai';
let expect = chai.expect;
let Wheel = require('../src/wheel.js')
import  data from '../src/data.js'

var wheel;
describe('Wheel', function() {
	
  	beforeEach(function(){
  		wheel = new Wheel([1,2,3,4,5,6]);
  	})

it('should have default properties', function(){
	expect(wheel.wheelValue).to.be.();
})




it('it should set wheel value', function(){
	wheel.SetWheelValue();
	expect(wheel.currentWheelValue).to.have.length(6);

})










});

// module.exports = Wheel;



class Wheel{
	constructor(){
		this.wheelValue = 0;
		this.PLayervalue = 0;
	}
	SetWheelValue(){

	}
	spinWheel(){
		this.wheelValue = Math.floor(Math.random() * 6) + 1;
		let wheelSpin =  this.wheelValue * (Math.random() * 1080);
		domUpdates.spinAnimation(wheelSpin)
		setTimeout(() => {
			domUpdates.displayWheelValue(this.wheelValue)
		}, 5000)
		setTimeout(() => {
			domUpdates.removeWheel()
		}, 8000)
	}
	addValueToPlayer(){
		domUpdates.addScore();
	}
}
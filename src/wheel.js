class Wheel{
	constructor(){
		this.wheelValue = 0;
		this.PLayervalue = 0;
	}
	SetWheelValue(){

	}
	spinWheel(){
		let wheelValue = Math.floor(Math.random() * 6) + 1;
		let wheelSpin =  wheelValue * (Math.floor(Math.random() * 6) + 360);
		domUpdates.spinAnimation(wheelSpin)
		setTimeout(() => {
			domUpdates.removeWheel()
		}, 10000)
	}
	addValueToPlayer(){
		domUpdates.addScore();
	}
}
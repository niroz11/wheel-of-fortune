class Wheel{
	constructor(data){
		this.wheelValue = data;
		this.currentWheelValue = [];
		console.log(this.wheelValue);
	}
	SetWheelValue(){

		this.wheelValue.wheel.forEach((value) => {
			console.log(value);
		})
	}
	spinWheel(){
		let valuePick = Math.floor(Math.random() * 6) + 1;
		console.log(valuePick, 'Heyy')
		let wheelSpin =  valuePick * (Math.random() * 1080);
		

		domUpdates.spinAnimation(wheelSpin);
		setTimeout(() => {
			domUpdates.displayWheelValue(valuePick)
		}, 5000)
		setTimeout(() => {
			this.addValueToPlayer(valuePick)
			domUpdates.removeWheel()
			
		}, 8000)
	}
	addValueToPlayer(valuePick){
		// game.player[game.playerInPlay].account += valuePick
		// domUpdates.addScore();
		return true;
	}
}
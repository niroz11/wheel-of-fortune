class Wheel{
	constructor(data){
		this.wheelValue = data;
		this.currentWheelValue = [];
	}
	SetWheelValue(){
		let randomValue = this.wheelValue
		
		for (let i = randomValue.length - 1; i > 0; i--) {
			const r = Math.floor(Math.random() * (i + 1));
			[randomValue[i], randomValue[r]] = [randomValue[r], randomValue[i]];
		}
		for(var i = 0; i < 6; i++){
			this.currentWheelValue.push(randomValue.shift());
		}
	}
	spinWheel(){
		let valuePick = Math.floor(Math.random() * 6) + 1;
		let wheelSpin =  valuePick * (Math.ceil(Math.random() * 3) * 360);
		domUpdates.spinAnimation(wheelSpin)
		setTimeout(() => {
			domUpdates.displayWheelValue(valuePick)
		}, 5000)
		setTimeout(() => {
			this.addValueToPlayer(this.currentWheelValue[valuePick])
			domUpdates.removeWheel()
		}, 8000)
	}
	addValueToPlayer(valuePick){
		// game.player[game.playerInPlay].account += valuePick
		// domUpdates.addScore();
		return true;
	}
}

if(typeof module !== 'undefined'){
	module.exports = Wheel;
}
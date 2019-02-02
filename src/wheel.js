class Wheel{
	constructor(data){
		this.wheelValue = data;
		this.currentWheelValue = [];
	}
	SetWheelValue(){
		this.currentWheelValue =[]
		let randomValue = this.wheelValue.slice()
		for (let i = randomValue.length - 1; i > 0; i--) {
			const r = Math.floor(Math.random() * (i + 1));
			[randomValue[i], randomValue[r]] = [randomValue[r], randomValue[i]];
		}
		for(var i = 0; i < 6; i++){
			this.currentWheelValue.push(randomValue.shift());
		}
	}
	spinWheel(){
		let valuePick = Math.floor(Math.random() * 6);
		let wheelSpin =  valuePick * (Math.ceil(Math.random() * 3) * 360);
		domUpdates.spinAnimation(wheelSpin)
		console.log(valuePick)
		setTimeout(() => {
			domUpdates.displayWheelValue(this.currentWheelValue[valuePick])
		}, 5000)
		setTimeout(() => {
			this.addValueToPlayer(this.currentWheelValue[valuePick])
			domUpdates.removeWheel()
		}, 7000)
	}
	addValueToPlayer(valuePick){
		if(typeof valuePick === "number"){
			//add points to 
		}else if(valuePick === "BANKRUPT"){
			//remove all money from account
		}else{
			//skip turn 
		}
	}
}

if(typeof module !== 'undefined'){
	module.exports = Wheel;
}
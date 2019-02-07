
import domUpdates from "./Dom.js";

class Wheel{
	constructor(data){
		this.wheelValue = data;		
		this.currentWheelValue = [];
		this.spinValue;
	}
	SetWheelValue(){
		this.currentWheelValue = [];
		let randomValue = this.wheelValue.slice()
		for (let i = randomValue.length - 1; i > 0; i--) {
			const r = Math.floor(Math.random() * (i + 1));
			[randomValue[i], randomValue[r]] = [randomValue[r], randomValue[i]];
		};
		for(var i = 0; i < 6; i++){
			this.currentWheelValue.push(randomValue.shift());
		};
	};
	spinWheel(game){
		let valuePick = Math.floor(Math.random() * 6);
		let wheelSpin =  valuePick * (Math.ceil(Math.random() * 3) * 360);
		domUpdates.spinAnimation(wheelSpin);
		setTimeout(() => {
			domUpdates.displayWheelValue(this.currentWheelValue[valuePick])
		}, 5000)
		setTimeout(() => {
			this.determinePlayer(game)
			domUpdates.removeWheel()
		}, 7000);
		this.spinValue = this.currentWheelValue[valuePick];
	};
	determinePlayer(game){
		if(this.spinValue === "BANKRUPT"){
			game.player[game.playerInPlay].account = 0
			domUpdates.updateScore(game);
			game.changePlayer()
		}else if(this.spinValue === "LOSE A TURN"){
			game.changePlayer()
		}else{
			domUpdates.displayEnterLetter()
		}
	};
}

export default Wheel;
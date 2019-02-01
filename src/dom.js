class DomUpdates{
	// this is dom for displaying the name and changing the score 
	displayname(){
		$(".input").remove()
		$("#player-name").remove()
		for(var i = 0; i < 3; i++){
			$(".display-name").eq(i).text(game.player[i].name)
			$(".display-score").eq(i).text(game.player[i].account)
		}
	}
	// this is dom for displaying the round
	displayRound(round){
		let div = $(
			`<div class="round-display">
				<h2>Round ${round}</h2>
			</div>`
		)
		$("body").append(div)
		setInterval(() => {
			$(".round-display").remove()
		}, 5000)
	}
	// this is dom for the three buttons
	displayOption(){
		let div = $(
			`<div>
				<button>buy a vowel</button>
				<button>guess the phrase</button>
				<button class="wheel-display">spin wheel</button>
			</div>`
		);
		$(".letters-board").append(div);
	}
	// this is dom for the wheel
	displayWheel(){
		let div = $(
			`<section class="wheel-section">
				<h2>player one</h2>
				<div class="wheel">
					<img class="wheelpic" src="wheel.png"/>
				</div>
				<button class="spin-button">SPIN</button>
			</section>`
		);
		$("body").append(div);
	}
	spinAnimation(num){
		$(".wheel").css("transform", `rotate(${num}deg)`);
	}
	displayWheelValue(value){
		let div = $(
			`<div class="show-value">
				<h2>${value}</h2>
			</div>`
		)
		$(".wheel-section").append(div);
	}
	removeWheel(){
		$(".wheel-section").remove()
		$(".show-value").remove();
	}
}
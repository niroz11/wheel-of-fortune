class DomUpdates{
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
	displayOption(){
		let div = $(
			`<div>
				<button>buy a vowel</button>
				<button class="guess-button">guess the phrase</button>
				<button class="wheel-display">spin wheel</button>
				<input class="guess-input">Enter your guess </input>
			</div>`
		);
		$(".letters-board").append(div);
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
	displayname(){
		$(".input").remove()
		$("#player-name").remove()
		for(var i = 0; i < 3; i++){
			$(".display-name").eq(i).text(game.player[i].name)
			$(".display-score").eq(i).text(game.player[i].account)
		}
	}
	displayPuzzle(round){
		console.log('puzzle shown');
		console.log(round); 

	}
}
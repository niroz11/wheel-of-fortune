class DomUpdates{
	displayWheel(){
		let div = $(
			`<section class="wheel-section">
				<h2>player one</h2>
				<div class="wheel">
					<p>hello</p>
				</div>
				<button class="spin-button">SPIN</button>
			</section>`
		)
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
	displayname(){
		$(".input").remove()
		$("#player-name").remove()
		for(var i = 0; i < 3; i++){
			$(".display-name").eq(i).text(game.player[i].name)
			$(".display-score").eq(i).text(game.player[i].account)
		}
	}
}
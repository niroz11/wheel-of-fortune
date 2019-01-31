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
	addPlayerName(){
		$(".box-one").text($('.name-input-one').val());
		$(".box-two").text($('.name-input-two').val());
		$(".box-three").text($('.name-input-three').val());
	}
}
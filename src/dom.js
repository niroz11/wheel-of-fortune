class DomUpdates{
	displayWheel(){
		let div = $(
			`<section class="wheel-section">
				<h2>player one</h2>
				<div class="wheel">
					<p>hello</p>
				</div>
				<button class="
				spin-button"></button>
			</section>
			`
		)
		$("body").append(div);
	}
	spinAnimation(num){
		$(".wheel").css("transform", `rotate(${num}deg)`);
	}
	removeWheel(){
		$(".wheel-section").remove();
	}
}
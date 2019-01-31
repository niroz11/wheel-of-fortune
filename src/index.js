let game = new Game();
let wheel = new Wheel()
let domUpdates = new DomUpdates();

$('#btn').on("click", domUpdates.displayWheel);

$(window).on("click", (e) => {
    e.preventDefault
    if($(e.target).hasClass("spin-button")){
        console.log("im working")
        wheel.spinWheel()
    }
});

$('#submit-btn').on("click", (e) => { 

	e.preventDefault();
	game.addPlayer()

}); 





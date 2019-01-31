let game = new Game();
let domUpdates = new DomUpdates;
let wheel;
let round;

$('#wheel').on("click", domUpdates.displayWheel);

$(window).on("click", (e) => {
    e.preventDefault()
    if($(e.target).hasClass("spin-button")){
        wheel.spinWheel()
    }
});

$("#player-name").on("click", (e) => {
    e.preventDefault();
    game.addPlayer();
});

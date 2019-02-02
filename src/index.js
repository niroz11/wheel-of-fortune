let game = new Game();
let domUpdates = new DomUpdates;
let wheel;
let round;

$(window).on("click", (e) => {
    e.preventDefault()
    if($(e.target).hasClass("wheel-display")){
        domUpdates.displayWheel()
    }
})

$(window).on("click", (e) => {
    e.preventDefault()
    if($(e.target).hasClass("spin-button")){
        wheel.spinWheel()
    }
});

$("#player-name").on("click", (e) => {
    e.preventDefault();
    game.setGame();
});

$('.guess-button').on("click", (e) => {
    e.preventDefault();
    console.log('key pressed')
})

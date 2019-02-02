let game = new Game();
let domUpdates = new DomUpdates;
let wheel;
let round;


// this is to display the guess the whole phrase
$(window).on("click", (e) => {
    e.preventDefault()
    if($(e.target).hasClass("guess-display")){
        domUpdates.displayGuessphrase()
    }
})
// this is to display the wheel 
$(window).on("click", (e) => {
    e.preventDefault()
    if($(e.target).hasClass("wheel-display")){
        domUpdates.displayWheel()
    }
})


// this spends the wheel 
$(window).on("click", (e) => {
    e.preventDefault()
    if($(e.target).hasClass("spin-button")){
        wheel.spinWheel()
    }
});


// this starts the game 
$("#player-name").on("click", (e) => {
    e.preventDefault();
    game.setGame();
});

//this submit the guess the phrase input 
$(window).on("click", (e) => {
    e.preventDefault()
    if($(e.target).hasClass("submit-guess-phrase")){
       console.log("im working close me now")
    }
});

let game = new Game();
let domUpdates = new DomUpdates;
let wheel;
let round;
let board = new Board(); 



// this is to display the guess the whole phrase
$(window).on("click", (e) => {
    e.preventDefault()
    if($(e.target).hasClass("guess-display")){
        domUpdates.displayGuessphrase()
    }
})

//this is to display the div to tell player to use keyboard to buy vowel
$(window).on("click", (e) => {
    e.preventDefault()
    if($(e.target).hasClass("vowel-display")){
        domUpdates.dispalyBuyValue()
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
       domUpdates.closePhraseGuess()
    }
});

$(window).on("keydown", (e) => {
    board.checkVowel(e.key)
})

$(window).on("keyup", (e) => {
    e.preventDefault();
    
    var keyCodeRange = (e.keyCode >64 && e.keyCode < 91)
    var range = (!game.usedLetters.includes(e.key));
    
    
    
    
    if( keyCodeRange && range ){
        console.log(keyCodeRange, "keycode");
        console.log(range, "range");
        console.log(game.usedLetters, "used letters")
        
        game.usedLetters.push(e.key);
    $('.display-used-letters').append(e.key);
    }
    

})

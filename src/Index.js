import data from "./data.js"
import Game from "./game.js"
import $ from 'jquery';

import "./css/game.css"
import "./css/index.css"
import "./css/player.css"
import "./css/board.css"
import "./css/wheel.css"

import domUpdates from "./dom.js";

console.log(data)

let game; 

$("#player-name").on("click", (e) => {
    e.preventDefault();
    game =  new Game();
    game.setNewGame();
});
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
        game.wheel.spinWheel()
    }
});

//this submit the guess the phrase input 
$(window).on("click", (e) => {
    e.preventDefault()
    if($(e.target).hasClass("submit-guess-phrase")){
       domUpdates.closePhraseGuess()
    }
});

$(window).on("keydown", (e) => {
    game.board.checkVowel(e.key)
})

$(window).on("keyup", (e) => {
    e.preventDefault();
    
    var keyCodeRange = (e.keyCode >64 && e.keyCode < 91)
    var range = (!game.usedLetters.includes(e.key));
    
    
    
    
    if( keyCodeRange && range ){
        game.usedLetters.push(e.key);
    $('.display-used-letters').append(e.key);
    }
})


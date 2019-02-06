import data from "./data.js"
import Game from "./game.js"
import $ from 'jquery';

import "./css/game.css"
import "./css/index.css"
import "./css/player.css"
import "./css/board.css"
import "./css/wheel.css"
import "./css/round.css"

import domUpdates from "./dom.js";

let game; 

$("#player-name").on("click", (e) => {
    game =  new Game();
    game.setNewGame();
});
// this is to display the guess the whole phrase
$(window).on("click", (e) => {
    e.preventDefault()
    if($(e.target).hasClass("guess-display")){
        domUpdates.displayGuessphrase()
    }
    return true;
})

//this is to display the div to tell player to use keyboard to buy vowel
$(window).on("click", (e) => {
    e.preventDefault()
    if($(e.target).hasClass("vowel-display") && game.player[game.playerInPlay].account >= 100){
        domUpdates.dispalyBuyVowel()
    }else{
        console.log("you dont have enough")
    }
    return true;
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
        game.wheel.spinWheel(game)
    }
});

//this submit the guess the phrase input 
$(window).on("click", (e) => {
    if($(e.target).hasClass("submit-guess-phrase")){
       domUpdates.closePhraseGuess()
    }
});


// this allows you to use keyboard to buy a letter
$(window).on("keydown", (e) => {
    if($(".pick-a-letter")[0]){
        var keyCodeRange = (e.keyCode >64 && e.keyCode < 91)
         var range = (!game.board.usedLetters.includes(e.key));
        if( keyCodeRange && range ){
            game.board.checkLetter(game ,e.key)
        }
    }
})


// //this lets you use your keyboard for buying a vowel 
$(window).on("keydown", (e) => {
    if($(".buy-vowel-section")[0]){
        game.board.checkVowel(game, e.key)
    }
})






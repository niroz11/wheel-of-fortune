import Game from "./Game.js"
import $ from 'jquery';
import domUpdates from "./Dom.js";

import "./css/game.css"
import "./css/index.css"
import "./css/player.css"
import "./css/board.css"
import "./css/wheel.css"
import "./css/round.css"
import "./css/bonus.css"

import "./images/planetone.png"
import "./images/planettwo.png"
import "./images/planetthree.png"
import "./images/planetfour.png"
import "./images/planetfive.png"
import "./images/planetsix.png"
import "./images/planetseven.png"

let game; 

$("#player-name").on("click", (e) => {
    game = new Game();
    game.setNewGame();
});
$(window).on("click", (e) => {
    e.preventDefault()
    if($(e.target).hasClass("guess-display")){
        domUpdates.displayGuessphrase()
    }
    return true;
})
$(window).on("click", (e) => {
    e.preventDefault()
    if($(e.target).hasClass("vowel-display") && game.player[game.playerInPlay].account >= 100){
        console.log(game.board.roundPhrase)
        domUpdates.dispalyBuyVowel()
    }
    return true;
})
$(window).on("click", (e) => {
    e.preventDefault()
    if($(e.target).hasClass("wheel-display")){
        console.log(game.board.roundPhrase)
        domUpdates.displayWheel()
    }
})
$(window).on("click", (e) => {
    e.preventDefault()
    if($(e.target).hasClass("spin-button")){
        game.wheel.spinWheel(game)
    }
});
$(window).on("click", (e) => {
    if($(e.target).hasClass("submit-guess-phrase")){
       game.board.checkGuessPhrase(game)
    }
});
$(window).on("keydown", (e) => {
    if($(".pick-a-letter")[0]){
        var keyCodeRange = (e.keyCode >64 && e.keyCode < 91)
         var range = (!game.board.usedLetters.includes(e.key));
        if( keyCodeRange && range ){
            game.board.checkLetter(game ,e.key)
        }
    }
})
$(window).on("keydown", (e) => {
    if($(".buy-vowel-section")[0]){
        game.board.checkVowel(game, e.key)
    }
})
$(".planet").each((i, planet) => {
    let numb = Math.floor(Math.random() * 5)
    $(planet).css("animation-delay", `${-1 * numb}s`)
})
$(window).on("click", (e) => {
    if($(e.target).hasClass("bonus-spin-button")){
        $(".wheel").css("transform", `rotate(876deg)`);
        setTimeout(() => {
            domUpdates.displayPickBonusLetter()
            game.bonus.BonusRoundWheel()
            $(".wheel-section").remove()
        }, 5000);
    }
})
$(window).on("keydown", (e) => {
    console.log($('.letter').val().length)
    console.log($('.letter').val())
        if($('.letter').val().length === 3){
            console.log("its workign asdf")
            game.bonus.displayPlayersPickLetter($('.letter').val())
            domUpdates.displayBonusphrase(game.bonus.guesses)
            $('.bonus-letter-section').remove()
        }
})
$(window).on("click", (e) => {
    if($(e.target).hasClass("bonus-submit-guess")){
       game.bonus.bonusCheckAnswer($('.guess-bonus').val())
    }
});


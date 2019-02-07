import Game from "./game.js";
import data from "./data.js"
import Wheel from "./wheel.js";
import Round from "./round.js";
import $ from 'jquery';
import Board from "./board.js";

import wheel from "../wheel.png"
import rocket from "./images/rocket.png"

export default {
	displayname(game){
		$(".input").remove()
		$("#player-name").remove()
		for(var i = 0; i < 3; i++){
			$(".display-name").eq(i).text(game.player[i].name)
			$(".display-score").eq(i).text(game.player[i].account)
		}
	},
	
	displayRoundClue(clue){
		$(".clue-banner").text(clue.category)
	},
	
	displayRoundPhrase(board ,phrase, index){
		let word = phrase.correct_answer.split('-').join(' ')
		for(var i = index; i < index + word.length; i++){
			$(".back-face").eq(i).text(word.split('')[i - index])
			if(word.split('')[i - index] !== ' '){
			$(".front-face").eq(i).css("background-color", "white")[i - index]
			}
		}	
	},
	
	displayRound(round){
		let div = $(
			`<div class="round-display">
				<img class="rocket" src=${rocket}>
				<h2 class="rocket-text" >Round ${round}</h2>
			</div>`
		)
		$(".option").prop("disabled",true);
		$("body").append(div);
		setTimeout(() => {
			$(".round-display").remove()
			$(".option").prop("disabled",false);
		}, 5000)
	},
	
	displayOption(){
		let div = $(
			`<div class="option-display">
				<button class="option vowel-display">buy a vowel</button>
				<button class="option guess-display">guess the phrase</button>
				<button class="option wheel-display">spin wheel</button>
			</div>`
		);
		$(".letters-board").append(div);
	},
	
	displayGuessphrase(){
		let div = $(
			`<section class="guess-phrase-section">
				<h2>Guess The Phrse</h2>
				<input type="text" class="guess-input"/>
				<button class="submit-guess-phrase">Submit</button>
			</section>`
		)
		$("body").append(div);
	
	},
	closePhraseGuess(){
		$(".guess-phrase-section").remove()
	},
	
	dispalyBuyVowel(game){
		let div = $(
				`<section class="buy-vowel-section">
					<h2>Use the keyboard to buy a value</h2>
				</section>`
		)
		$("body").append(div);
	},
	pickVowelAlert(){
		$(".vowel-alert").remove()
		let h2 = $(
			`<h2 class="vowel-alert">pick a valid vowel</h2>`
			)
			$(".buy-vowel-section").append(h2);
	},
	removeVowelDisplay(){
		$(".buy-vowel-section").remove()
	},
	
	displayWheel(){
		let div = $(
			`<section class="wheel-section">
				<h2>player one</h2>
				<div class="wheel">
					<img class="wheelpic" src=${wheel}/>
				</div>
				<button class="spin-button">SPIN</button>
			</section>`
		);
		$("body").append(div);
	},
	spinAnimation(num){
		$(".wheel").css("transform", `rotate(${num}deg)`);
	},
	displayWheelValue(value){
		let div = $(
			`<div class="show-value">
				<h2>${value}</h2>
			</div>`
		)
		$(".wheel-section").append(div);
	},
	removeWheel(){
		$(".wheel-section").remove();
		$(".show-value").remove();
	},
	displayEnterLetter(){
		let div = $(
			`<div class="pick-a-letter">
				<h2>use the keyboard to pick a letter</h2>
			</div>`
			)
			$("body").append(div);
	},
	pickLetterAlert(){
		$(".letter-alert").remove()
		let h2 = $(
			`<h2 class="letter-alert">pick a valid letter</h2>`
			)
			$(".pick-a-letter").append(h2);
	},
	removeLetterDisplay(){
		$(".pick-a-letter").remove();
	}, 
	updateScore(game){
		$(".display-score").eq(game.playerInPlay).text(game.player[game.playerInPlay].account);
	},
	updateAllScore(){
		$(".display-score").each((i, score) => {
			$(score).text("0")
		})
	},
	flipCard(letter){
		$(".back-face").each((i, face) => {
			if($(face).text().toLocaleLowerCase() === letter){
				$(".board-piece").eq(i).css("transform", "rotateY(-180deg)")
			}
		})
	},
	resetRound(){
		$(".board-piece").each((i, card) => {
			$(".back-face").eq(i).text("")
			$(".front-face").eq(i).css("background-color", "")
			$(card).css("transform", "")
		})
	},
	displayRoundPhraseTwo(arrayone, arraytwo, indexone, indextwo){
		for(var i = indexone; i < indexone + arrayone.length; i++){
			$(".back-face").eq(i).text(arrayone.split('')[i - indexone])
			if(arrayone.split('')[i - indexone] !== ' '){
			$(".front-face").eq(i).css("background-color", "white")[i - indexone]
			}
		}
		for(var i = indextwo; i < indextwo + arraytwo.length; i++){
			$(".back-face").eq(i).text(arraytwo.split('')[i - indextwo])
			if(arraytwo.split('')[i - indextwo] !== ' '){
			$(".front-face").eq(i).css("background-color", "white")[i - indextwo]
			}
	}
}
}
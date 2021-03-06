'use strict'
const choices = ["rock", "paper", "scissors"];

const computerOutput = document.getElementById("computer-output")
const userInput = document.getElementById("user-input");
const result = document.getElementById("game-result");

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const wins = document.getElementById("wins")
const losses = document.getElementById("losses")
let winCounter = 0;
let lossCounter = 0;


rockBtn.addEventListener('click', setUserInput);
paperBtn.addEventListener('click', setUserInput);
scissorsBtn.addEventListener('click', setUserInput);

function setUserInput() {
	userInput.textContent = this.id;
	play()
}

function computerPlay() {
	computerOutput.textContent = choices[(Math.floor(Math.random()*choices.length))]
  }

function play() {
	computerPlay();
  if (computerOutput.textContent == "rock"){
    if (userInput.textContent == "rock") result.textContent = "You tied."
    else if (userInput.textContent == "paper") result.textContent = "You won!"
    else if (userInput.textContent == "scissors") result.innerHMTL = "You lost."
	}
  else if (computerOutput.textContent == "paper"){
    if (userInput.textContent == "rock") result.textContent = "You lost."
    else if (userInput.textContent == "paper") result.textContent = "You tied."
    else if (userInput.textContent == "scissors") result.textContent = "You won!"
  }
  else if (computerOutput.textContent == "scissors"){
  	if (userInput.textContent == "rock") result.textContent = "You won!"
    else if (userInput.textContent == "paper") result.textContent = "You lost."
    else if (userInput.textContent == "scissors") result.textContent = "You tied."
  }
	/* For some reason in the first if block above, when computer chooses rock and player chooses scissors, the result fails to update from the previous round. If statement below fixes this so game is fully functional. */

	if (computerOutput.textContent == "rock" && userInput.textContent == "scissors") result.textContent = "You lost.";

	if (result.textContent == "You lost."){
		lossCounter += 1;
		losses.textContent = lossCounter;
	} else if (result.textContent == "You won!"){
		winCounter += 1;
		wins.textContent = winCounter;
	}

}

function testGame(){
	let hasError = false;
	for (let choice of choices){
		userInput.textContent = choice;
		let compPlayedRock = false;
		let compPlayedPaper = false;
		let compPlayedScissors = false;
		while (!compPlayedRock || !compPlayedPaper || !compPlayedScissors){
			play();
			if (computerOutput.textContent == "rock"){
				compPlayedRock = true;
				if (choice == "rock"){
					if (!(result.textContent == "You tied.")) hasError = true;
				} else if(choice == "paper"){
					if (!(result.textContent == "You won!")) hasError = true;
				} else if (choice == "scissors"){
					if (!(result.textContent == "You lost.")) hasError = true;
				}
			}
			else if (computerOutput.textContent == "paper"){
				compPlayedPaper = true;
				if (choice == "rock"){
					if (!(result.textContent == "You lost.")) hasError = true;
				} else if (choice == "paper"){
					if (!(result.textContent == "You tied.")) hasError = true;
				} else if (choice == "scissors"){
					if (!(result.textContent == "You won!")) hasError = true;
				}
			}
			else if (computerOutput.textContent == "scissors"){
				compPlayedScissors = true;
				if (choice == "rock"){
					if (!(result.textContent == "You won!")) hasError = true;
				} else if (choice == "paper"){
					if (!(result.textContent == "You lost.")) hasError = true;
				} else if (choice == "scissors"){
					if (!(result.textContent == "You tied.")) hasError = true;
				}
			}
		}
	}
	alert (`Has an error? ${hasError}`);
}
// testGame();
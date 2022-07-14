const choices = ["rock", "paper", "scissors"];

function computerPlay() {
  computerOutput.innerHTML = choices[(Math.floor(Math.random()*choices.length))]
}

const computerOutput = document.getElementById("computer-output")
const userInput = document.getElementById("user-input");

function setUserInput(element) {
	userInput.innerHTML = element.id;
	play()
}

const result = document.getElementById("game-result");
function play() {
	computerPlay();
  if (computerOutput.innerHTML == "rock"){
    if (userInput.innerHTML == "rock") result.innerHTML = "You tied."
    else if (userInput.innerHTML == "paper") result.innerHTML = "You won!"
    else if (userInput.innerHTML == "scissors") result.innerHMTL = "You lost."
	}
  else if (computerOutput.innerHTML == "paper"){
    if (userInput.innerHTML == "rock") result.innerHTML = "You lost."
    else if (userInput.innerHTML == "paper") result.innerHTML = "You tied."
    else if (userInput.innerHTML == "scissors") result.innerHTML = "You won!"
  }
  else if (computerOutput.innerHTML == "scissors"){
  	if (userInput.innerHTML == "rock") result.innerHTML = "You won!"
    else if (userInput.innerHTML == "paper") result.innerHTML = "You lost."
    else if (userInput.innerHTML == "scissors") result.innerHTML = "You tied."
  }
	/* For some reason in the first if block above, when computer chooses rock and player chooses scissors, the result fails to update from the previous round. If statement below fixes this so game is fully functional. */

	if (computerOutput.innerHTML == "rock" && userInput.innerHTML == "scissors") result.innerHTML = "You lost."
}

function testGame(){
	let hasError = false;
	for (let choice of choices){
		userInput.innerHTML = choice;
		let compPlayedRock = false;
		let compPlayedPaper = false;
		let compPlayedScissors = false;
		while (!compPlayedRock || !compPlayedPaper || !compPlayedScissors){
			play();
			if (computerOutput.innerHTML == "rock"){
				compPlayedRock = true;
				if (choice == "rock"){
					if (!(result.innerHTML == "You tied.")) hasError = true;
				} else if(choice == "paper"){
					if (!(result.innerHTML == "You won!")) hasError = true;
				} else if (choice == "scissors"){
					if (!(result.innerHTML == "You lost.")) hasError = true;
				}
			}
			else if (computerOutput.innerHTML == "paper"){
				compPlayedPaper = true;
				if (choice == "rock"){
					if (!(result.innerHTML == "You lost.")) hasError = true;
				} else if (choice == "paper"){
					if (!(result.innerHTML == "You tied.")) hasError = true;
				} else if (choice == "scissors"){
					if (!(result.innerHTML == "You won!")) hasError = true;
				}
			}
			else if (computerOutput.innerHTML == "scissors"){
				compPlayedScissors = true;
				if (choice == "rock"){
					if (!(result.innerHTML == "You won!")) hasError = true;
				} else if (choice == "paper"){
					if (!(result.innerHTML == "You lost.")) hasError = true;
				} else if (choice == "scissors"){
					if (!(result.innerHTML == "You tied.")) hasError = true;
				}
			}
		}
	}
	alert (`Has an error? ${hasError}`);
}
// testGame();
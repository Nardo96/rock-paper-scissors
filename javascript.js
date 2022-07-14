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
    if (userInput.innerHTML == "paper") result.innerHTML = "You won!"
    if (userInput.innerHTML == "scissors") result.innerHMTL = "You lost."
	}
  if (computerOutput.innerHTML == "paper"){
    if (userInput.innerHTML == "rock") result.innerHTML = "You lost."
    if (userInput.innerHTML == "paper") result.innerHTML = "You tied."
    if (userInput.innerHTML == "scissors") result.innerHTML = "You won!"
  }
  if (computerOutput.innerHTML == "scissors"){
  	if (userInput.innerHTML == "rock") result.innerHTML = "You won!"
    if (userInput.innerHTML == "paper") result.innerHTML = "You lost."
    if (userInput.innerHTML == "scissors") result.innerHTML = "You tied."
  }
	/* For some reason in the first if block above, when computer chooses rock and player chooses scissors, the result fails to update from the previous round. If statement below fixes this so game is fully functional. */
	
	if (computerOutput.innerHTML == "rock" && userInput.innerHTML == "scissors") result.innerHTML = "You lost."
}
const choices = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    return choices[(Math.floor(Math.random()*choices.length))]
}

const computerOutput = document.getElementById("computer-output")
computerOutput.innerHTML = computerPlay();

let playerInput;
do playerInput = prompt("Rock, paper, or scissors?")?.toLowerCase()
while (playerInput != "rock" 
    && playerInput != "paper" 
    && playerInput != "scissors");
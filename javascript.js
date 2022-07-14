const choices = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    return choices[(Math.floor(Math.random()*choices.length))]
}

const computerOutput = document.getElementById("computer-output")
computerOutput.innerHTML = computerPlay();

let userInput = document.getElementById("user-input");
/* do playerInput = prompt("Rock, paper, or scissors?")?.toLowerCase()
while (playerInput != "rock" 
    && playerInput != "paper" 
    && playerInput != "scissors"); 
    
 //replaced by button input   */

 const rockButton = document.getElementById("rock");
 const paperButton = document.getElementById("paper");
 const scissorsButton = document.getElementById("scissors");

 function setUserInput(element) {
     userInput.innerHTML = element.id;

 }
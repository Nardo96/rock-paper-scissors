const choices = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    return choices[(Math.floor(Math.random()*choices.length))]
}

const computerOutput = document.getElementById("computer-output")
computerOutput.innerHTML = computerPlay();
console.log(computerPlay());
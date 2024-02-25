function getComputerChoice() {
    //generate a random number between 0 and 2
    const rand = Math.floor(Math.random() * 3);
    //map the random number 
    switch (rand) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }

}
function playRound(playerSelector, computerSelection) {
    if (playerSelector === computerSelection) {
        return "tie"
    }
    else if (playerSelector === "rock" && computerSelection === "scissors") {
        return "you won"
    } else if (playerSelector === "paper" && computerSelection === "rock") {
        return "you won"
    } else if (playerSelector === "scissors" && computerSelection === "paper") {
        return "you won"
    } else { return "you lose" }
}
let yourScore = 0;
let computerScore = 0;
const resultElement = document.getElementById('result');
const finalResultElement = document.getElementById('finalResult')

function play(playerSelector) {
    const computerSelection = getComputerChoice()
    const result = playRound(playerSelector, computerSelection)

    resultElement.textContent = result;
    if (result.includes('won')) {
        yourScore++;
    } else if (result.includes('lose')) {
        computerScore++;
    }
    finalResultElement.textContent = `Your score: ${yourScore}, Computer score: ${computerScore}`;

    // Check if any player has reached 5 points
    if (yourScore === 5 || computerScore === 5) {
        // Announce the winner
        if (yourScore === 5) {
            finalResultElement.textContent += ' You win the game!';
        } else {
            finalResultElement.textContent += ' Computer wins the game!';
        }
        document.getElementById('rock-btn').disabled = true;
        document.getElementById('scissors-btn').disabled = true;
        document.getElementById('paper-btn').disabled = true;
    }
}
const rockBtn = document.getElementById('rock-btn');
rockBtn.addEventListener('click', function () { play('rock') })
const scissorsBtn = document.getElementById('scissors-btn');
scissorsBtn.addEventListener('click', function () { play('scissors') })
const paperBtn = document.getElementById('paper-btn');
paperBtn.addEventListener('click', function () { play('paper') })
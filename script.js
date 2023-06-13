let playerScore = 0;
let computerScore = 0;
let rounds = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        return "You Lose! Paper beats Rock";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        return "You Win! Rock beats scissors";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        return "You Win! Paper beats Rock";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        return "You Win! Scissors beats Rock";
    } else {
        return "Tie";
    }
}

function game(buttonSelection) {
    let result = playRound(`${buttonSelection}`, getComputerChoice());
    rounds++;
    scoreContainer.textContent = result;
    if (playerScore == 5 || computerScore == 5) {
        endGame();
    }
}

function endGame() {
    if (playerScore == 5) {
        console.log("Player Wins!");
    }
    if (computerScore == 5) {
        console.log("Computer Wins!");
    }
}

const scoreContainer = document.querySelector("#score");


const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
rockBtn.addEventListener("click", () => game("rock"));
paperBtn.addEventListener("click", () => game("paper"));
scissorsBtn.addEventListener("click", () => game("scissors"));

function getComputerChoice() {
    switch (Math.ceil(Math.random() * 3)) {
        case 1:
            return "rock";
        case 2:
            return "scissors";
        case 3:
            return "paper";
    }
}
let playerScore = 0;
let computerScore = 0;
let rounds = 0;
let gameEnded = false;

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
    if (gameEnded) {
        return;
    }
    result.textContent = playRound(`${buttonSelection}`, getComputerChoice());
    rounds++;
    score.textContent = `Rounds: ${rounds} | Score: ${playerScore}:${computerScore}`;
    if (playerScore == 5 || computerScore == 5) {
        endGame();
    }
}

function endGame() {
    scoreboard.appendChild(finish);
    gameEnded = true;
    if (playerScore == 5) {
        finish.textContent = "CONGRATULATIONS YOU WON!";
    }
    if (computerScore == 5) {
        finish.textContent = "Oh no you lost.  ;(";
    }
}

const finish = document.createElement("div");
const scoreboard = document.querySelector("#scoreboard");
const score = document.querySelector("#score");
const result = document.querySelector("#result");
const opponentImage= document.querySelector("#opponent");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
rockBtn.addEventListener("click", () => game("rock"));
paperBtn.addEventListener("click", () => game("paper"));
scissorsBtn.addEventListener("click", () => game("scissors"));

function getComputerChoice() {
    switch (Math.ceil(Math.random() * 3)) {
        case 1:
            opponentImage.src = "images/RockOpponent.png";
            return "rock";
        case 2:
            opponentImage.src = "images/ScissorsOpponent.png";
            return "scissors";
        case 3:
            opponentImage.src = "images/PaperOpponent.png";
            return "paper";
    }
}
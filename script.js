function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playerChoice;
    while (playerScore < 5 && computerScore < 5) {
        if (result[4] == "L") {
            computerScore++;
        }
        if (result[4] == "W") {
            playerScore++;
        }
        console.log(`${result} *Player Score: ${playerScore}* *Computer Score: ${computerScore}*`);
    }
    console.log(playerScore > computerScore ? "You Win!!!" : "You Lose, Better Luck Next Time ;(");
}



function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You Win! Rock beats scissors";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You Win! Paper beats Rock";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You Lose! Rock beats Scissors";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You Win! Scissors beats Rock";
    } else {
        return "Tie";
    }
}


const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", function() {
  playRound("rock", getComputerChoice());
});

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", function() {
  playRound("paper", getComputerChoice());
});
const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", function() {
  playRound("scissors", getComputerChoice());
});

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



function getPlayerChoice() {
    let choice = prompt("Rock, Paper, Scissors?").toLowerCase();
    while (choice != "rock" && choice != "paper" && choice != "scissors") {
        choice = prompt('You must enter "Rock", "Paper", or "Scissors" to play');
    }
    return choice;
}
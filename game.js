
// const rock = document.createElement("button");
// const paper = document.createElement("button");
// const scissors = document.createElement("button");

// rock.textContent = "rock";
// paper.textContent = "paper";
// scissors.textContent = "scissors";

// const options = document.querySelector("div");
// const computer = getComputerChoice;
// options.appendChild(computer);

// options.appendChild(rock);
// options.appendChild(paper);
// options.appendChild(scissors);

document.getElementById("rock").addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("rock", computerChoice);
});

document.getElementById("paper").addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("paper", computerChoice);
});

document.getElementById("scissors").addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("scissors", computerChoice);
});

function getComputerChoice() {
    // chose a random num between 0-2, each num representes one option
    let num = Math.floor(Math.random() * 3);
    let choiceArr = ["rock", "paper", "scissors"];
    return choiceArr[num];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    let winner;

    if (playerSelection === computerSelection) {
        winner = "It's a tie!";
    }

    // paper wins rock, rock wins scissors, scissors wins paper
    //player wins
    else if ((playerSelection == "paper" && computerSelection == "rock") ||
            (playerSelection == "scissors" && computerSelection == "paper") ||
            (playerSelection == "rock" && computerSelection == "scissors")) {
        winner = "You won the game!";
    }

    //player wins
    else if (playerSelection == "rock" && computerSelection == "paper" ||
    playerSelection == "paper" && computerSelection == "scissors" ||
    playerSelection == "scissors" && computerSelection == "rock") {
        winner = "The computer won the game!"
    }

    document.getElementById("computer-choice").textContent = computerSelection;
    document.getElementById("winner").textContent = winner;
}

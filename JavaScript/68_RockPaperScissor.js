//Rock Paper Scissors

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = " ";

  if (playerChoice === computerChoice) {
    result = "IT'S A TIE";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "paper" ? "YOU LOSE" : "YOU WIN";
        break;

      case "paper":
        result = computerChoice === "scissors" ? "YOU LOSE" : "YOU WIN";
        break;

      case "scissors":
        result = computerChoice === "rock" ? "YOU LOSE" : "YOU WIN";
        break;
    }
  }

  playerDisplay.textContent = "PLAYER : " + playerChoice;
  computerDisplay.textContent = "COMPUTER : " + computerChoice;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greenText", "redText");

  if (result === "YOU WIN") {
    resultDisplay.classList.add("greenText");
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
  } else if (result === "YOU LOSE") {
    resultDisplay.classList.add("redText");
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
  }
}

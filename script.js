function getRandomComputerResult() {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  );
}

let playerScore = 0;
let computerScore = 0;

let computerHand = document.getElementById("computer-hand");
let userHand = document.getElementById("user-hand");

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  computerHand.setAttribute("src", `img/${computerResult}-c.png`);

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    roundResultsMsg.style.background = "var(--bg-green)";
    return `You win! ${userOption} beats ${computerResult}`;
  } else if (computerResult === userOption) {
    roundResultsMsg.style.background = "var(--bg-yellow)";
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    roundResultsMsg.style.background = "var(--bg-red)";
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

roundResultsMsg.innerText = "The first one to three points wins";

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;

  if (playerScore === 3 || computerScore === 3) {
    winnerMsgElement.innerText = `${
      playerScore === 3 ? "You have" : "Computer has"
    } won the game!`;

    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "block";
  roundResultsMsg.innerText = "The first one to three points wins";
  roundResultsMsg.style.background = "transparent";
  winnerMsgElement.innerText = "";
  computerHand.setAttribute("src", `img/rock-c.png`);
  userHand.setAttribute("src", `img/rock-u.png`);
}

resetGameBtn.addEventListener("click", resetGame);

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
  userHand.setAttribute("src", "img/rock-u.png");
  showResults("rock");
});

paperBtn.addEventListener("click", function () {
  userHand.setAttribute("src", "img/paper-u.png");
  showResults("paper");
});

scissorsBtn.addEventListener("click", function () {
  userHand.setAttribute("src", "img/scissors-u.png");
  showResults("scissors");
});

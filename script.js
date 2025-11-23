function getHumanChoice(user) {
  return user;
}

function getComputerChoice(result) {
  if (result > 0.1 && result < 0.3) {
    return "rock";
  } else if (result > 0.5 && result < 0.7) {
    return "scissors";
  } else {
    return "paper";
  }
}

let human = 0;
let pc = 0;
let Winner = "Again";

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return;
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    human++;
    document.getElementById("human").textContent = human;
  } else {
    pc++;
    document.getElementById("pc").textContent = pc;
  }

  check();
}

function check() {
  if (human === 5) {
    Winner = "Stop";
    document.getElementById("display").textContent = "Won!";
  } else if (pc === 5) {
    Winner = "Stop";
    document.getElementById("display").textContent = "Lose!";
  }
}
document.getElementById("btn1").addEventListener("click", function () {
  if (Winner === "Stop") return;
  playRound("rock", getComputerChoice(Math.random()));
});

document.getElementById("btn2").addEventListener("click", function () {
  if (Winner === "Stop") return;
  playRound("paper", getComputerChoice(Math.random()));
});

document.getElementById("btn3").addEventListener("click", function () {
  if (Winner === "Stop") return;
  playRound("scissors", getComputerChoice(Math.random()));
});

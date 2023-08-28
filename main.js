function getComputerChoice() {
  const values = ["Rock", "Paper", "Scissors"];

  return values[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  console.log(`Computer's choice: ${computerSelection}`)
  if (playerSelection == computerSelection) {
    return 0;
  } else if(
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    return 1;
  } else {
    return -1;
  }
}

function game() {
  let computerScore = 0;
  let playerScore = 0;
  for(let i = 0; i < 5; i++) {
    playerSelection = prompt('rock, paper, or scissors');
    computerSelection = getComputerChoice();
    point = playRound(playerSelection, computerSelection);
    if (point == -1) {
      computerScore++;
    } else if (point == 1) {
      playerScore++;
    } else {
      continue;
    }

  }
  console.log(`Player Score: ${playerScore}`);
  console.log(`Computer Score: ${computerScore}`);

  if(playerScore > computerScore) {
    console.log("You are winner.")
  } else if(computerScore == playerScore) {
    console.log("It is a tie.")
  } else {
    console.log("You are loser.")
  }
}


game()


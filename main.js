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
  while(true) {
    let playerChoice = prompt("rock, paper, or scissors?");
    let computerChoice = getComputerChoice();

    let point = playRound(playerChoice, computerChoice);

    if(point == 1) {
      playerScore++;
    } else if(point == -1) {
      computerScore++;
    } else {
      continue;
    }

    // display scores
    console.log(`Player score: ${playerScore}`)
    console.log(`Computer score: ${computerScore}`)
    
    if(playerScore == 5) {
      console.log("You are winner. You deserve to live one more day.")
      break;
    } 
    if(computerScore == 5) {
      console.log("You are loser. Commit seppuku now.");
      break;
    } 
  }
}


game()


function getComputerChoice() {
    // Generate a random number between 0 and 2
    const randomNumber = Math.floor(Math.random() * 3);
  
    // Map the random number to 'Rock', 'Paper', or 'Scissors'
    switch (randomNumber) {
      case 0:
        return 'Rock';
      case 1:
        return 'Paper';
      case 2:
        return 'Scissors';
    }
  }

  function playRound(playerSelection, computerSelection) {
    // Make playerSelection case-insensitive
    playerSelection = playerSelection.toLowerCase();
    
    // Determine the winner of the round
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (playerSelection === 'rock') {
      if (computerSelection === 'paper') {
        return "You Lose! Paper beats Rock";
      } else {
        return "You Win! Rock beats Scissors";
      }
    } else if (playerSelection === 'paper') {
      if (computerSelection === 'rock') {
        return "You Win! Paper beats Rock";
      } else {
        return "You Lose! Scissors beats Paper";
      }
    } else if (playerSelection === 'scissors') {
      if (computerSelection === 'rock') {
        return "You Lose! Rock beats Scissors";
      } else {
        return "You Win! Scissors beats Paper";
      }
    } else {
      return "Invalid selection! Please choose rock, paper, or scissors.";
    }
  }

/*const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
*/
function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const playerSelection = getPlayerSelection();
      const computerSelection = getComputerSelection();
      const roundResult = playRound(playerSelection, computerSelection);
      console.log(`Round ${i + 1}: ${roundResult}`);
  
      if (roundResult.startsWith("You Win")) {
        playerScore++;
      } else if (roundResult.startsWith("You Lose")) {
        computerScore++;
      }
    }
  
    if (playerScore > computerScore) {
      console.log(`You win! Final score: ${playerScore}-${computerScore}`);
    } else if (computerScore > playerScore) {
      console.log(`You lose! Final score: ${playerScore}-${computerScore}`);
    } else {
      console.log(`It's a tie! Final score: ${playerScore}-${computerScore}`);
    }
  }
  
  function getPlayerSelection() {
    let selection = "";
    while (!isValidSelection(selection)) {
      selection = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
    }
    return selection;
  }
  
  function isValidSelection(selection) {
    return selection === "rock" || selection === "paper" || selection === "scissors";
  }
  
  function getComputerSelection() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "It's a tie!";
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
  }
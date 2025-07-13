// Function to randomly return Rock, Paper, or Scissors
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to play a single round
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }

    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerWins++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerWins++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

// Example usage:
let menu = document.querySelector('#menu');
let playerWins = 0;
let computerWins = 0;
menu.addEventListener('click', (event)=>{
    let target = event.target;
    const playerChoice = (target.textContent);
    const computerChoice = getComputerChoice();
    text = (playRound(playerChoice, computerChoice));

    let display = document.querySelector('#display');
    display.textContent = text;
    console.log(playerWins+computerWins)
    if (playerWins+computerWins === 5){
    
        const newDiv = document.createElement('div');
        if (playerWins > computerWins){
            newDiv.textContent = "You Won!"
        }
        else{
            newDiv.textContent = "You Lost!"
        }
        newDiv.style.padding = '10px';
    newDiv.style.backgroundColor = '#f0f0f0';
    
    // Append to the bottom of <body>
    document.body.appendChild(newDiv);
    }
    
});
console.log(playerWins);






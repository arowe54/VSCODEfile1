// plays a game of rock paper scissors
/*

computer gets a random choice of rock, paper, or scissors
the player chooses rock, paper, or scissors.
a round is played and whoever wins (ex. rock beats scissors, scissors > paper, paper > rock) is returned along with the choice of both
ex. if player loses: "You lose! Paper beats Rock."

Program plays five rounds in one game and reports a winner or loser at the end
*/

function getComputerChoice() {
    compChoice = Math.floor(Math.random()*3); // random integer from 0 to 2

    switch (compChoice){
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}
let computerChoice = getComputerChoice();

function getPlayerChoice(){
    let playerChoice = "";
    while (playerChoice == computerChoice){
        getPlayerChoice = prompt("Lets Play Rock Paper Scissors.\nDo you choose rock, paper, or scissors?", "Insert Choice Here");
        if (playerChoice == computerChoice){
            prompt("It is a tie, please try again");
        } else {} 
    }
}




function playRound(computerSelection, playerSelection){
    let result = '';
    switch (computerSelection){
        case 'Rock':
            result = (playerSelection == /paper/) ? "Win" : "Lose";
            break;
        case 'Paper':
            result = (playerSelection == /scissors/) ? "Win" : "Lose";
            break;
        case 'Scissors':
            result = (playerSelection == /rock/) ? "Win" : "Lose";
            break;
    }

    return (result == "Win") ? prompt(`You Win! ${playerSelection} beats ${computerSelection}.`) : prompt(`You Lose! ${computerSelection} beats ${playerSelection}`);
}

function playGame(){
    let playerWins;
    let compWins;
    for (let i = 0; i < 5; i++){
        playRound(getComputerChoice, getPlayerChoice); // plays 5 rounds in one game
        (playRound.result == "Win") ? playerWins++ : compWins++;
    }
    (playerWins > compWins) ? "You Win!" : "You Lose";
}


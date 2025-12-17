

function getComputerChoice(){
    let x = Math.random();

    if ( x <= 1/3){
        return "rock";
    } else if ( x >= 2/3){
        return "paper";
    } else if ( x <= 2/3 && x >= 1/3){
        return "scissors";
    }
}
var computerChoice = getComputerChoice();
console.log(computerChoice);

function getHumanChoice(){
    let y = prompt();
    y = y.toLowerCase();
    if (y === "rock"){
        return "rock";
    } else if (y === "paper"){
        return "paper";
    } else if (y === "scissors"){
        return "scissors";
    }
}
var humanChoice = getHumanChoice();
console.log(humanChoice);

//if humanChoice is rock and computerChoice is rock return draw//
//if humanChoice is rock and computerChoice is paper return lose//
//if humanChoice is rock and computerChoice is scissors return win//
//if humanChoice is paper and computerChoice is rock return win//
//if humanChoice is paper and computerChoice is paper return draw//
//if humanChoice is paper and computerChoice is scissors return lose//
//if humanChoice is scissors and computerChoice is rock return lose//
//if humanChoice is scissors and computerChoice is paper return win//
//if humanChoice is scissors and computerChoice is scissors return draw//


var humanScore = 0
var computerScore = 0

function playRound(humanChoice, computerChoice){
    if (humanChoice == "rock" && computerChoice == "rock"){
        return "Draw, please play again.";
    } else if (humanChoice == "paper" && computerChoice == "rock"){
        humanScore++
        return "Winner! Paper covers rock.";
    } else if (humanChoice == "scissors" && computerChoice == "rock"){
        computerScore++
        return "Loser! Rock crushes scissors.";
    } else if (humanChoice == "rock" && computerChoice == "paper"){
        computerScore++
        return "Loser! Paper covers rock.";
    } else if (humanChoice == "paper" && computerChoice == "paper"){
        return "Draw, please play again.";
    } else if (humanChoice == "scissors" && computerChoice == "paper"){
        humanScore++
        return "Winner! Scissors cuts paper.";
    } else if (humanChoice == "rock" && computerChoice == "scissors"){
        humanScore++
        return "Winner! Rock crushes scissors.";
    } else if (humanChoice == "paper" && computerChoice == "scissors"){
        computerScore++
        return "Loser! Scissors cuts paper.";
    } else if (humanChoice == "scissors" && computerChoice == "scissors"){
        return "Draw, please play again.";
    }
}
console.log(playRound(humanChoice, computerChoice));
console.log(humanScore, computerScore);

function playGame(){
    humanChoice = getHumanChoice()
    computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice);
    humanChoice = getHumanChoice()
    computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice);
    humanChoice = getHumanChoice()
    computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice);
    humanChoice = getHumanChoice()
    computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice);
    humanChoice = getHumanChoice()
    computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice);
    return {human: humanScore, computer: computerScore};
}
console.log(playGame());



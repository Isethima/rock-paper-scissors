

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
const computerChoice = getComputerChoice();
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
const humanChoice = getHumanChoice();
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
        return "draw";
    } else if (humanChoice == "paper" && computerChoice == "rock"){
        humanScore++
        return "win";
    } else if (humanChoice == "scissors" && computerChoice == "rock"){
        computerScore++
        return "lose";
    } else if (humanChoice == "rock" && computerChoice == "paper"){
        computerScore++
        return "lose";
    } else if (humanChoice == "paper" && computerChoice == "paper"){
        return "draw";
    } else if (humanChoice == "scissors" && computerChoice == "paper"){
        humanScore++
        return "win";
    } else if (humanChoice == "rock" && computerChoice == "scissors"){
        humanScore++
        return "win";
    } else if (humanChoice == "paper" && computerChoice == "scissors"){
        computerScore++
        return "lose";
    } else if (humanChoice == "scissors" && computerChoice == "scissors"){
        return "draw";
    }
}
console.log(playRound(humanChoice, computerChoice));
console.log(humanScore, computerScore);



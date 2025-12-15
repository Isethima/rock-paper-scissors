

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
console.log(getComputerChoice())

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
console.log(getHumanChoice())

function playRound(humanChoice, computerChoice){
    
}
    console.log(playRound(humanChoice, computerChoice));

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);




//if computer wins return//


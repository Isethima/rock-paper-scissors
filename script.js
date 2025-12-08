//prompt user input rock, paper, or scissors//
//other input return invalid//
//generate number 0-2 for computer//
//assign 0-2 to rock, paper, scissors//
//if user rock pc rock return draw//
//if user rock pc scissors return win//
//if user rock pc paper return lose//
//if user paper pc rock return win//
//if user paper pc paper return draw//
//if user paper pc scissors return lose//
//if user scissors pc rock return lose//
//if user scissors pc paper return win//
//if user scissors pc scissors return draw//


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

var = humanScore

var = computerScore
//if computer wins return//


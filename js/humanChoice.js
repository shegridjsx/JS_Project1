let humanChoice = prompt("Let\'s play Rock, Paper, & Scissors! \n\nThis is a best of 5 series. \n\nWhoever scores 3 first between you or the computer will win! \n\nPlease enter 'rock', 'paper', or 'scissor', your choice!");
humanChoice = humanChoice.toLowerCase();

function getHumanChoice(humanChoice){
    if(humanChoice === "rock"){
        return humanChoice;
    } else if (humanChoice === "paper"){
        return humanChoice;
    }
    else if (humanChoice === "scissor"){
        return humanChoice;
    } else {
        let humanChoice = prompt("Let\'s play Rock, Paper, & Scissors! \n\nThis is a best of 5 series. \n\nWhoever scores 3 first between you or the computer will win! \n\nPlease enter 'rock', 'paper', or 'scissor', your choice!");
        humanChoice = humanChoice.toLowerCase();
        getHumanChoice(humanChoice);
    }
}

console.log(getHumanChoice(humanChoice));
console.log(getComputerChoice(3));
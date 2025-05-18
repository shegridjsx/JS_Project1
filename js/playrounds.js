let humanChoice = prompt("Let\'s play Rock, Paper, & Scissor! \n\nThis is a best of 5 series. \n\nWhoever scores 3 first between you or the computer will win! \n\nPlease enter 'rock', 'paper', or 'scissor', your choice!\n\n Good luck!");
humanChoice = humanChoice.toLowerCase();


const humanSelection = getHumanChoice(humanChoice);
const computerSelection = getComputerChoice(3);


function playround(humanSelection, computerSelection){
    if((humanSelection === "rock" && computerSelection === "Rock") || (humanSelection === "paper" && computerSelection === "Paper") || (humanSelection === "scissor" && computerSelection === "Scissor")){
        console.log("It's a tie!");
        console.log("\n\n\nYour choice is: " + humanSelection);
        console.log("\nThe Computer selected: " + computerSelection);
    }
    else if(humanSelection === "rock" && computerSelection === "Paper"){
        console.log("You lose! \nPaper beats rock!");
        console.log("\n\n\nYour choice is: " + humanSelection);
        console.log("\nThe Computer selected: " + computerSelection);
        computerScore++;
    } else if(humanSelection === "rock" && computerSelection === "Scissor"){
        console.log("You Win! \nRock beats Scissor!");
        console.log("\n\n\nYour choice is: " + humanSelection);
        console.log("\nThe Computer selected: " + computerSelection);
        humanScore++;
    } else if(humanSelection === "paper" && computerSelection === "Rock"){
        console.log("You Win! \nPaper beats Rock!");
        console.log("\n\n\nYour choice is: " + humanSelection);
        console.log("\nThe Computer selected: " + computerSelection);
        humanScore++;
    } else if(humanSelection === "paper" && computerSelection === "Scissor"){
        console.log("You Lose! \nScissor beats Paper!");
        console.log("\n\n\nYour choice is: " + humanSelection);
        console.log("\nThe Computer selected: " + computerSelection);
        computerScore++;
    } else if(humanSelection === "scissor" && computerSelection === "Rock"){
        console.log("You Lose! \nRock beats Scissor!");
        console.log("\n\n\nYour choice is: " + humanSelection);
        console.log("\nThe Computer selected: " + computerSelection);
        computerScore++;
    } else if(humanSelection === "scissor" && computerSelection === "Paper"){
        console.log("You Win! \nScissor beats Paper!");
        console.log("\n\n\nYour choice is: " + humanSelection);
        console.log("\nThe Computer selected: " + computerSelection);
        humanScore++;
    } else {
        let humanChoice = prompt("Let\'s play Rock, Paper, & Scissor! \n\nThis is a best of 5 series. \n\nWhoever scores 3 first between you or the computer will win! \n\nPlease enter 'rock', 'paper', or 'scissor', your choice! \n\n Good luck!");
        humanChoice = humanChoice.toLowerCase();
        //getHumanChoice(humanChoice);

        const humanSelection = getHumanChoice(humanChoice);
        const computerSelection = getComputerChoice(3);

        playround(humanSelection, computerSelection);
    }
}


playround(humanSelection, computerSelection);
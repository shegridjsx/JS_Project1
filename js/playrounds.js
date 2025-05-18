


function playround(humanSelection, computerSelection){
    if((humanSelection === "rock" && computerSelection === "Rock") || (humanSelection === "paper" && computerSelection === "Paper") || (humanSelection === "scissor" && computerSelection === "Scissor")){
        console.clear();
        console.log("\n\n\nIt's a tie for this round!");
        console.log("\nYour choice is: " + humanSelection);
        console.log("\nThe Computer selected: " + computerSelection);
        computerScore = computerScore + 0;
        humanScore = humanScore + 0;
        console.log("\nScores:\n");
        console.log("Human: " + humanScore + "\n");
        console.log("Computer: " + computerScore + "\n");
    }
    else if(humanSelection === "rock" && computerSelection === "Paper"){
       console.clear();
        console.log("\n\n\nYou lose for this round! \nPaper beats rock!");
        console.log("\nYour choice is: " + humanSelection);
        console.log("\nThe Computer selected: " + computerSelection);
        computerScore++;
        humanScore = humanScore + 0;
        console.log("\nScores:\n");
        console.log("Human: " + humanScore + "\n");
        console.log("Computer: " + computerScore + "\n");
    } else if(humanSelection === "rock" && computerSelection === "Scissor"){
        console.clear();
        console.log("\n\n\nYou Win for this round! \nRock beats Scissor!");
        console.log("\nYour choice is: " + humanSelection);
        console.log("\nThe Computer selected: " + computerSelection);
        humanScore++;
        computerScore = computerScore + 0;
        console.log("\nScores:\n");
        console.log("Human: " + humanScore + "\n");
        console.log("Computer: " + computerScore + "\n");
    } else if(humanSelection === "paper" && computerSelection === "Rock"){
        console.clear()
        console.log("\n\n\nYou Win for this round! \nPaper beats Rock!");
        console.log("\nYour choice is: " + humanSelection);
        console.log("\nThe Computer selected: " + computerSelection);
        humanScore++;
        computerScore = computerScore + 0;
        console.log("\nScores:\n");
        console.log("Human: " + humanScore + "\n");
        console.log("Computer: " + computerScore + "\n");
    } else if(humanSelection === "paper" && computerSelection === "Scissor"){
        console.clear();
        console.log("\n\n\nYou Lose for this round! \nScissor beats Paper!");
        console.log("\nYour choice is: " + humanSelection);
        console.log("\nThe Computer selected: " + computerSelection);
        computerScore++;
        humanScore = humanScore + 0;
        console.log("\nScores:\n");
        console.log("Human: " + humanScore + "\n");
        console.log("Computer: " + computerScore + "\n");
    } else if(humanSelection === "scissor" && computerSelection === "Rock"){
        console.clear();
        console.log("\n\n\nYou Lose for this round! \nRock beats Scissor!");
        console.log("\nYour choice is: " + humanSelection);
        console.log("\nThe Computer selected: " + computerSelection);
        computerScore++;
        humanScore = humanScore + 0;
        console.log("\nScores:\n");
        console.log("Human: " + humanScore + "\n");
        console.log("Computer: " + computerScore + "\n");
    } else if(humanSelection === "scissor" && computerSelection === "Paper"){
        console.clear();
        console.log("\n\n\nYou Win for this round! \nScissor beats Paper!");
        console.log("\nYour choice is: " + humanSelection);
        console.log("\nThe Computer selected: " + computerSelection);
        humanScore++;
        computerScore = computerScore + 0;
        console.log("Scores:\n");
        console.log("Human: " + humanScore + "\n");
        console.log("Computer: " + computerScore + "\n");
    } else {
        let humanChoice = prompt("Let\'s play Rock, Paper, & Scissor! \n\nThis is a best of 5 series. \n\nWhoever scores 3 first between you or the computer will win! \n\nPlease enter 'rock', 'paper', or 'scissor', your choice! \n\n Good luck!");
        humanChoice = humanChoice.toLowerCase();
        //getHumanChoice(humanChoice);

        const humanSelection = getHumanChoice(humanChoice);
        const computerSelection = getComputerChoice(3);

        playround(humanSelection, computerSelection);
       
    }
}



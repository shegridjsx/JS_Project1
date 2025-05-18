
function playGame(){

    
    let counter = 0;



    for(counter; counter<5; counter++){

        let humanChoice = prompt("Let\'s play Rock, Paper, & Scissor! \n\nThis is a best of 5 series. \n\nWhoever scores more after 5 rounds between you or the computer will win! \n\nPlease enter 'rock', 'paper', or 'scissor', your choice!\n\n Good luck!");
        humanChoice = humanChoice.toLowerCase();


        const humanSelection = getHumanChoice(humanChoice);
        const computerSelection = getComputerChoice(3);

        playround(humanSelection, computerSelection);
    }
    if(humanScore > computerScore){
        console.log("\n\n\nYou win the series!\n");
        console.log("\nScores:\n");
        console.log("Human: " + humanScore);
        console.log("Computer: " + computerScore);
    } else {
        console.log("\n\n\nYou lose the series!\n");
        console.log("\nScores:\n");
        console.log("Human: " + humanScore);
        console.log("Computer: " + computerScore);
    }
}

playGame();
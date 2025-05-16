let computerChoice;
function getComputerChoice(max) {
  computerChoice =  Math.floor(Math.random() * max);

  if(computerChoice === 0){
   return computerChoice = "Rock";
  }
  else if ( computerChoice === 1) {
    return computerChoice = "Paper";
  } else {
    return computerChoice = "Scissor";
  }
}


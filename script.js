function getHumanChoice(user){
    return user
}
function getComputerChoice(result){
  if(result>0.1 && result<0.3){
   return "rock"
  }
  else if(result>0.5 && result<0.7){
   return "scissors"
  }else{
    return "paper"
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "Again"; 
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return "Won";
  } else {
    return "Lost";
  }
}
let Winner ='Again';
while(Winner ==='Again'){
  let getValue = prompt("Enter your choice: (rock/paper/scissors)");
  const humanSelection = getHumanChoice(getValue.toLowerCase());
  const computerSelection = getComputerChoice(Math.random());
  console.log("Computer: ",computerSelection)
  console.log("You: ",humanSelection)

  Winner = playRound(humanSelection,computerSelection)
  console.log(Winner)
}

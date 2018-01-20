function computerPlay() {
	const computerNumber = Math.floor(Math.random()*100)
	if (computerNumber >= 66) {
		return "scissors";
	} else if (computerNumber >= 33){
		return "rock";
	} else {
		return "paper";
	}
}

function humanPlay(){
	let valid = false;
	do{
		let humanChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
		if(["rock", "paper", "scissors"].includes(humanChoice)){
			valid = true;
			return humanChoice;
		}
	} while (valid == false)
}
function checkWinner(computerChoice, humanChoice) {
  if (computerChoice === humanChoice) {
    console.log("Tie!");
    return;
  } else if (computerChoice === "rock") {
    if (humanChoice === "paper") {
      console.log("Paper covers Rock\nYOU WIN!");
      return;
    } else {
      console.log("Rock smashes Scissors\nYou Lose.");
      return;
    }
  } else if (computerChoice === "paper") {
    if (humanChoice === "rock") {
      console.log("Paper covers Rock\nYou Lose.");
      return;
    } else {
      console.log("Scissors cuts Paper\nYOU WIN!");
      return;
    }
  } else {
    if (humanChoice === "rock") {
      console.log("Rock smashes Scissors\nYOU WIN!";
      return;
    }
  }
}

function game(){
  let computerChoice = computerPlay();
  let humanChoice = humanPlay();
  checkWinner(computerChoice, humanChoice)
  console.log("They chose: " + computerChoice)
  console.log("You  chose: " + humanChoice)
}



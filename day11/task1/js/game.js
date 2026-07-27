var PlayerOneChoice = "Rock";
var PlayerTwoChoice = "scissors";

if (PlayerOneChoice === PlayerTwoChoice) {
  console.log(`it is a tie!!!`);
}
else if (PlayerOneChoice === "Rock" && PlayerTwoChoice === "Paper") {
  console.log(`Player Two wins! (Paper beats Rock)`);
}
else if (PlayerOneChoice === "Paper" && PlayerTwoChoice === "Rock") {
  console.log(`Player One wins! (Paper beats Rock)`);
}
else if (PlayerOneChoice === "Rock" && PlayerTwoChoice === "scissors") {
  console.log(`Player One wins! (Rock beats scissors)`);
}
else if (PlayerOneChoice === "scissors" && PlayerTwoChoice === "Rock") {
  console.log(`Player Two wins! (Rock beats scissors)`);
}
else if (PlayerOneChoice === "Paper" && PlayerTwoChoice === "scissors") {
  console.log(`Player Two wins! (scissors beats Paper)`);
}
else if (PlayerOneChoice === "scissors" && PlayerTwoChoice === "Paper") {
  console.log(`Player One wins! (scissors beats Paper)`);
}
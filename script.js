const choices = document.querySelectorAll(".choice");
console.log(choices);

let computer = 0;
let you = 0;

const ComputerChoose = () => {
  let gameCom = ["Rock", "Paper", "Scissors"];
  let Comp = Math.floor(Math.random() * 3);
  return gameCom[Comp];
};

function drawGame() {
  document.getElementById("msg").innerText = "Result : Match Draw";
}

function showWinner(userWin) {
  if (userWin) {
    you++;
    document.getElementById("You").innerText = `You : ${you}`;
    document.getElementById("msg").innerText = "Result : You win";
  } else {
    computer++;
    document.getElementById("Com").innerText = `Comp : ${computer}`;
    document.getElementById("msg").innerText = "Result : You lose";
  }
}

const playGame = userChoice => {
  console.log(userChoice);
  let comChoice = ComputerChoose();

  if (userChoice === comChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "Rock") {
      userWin = comChoice === "Paper" ? false : true;
    } else if (userChoice === "Paper") {
      userWin = comChoice === "Scissors" ? false : true;
    } else {
      userWin = comChoice === "Rock" ? false : true;
    }
    showWinner(userWin);
  }
};

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    let userChoice = choice.id;
    playGame(userChoice);
  });
});
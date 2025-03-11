let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepar = document.querySelector("#user-score");
const compScorepar = document.querySelector("#comp-score");

const drawgame = () => {
  console.log("draw the game");
  msg.innerText = " Draw the game";
  msg.style.backgroundColor = "black";
};

const showwinner = (userwin, userchoice, compchoice) => {
  if (userwin) {
    console.log("you win..");
    userscore++;
    userScorepar.innerText = userscore;
    msg.innerText = ` your win ..${userchoice} bests ${compchoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    compScorepar.innerText = compscore;
    console.log("computer win..");
    msg.innerText = ` you lose..${compchoice} bests ${userchoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playgame = (userchoice) => {
  console.log("user choice is", userchoice);
  const compchoice = gencompchoice();
  console.log("computer choice is", compchoice);
  if (userchoice == compchoice) {
    drawgame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = compchoice === "scissors" ? false : true;
    } else {
      userwin = compchoice === "rock" ? false : true;
    }

    showwinner(userwin, userchoice, compchoice);
  }
};

const gencompchoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randidx = Math.floor(Math.random() * 3);
  return options[randidx];
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});

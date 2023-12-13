let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const user_Score = document.querySelector("#user-score");
const comp_Score = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

};

const drawgame = () => {
    console.log("game was draw");
    msg.innerHTML = "Game was Draw,Play Again"
    msg.style.backgroundColor = "gray"
}

const showWinner = (userWin,userChoice,compchoice) => {
    if (userWin) {
        userScore++;
        user_Score.innerHTML=userScore;
        console.log("You Win");
        msg.innerHTML = `You Win, Your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green"
    } else {
        compScore++;
        comp_Score.innerHTML=compScore;
        console.log("You Lose");
        msg.innerHTML = `You Lose, ${compchoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "Red"
    }
};

const playGame = (userChoice) => {
    // console.log("user choice = ", userChoice);

    //Genrating computer choice 
    const compchoice = genCompChoice();
    // console.log("comp choice = ", compchoice);

    if (userChoice === compchoice) {
        //draw game
        drawgame();
    } else {
        userWin = true;
        if (userChoice === "rock") {
            // scissors, paper
            userWin = compchoice === "paper" ? false : true; //ternary if else
        } else if (userChoice === "paper") {
            // rock, scissors
            userWin = compchoice === "scissors" ? false : true; //ternary if else
        } else {
            // rock,paper
            userWin = compchoice === "rock" ? false : true; //ternary if else
        }
        showWinner(userWin,userChoice,compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
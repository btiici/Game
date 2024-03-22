const choices = ['rock', 'paper', 'scissors']
const resultDisplay = document.querySelector('.result')
const playerDisplay = document.querySelector('.playerDisplay')
const computerDisplay = document.querySelector('.computerDisplay')
const playerScoreDisplay = document.querySelector('.playerScoreDisplay')
const computerScoreDisplay = document.querySelector('.computerScoreDisplay')
let playerScore = 0
let computerScore = 0

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)]
    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE!"
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!"
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!"
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!"
                break;
        }
    }
    playerDisplay.textContent = `PLAYER: ${playerChoice}`
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`
    resultDisplay.textContent = result

    resultDisplay.classList.remove("green", "red")

    switch (result){
        case "YOU WIN!":
        playerScore++;
        playerScoreDisplay.textContent = playerScore
        resultDisplay.classList.add("green")
        break;
        case "YOU LOSE!":
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        resultDisplay.classList.add("red")
        break;
    }

}
const OPTIONS = ["Rock", "Paper", "Scissors", "Lizard", "Spock"]
const numberToWin = 5

const numToWinDisplay = document.querySelector(".number-to-win")
numToWinDisplay.textContent = numberToWin

let playerScore = 0;
let computerScore = 0;
let tieCount = 0;

const playerScoreDisplay = document.querySelector(".player-score")
const computerScoreDisplay = document.querySelector(".computer-score")
const numberTiesDisplay = document.querySelector(".number-ties")

let playerChoice, computerChoice

const playerChoiceDisplay = document.querySelector(".player-choice")
const computerChoiceDisplay = document.querySelector(".computer-choice")
const resultDisplay = document.querySelector(".result")

const playerChoiceButtons = document.querySelectorAll(".player-choice-button")
const resetButton = document.querySelector(".reset-button")

const returnComputerChoice = () => {
    const rand = Math.floor(OPTIONS.length * Math.random())
    return OPTIONS[rand]
}

const checkRound = (playerSelection, computerSelection) => {
    let result = ""

    if (playerSelection === computerSelection) {
        result = "You tied!"
    }
    else {
        switch (playerSelection) {
            case ("Rock"):
                result = (computerSelection === "Paper" || computerSelection === "Spock") ? "You lose!" : "You win!"
                break
            case ("Paper"):
                result = (computerSelection === "Scissors" || computerSelection === "Lizard") ? "You lose!" : "You win!"
                break
            case ("Scissors"):
                result = (computerSelection === "Rock" || computerSelection === "Spock") ? "You lose!" : "You win!"
                break
            case ("Lizard"):
                result = (computerSelection === "Scissors" || computerSelection === "Rock") ? "You lose!" : "You win!"
                break
            case ("Spock"):
                result = (computerSelection === "Lizard" || computerSelection === "Paper") ? "You lose!" : "You win!"
                break
        }
    }

    switch(result) {
        case("You win!"):
            playerScore += 1
            break
        case("You lose!"):
            computerScore += 1
            break
        case("You tied!"):
            tieCount += 1
    }

    playerScoreDisplay.textContent = playerScore
    computerScoreDisplay.textContent = computerScore
    numberTiesDisplay.textContent = tieCount
    resultDisplay.textContent = result

}

const playRound = (e) => {
    e.preventDefault()

    playerChoice = e.target.dataset.choice
    computerChoice = returnComputerChoice()

    playerChoiceDisplay.textContent = playerChoice
    computerChoiceDisplay.textContent = computerChoice

    if (playerChoice !== "" && computerChoice !== "") checkRound(playerChoice, computerChoice)
    checkWinLose()
}

const checkWinLose = () => {
    if (playerScore < numberToWin && computerScore < numberToWin) return

    playerChoiceButtons.forEach(button => button.removeEventListener("click", playRound))
    resultDisplay.textContent = playerScore > computerScore ? "You Win The Game!" : "Computer Wins The Game!"
    resetButton.classList.remove("display-none")
    resetButton.addEventListener("click", setupGame)
}

const setupGame = () => {
    playerScore = 0
    computerScore = 0
    tieCount = 0
    playerChoice = ""
    computerChoice = ""
    playerScoreDisplay.textContent = playerScore
    computerScoreDisplay.textContent = computerScore
    numberTiesDisplay.textContent = tieCount
    resetButton.classList.add("display-none")
    resetButton.removeEventListener("click", setupGame)
    playerChoiceButtons.forEach(button => button.addEventListener("click", playRound))
}

setupGame()
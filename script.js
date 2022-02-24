const OPTIONS = ["Rock", "Paper", "Scissors", "Lizard", "Spock"]
const numberToWin = 5

const playerChoice = () => {
    let choice = ""
    do {choice = prompt("Please enter \"Rock\", \"Paper\", \"Scissors\", \"Lizard\", or \"Spock\":")}
    while (!OPTIONS.includes(firstCap(choice)))
    return firstCap(choice)
}

const computerPlay = () => {
    const rand = Math.floor(OPTIONS.length*Math.random())
    return OPTIONS[rand]
}

const firstCap = (word) => {
    const capital = word.charAt(0).toUpperCase()
    const lowerCase = word.toLowerCase().slice(1)

    return capital.concat(lowerCase)
}


const playRound = (playerSelection, computerSelection) => {
    
    if(playerSelection === computerSelection) {
        return "You and Computer both play " + playerSelection + ". You tied!"
    }

    let result = ""
    switch(playerSelection) {
        case("Rock"): 
            result = (computerSelection === "Paper" || computerSelection === "Spock") ? "lose" : "win"
            break
        case("Paper"):
            result = (computerSelection === "Scissors" || computerSelection === "Lizard") ? "lose" : "win"
            break
        case("Scissors"):
            result = (computerSelection === "Rock" || computerSelection === "Spock" ) ? "lose" : "win"
            break
        case("Lizard"):
            result = (computerSelection === "Scissors" || computerSelection === "Rock" ) ? "lose" : "win"
            break
        case("Spock"):
            result = (computerSelection ==="Lizard" ||computerSelection === "Paper" ) ? "lose" : "win"
            break
    }

    return `You play ${playerSelection}, Computer plays ${computerSelection}. You ${result}!`
}    

const game = () => {
    
    let playerScore = 0;
    let computerScore = 0;
    let tieCount = 0;
    
    // console.clear()
    console.log("Let's play " + numberOfGames + " games of Rock, Paper, Scissors, Lizard, Spock!")
    console.log("Scissors cuts Paper, Paper covers Rock.\nRock crushes Lizard, Lizard poisons Spock.\nSpock smashes Scissors, Scissors decapitates Lizard.\nLizard eats Paper, Paper disproves Spock.\nSpock vaporizes Rock, and as it always has, Rock crushes Scissors.")

    while(playerScore < numberToWin && computerScore < numberToWin) {
        const player =  playerChoice()
        const computer = computerPlay()
        const round = playRound(player, computer)
        
        if(round.includes("win")) {playerScore += 1}
        else if(round.includes("lose")) {computerScore += 1}
        else {tieCount += 1}
        
        console.log(round)
        
    }

    const pluralTies = tieCount !== 1 ? "ties" : "tie"
    console.log(`Score: Computer ${computerScore}, You ${playerScore}, and ${tieCount} ${pluralTies}`)
    playerScore > computerScore ? console.log("You win the game!") : console.log("Computer wins the game!")
}


game()


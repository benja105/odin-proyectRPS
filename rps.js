function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(playerSelection == computerSelection){
        return "It's a tie! " + playerSelection + " = " + computerSelection;
    }else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")){
        return "You win! " + playerSelection + " beats " + computerSelection;
    }else{
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}

function playGame(){
    let playerScore = 0;
    let computerScore = 0;
    let tieScore = 0;

    for(let i=0; i<5; i++){
        const playerSelection = prompt("Enter your choice (rock, paper, scissors)");
        
        if(!playerSelection){
            console.log("¡Oh no! ¡You have cancelled the game!");
            return;
        }

        const computerSelection = getComputerChoice();
        console.log(`Your ellection is: ${playerSelection}`);
        console.log(`The computer ellection is: ${computerSelection}`);

        const result = playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase());
        console.log(result);

        if(result.includes("win")){
            playerScore++;
        }else if(result.includes("lose")){
            computerScore++;
        }else if(result.includes("tie")){
            tieScore++;
        }
    }
    
    console.log("End game.");
    console.log(`Final points - Player: ${playerScore}, Computer: ${computerScore}, Ties: ${tieScore}`);

    if(playerScore > computerScore){
        console.log("¡Congratulations! ¡You win the game!");
    }else if(playerScore < computerScore){
        console.log("¡I'm sorry! ¡You lose the game!");
    }else{
        console.log("¡The game ended in a draw!")
    }
}

playGame();
function getComputerChoice() {
    //generate a random number between 0 and 2
    const rand = Math.floor(Math.random() * 3);
    //map the random number 
    switch (rand) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }

}
function playRound(playerSelector, comuterSelection)
{
if(playerSelector === comuterSelection ){
    return "tie"
}
else if(playerSelector === "rock"&& comuterSelection ==="scissors"){
    return "you won"
}else if(playerSelector === "paper"&& comuterSelection ==="rock"){
    return "you won"
}else if(playerSelector === "scissors"&& comuterSelection ==="paper"){
    return "you won"
}else{ return "you lose"}
}


function playGame() {
    let yourScore =0
    let computerScore = 0
    for(let i = 0;i<5;i++){
        const playerSelector = prompt('enter :');
        const comuterSelection = getComputerChoice();
        console.log(playRound(playerSelector, comuterSelection));
        const result = playRound(playerSelector, comuterSelection);
        if(result.includes("won")){
            yourScore++;
        }else if(result.includes("lose")){
            computerScore++
        }
    }
    if(yourScore>computerScore){
        console.log("you win!!!!")
    }else{
        console.log("sorry you lost")  
    }

}
playGame()
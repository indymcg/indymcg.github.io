let userScore = 0;
let computerScore = 0; 
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".scoreboard");
const choices_p = document.getElementById("choices-message");
const resultMessage_p = document.getElementById("result-message");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber= Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function convertToUppercase(choice) {
    if (choice === "rock") return "Rock";
    if (choice === "paper") return "Paper";
    if (choice === "scissors") return "Scissors";
}

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    choices_p.innerHTML = `${convertToUppercase(user)} vs ${convertToUppercase(computer)}`;
    resultMessage_p.innerHTML = 'You win!';
}


function lose(user, computer) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    choices_p.innerHTML = `${convertToUppercase(user)} vs ${convertToUppercase(computer)}`;
    resultMessage_p.innerHTML = 'You lose!';

}

function tie(user, computer) {
    choices_p.innerHTML = `${convertToUppercase(user)} vs ${convertToUppercase(computer)}`;
    resultMessage_p.innerHTML = 'Tie!';
}

function game(userChoice) {
    let computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, computerChoice);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
           tie(userChoice, computerChoice);
            break;
    }
}


function main() {
    rock_div.addEventListener('click', function() {
        game("rock");
    })
    
    paper_div.addEventListener('click', function() {
        game("paper");
    })
    
    scissors_div.addEventListener('click', function() {
        game("scissors");
    })
}

main();


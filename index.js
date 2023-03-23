let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user_score');
const computerScore_span = document.getElementById('comp_score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const restart_btn = document.getElementById('btn');

function getComputerChoice()
    {
        const choices = ['r', 'p', 's'];
        const randomNumber = (Math.floor(Math.random()*3));
        return choices[randomNumber];
    }
function convertToWord(letter)
    {
        if (letter === "r") return "Rock";
        if (letter === "p") return "Paper";
        return "Scissors";
    }

function win(userChoice, computerChoice)
    {
        const userChoice_div = document.getElementById(userChoice);
        userScore++;
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
        result_p.innerHTML = " (P) " + convertToWord(userChoice) + " beats " + " (AI) " + convertToWord(computerChoice) + ". YOU WIN!";
        userChoice_div.classList.add('green-glow');
        setTimeout(() => userChoice_div.classList.remove('green-glow'), 500);
    }
function lose(userChoice, computerChoice)
    {
        const userChoice_div = document.getElementById(userChoice);
        computerScore++;
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
        result_p.innerHTML = " (P) " + convertToWord(userChoice)+ " loses to " + " (AI) " + convertToWord(computerChoice) + ". YOU LOST!";
        userChoice_div.classList.add('red-glow');
        setTimeout(() => userChoice_div.classList.remove('red-glow'), 500);
    }
function draw(userChoice, computerChoice)
    {
        const userChoice_div = document.getElementById(userChoice);
        result_p.innerHTML = " (P) " + convertToWord(userChoice) + " equals " + " (AI) " + convertToWord(computerChoice) + ". IT'S A DRAW!";
        userChoice_div.classList.add('gray-glow');
        setTimeout(() => userChoice_div.classList.remove('gray-glow'), 500);
    }

function game(userChoice)
    {
        const computerChoice = getComputerChoice();
        switch (userChoice + computerChoice)
            {
                case "rs":
                case "pr":
                case "sp":
                win(userChoice, computerChoice);
            break;
                case "rp":
                case "ps":
                case "sr":
                lose(userChoice, computerChoice);
            break;
                case "rr":
                case "pp":
                case "ss":
                draw(userChoice, computerChoice);
            break;
            }
    }
//restart Game
function restartGame ()
    {
        window.location.reload();
    }
//restart
restart_btn.addEventListener("click",restartGame);
game("c");
function main()
    {
        rock_div.addEventListener('click', function()
            {
                game("r");
            })

        paper_div.addEventListener('click', function()
            {
                game("p");
            })

        scissors_div.addEventListener('click', function()
            {
                game("s");
            })
    }
main();

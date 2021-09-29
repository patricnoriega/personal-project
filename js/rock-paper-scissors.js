console.log("helloo");

// global variable:
var userScore = 0;
var cpuScore = 0;

// DOM variables:
var userScore_span = document.getElementById('user-Score');
var cpuScore_span = document.getElementById('cpu-score');
var scoreBoard_div = document.querySelector(".score-board");
var result_p = document.querySelector('.result > p');
var rock_div = document.getElementById('rock');
var paper_div = document.getElementById('paper');
var scissors_div = document.getElementById('scissors');

function getCpuChoice(){
    var choices = ['r', 'p', 's']
    var randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
console.log(getCpuChoice());

function convertToWord(letter) {
    if (letter === "r"){
        return "Rock";
    }  if (letter === "p"){
        return "Paper";
    }else {
        return "Scissors"
    }

}

function win(user, computer) {
    for (var userScore = 0; userScore <= 1000; userScore++) {
        userScore_span = userScore;
        cpuScore_span = cpuScore;
        result_p.innerHTML = convertToWord(user) + " beats " + convertToWord(computer) + " you win!";
    }
}
function lose(){

}
function draw(){
console.log("draw");
}


function game(userChoice) {
    var computerChoice = getCpuChoice();
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice);
            break;
    }
}


function main() {
    rock_div.addEventListener("click", function () {            //console.logged to see click working..
        // console.log('you clicked rock');
        game('r');

    })

    paper_div.addEventListener("click", function () {           //console.logged to see click working..
        // console.log('you clicked paper');
        game('p');
    })

    scissors_div.addEventListener("click", function () {        //console.log to see click working..
        // console.log('you clicked scissors');
        game('s');
    })
}
main();
console.log("helloo");

// global variable:
var userScore = 0;
var cpuScore = 0;

// DOM variables:
var userScore_span = document.getElementById('user-Score');
var cpuScore_span = document.getElementById('cpu-score');
var scoreBoard_div = document.querySelector(".score-board");
var result_div = document.querySelector('.result');
var rock_div = document.getElementById('rock');
var paper_div = document.getElementById('paper');
var scissors_div = document.getElementById('scissors');

function getCpuChoice(){
    var choices = ['rock', 'paper', 'scissors']
    var randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
}
// console.log(getCpuChoice());

function game(userChoice){                                              //console.logged to see click working..
    // console.log("🤡  " + userChoice);
    var computerChoice = getCpuChoice();
    switch (userChoice + computerChoice) {
        case "rock scissors":
        case "paper rock":
        case "scissors paper":
            console.log('User Wins!!!');
            break;
    }
}


rock_div.addEventListener("click", function () {            //console.logged to see click working..
    // console.log('you clicked rock');
    game('rock');

});

paper_div.addEventListener("click", function () {           //console.logged to see click working..
    // console.log('you clicked paper');
    game('paper');
});

scissors_div.addEventListener("click", function () {        //console.log to see click working..
    // console.log('you clicked scissors');
    game('scissors');
});
console.log("helloo");


var hackerCode = ""
$(document).keyup(function(event){
    console.log(event.keyCode);
    hackerCode += event.key;
    console.log(hackerCode);
    if (hackerCode === "codeup"){
        alert("you've been hacked! ")
        $('body').css("background-image", "url('img/matrix.rain copy.jpeg')")
        $('.score-board, .result, .badge, .choice, .choices').css('display', 'none')
        $('#title, #heading, #message').css('display', 'none')
        $('p').css('display', 'none')
    }
});

var konamiCode = "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba"
var userKeys = ''
$(document).keyup(function(event){
    console.log(event.key);
    userKeys += event.key;
    console.log(konamiCode);

    if (userKeys == konamiCode){
        // alert('easter egg found');
        $('body').css("background-image", "url('img/giphy.gif')")
        $('.score-board, .result, .badge, .choice, .choices .title .heading .message').css('display', 'none')
        $('#title, #heading, #message').css('display', 'none')
        $('p').css('display', 'none')

    }
});

// global variable:
let userScore = 0;
let cpuScore = 0;

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
// console.log(getCpuChoice());

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
        scoreBoard_div.innerHTML = userScore++
        userScore_span = userScore;
        cpuScore_span = cpuScore;
        result_p.innerHTML = convertToWord(user) + " beats " + convertToWord(computer) + " you win!";

}
function lose(user, computer){
        scoreBoard_div.innerHTML = cpuScore++
        userScore_span = userScore;
        cpuScore_span = cpuScore;
        result_p.innerHTML = convertToWord(user) + " loses to  " + convertToWord(computer) + " you lost...";

}

function draw(user, computer){
    result_p.innerHTML = convertToWord(user) + " equals  " + convertToWord(computer) + " DRAW";
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
//
// var hackerCode = ""
// $(document).keyup(function(event){
//     console.log(event.keyCode);
//     hackerCode += event.key;
//     console.log(hackerCode);
//     if (hackerCode === "codeup"){
//         alert("you've been hacked! ")
//         $('body').css("background-image", "url('img/matrix.rain copy.jpeg')")
//     }
// });
//
// var konamiCode = "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba"
// var userKeys = ''
// $(document).keyup(function(event){
//     console.log(event.key);
//     userKeys += event.key;
//     console.log(konamiCode);
//
//     if (userKeys == konamiCode){
//         // alert('easter egg found');
//         $('body').css("background-image", "url('img/giphy.gif')")
//     }
// });
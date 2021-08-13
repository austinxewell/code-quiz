//variables
var score = 0;
var timeLeft = 60;


//DOM elements
var startScreenEl = document.querySelector('#start-screen')
var startBtn = document.querySelector('#start')
var questionScreenEl = document.querySelector('#questions')
var timerEl = document.querySelector('#time')


//start quiz on button press
function startGame() {
//console.log('test')

//hide start screen
startScreenEl.classList.add('hide');
//make question screen visable
questionScreenEl.classList.remove('hide');
//start timer on 60 seconds
var timeInterval = setInterval(function() {
    if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
    } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
    } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        displayMessage();
    }
}, 1000);
}





//log score




//new function to set next question
function setNextQuestion() {

}



//display score
 function displayMessage() {
     console.log('display score')
 }


//set items

//even listener
startBtn.addEventListener('click', startGame)


var questions = [
    // {
    //     title: "Which one of these people is NOT a pro skateboarder?"
    //     choices: ["Tony Hawk", "Terry Price", "Zion Write", "Jamie Foy"],
    //     answer: "Terry Price"
    // },

    // {
    //     title: "What is the largest spin not done on a mega ramp on a mega ramp?"
    //     choices: ["900", "1080", "1260", "idk, try 8?"],
    //     answer: "1080"       
    // },

    // {
    //     title: "Who invented the kickflip?"
    //     choices: ["Tony Hawk", "Jamie Thomas", "Rodney Mullen", "Stacy Peralta"],
    //     answer: "Rodney Mullen"       
    // },

    // {
    //     title: "What skateboard competition did Rob Dyrdek start?"
    //     choices: ["Fantasy Factory", "Street League", "Ramp League", "X-Games"],
    //     answer: "Street League"       
    // },
];
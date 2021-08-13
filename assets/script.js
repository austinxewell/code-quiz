//variables
var score = 0;
var timeLeft = 60;
var currentQuestionIndex = 0;


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
        setNextQuestion();
    } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
        setNextQuestion();
    } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        displayMessage();
    }
}, 1000);
}


//new function to set next question
function setNextQuestion() {
    //pull up first question
var currentQuestion = questions[currentQuestionIndex];
var titleEl = document.querySelector('#question-title');
titleEl.textContent = currentQuestion.q;




// for (var i = 0; i < questions.length; i++) {
// }



    //display if answer is correct or wrong

    //add to score for correct answer

}



//display score
 function displayMessage() {
     console.log('display score')
 }


//set items

//even listener
startBtn.addEventListener('click', startGame)


var questions = [
    {
        q: "Which one of these people is NOT a pro skateboarder?",
        o: ["Tony Hawk", "Terry Price", "Zion Write", "Jamie Foy"],
        a: "Terry Price"
    },

    {
        q: "What is the largest spin not done on a mega ramp on a mega ramp?",
        o: ["900", "1080", "1260", "idk, try 8?"],
        a: "1080"       
    },

    {
        q: "Who invented the kickflip?",
        o: ["Tony Hawk", "Jamie Thomas", "Rodney Mullen", "Stacy Peralta"],
        a: "Rodney Mullen"       
    },

    {
        q: "What skateboard competition did Rob Dyrdek start?",
        o: ["Fantasy Factory", "Street League", "Ramp League", "X-Games"],
        a: "Street League"       
    },
];
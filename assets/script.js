//variables
var score = 0;
var timeLeft = 60;
var currentQuestionIndex = 0;

//DOM elements
var startScreenEl = document.querySelector('#start-screen');
var startBtn = document.querySelector('#start');
var questionScreenEl = document.querySelector('#questions');
var timerEl = document.querySelector('#time');
var choicesEl = document.querySelector('#choices');
var feedbackEl = document.querySelector('#feedback');
var endScreenEl = document.querySelector('#end-screen');
var finalScoreEl = document.querySelector('#final-score');
var stopTimer = false;
var submitBtn = document.querySelector('#submit');
var initialsEl = document.querySelector('#initials')

//start quiz on button press
function startGame() {
//console.log('test')

//hide start screen
startScreenEl.classList.add('hide');

//make question screen visable
questionScreenEl.classList.remove('hide');

//start timer on 60 seconds
var timeInterval = setInterval(function() {
     
    if (stopTimer)
        return;

    if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
        setNextQuestion();
    }

    else if (timeLeft == 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
    
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
    //question title
var currentQuestion = questions[currentQuestionIndex];
var titleEl = document.querySelector('#question-title');
titleEl.textContent = currentQuestion.q;
 
choicesEl.innerHTML = "";

//set question options
currentQuestion.o.forEach(function(choice, i) {

    var choiceOption = document.createElement("button");
    choiceOption.setAttribute("class", "choice");
    choiceOption.setAttribute("value", choice);

    choiceOption.textContent = i + 1 + ". " + choice;

    // attach click event listener to each choice
    // questionClick = choiceOption.onclick;
    choiceOption.onclick = checkAnswer;

    choicesEl.appendChild(choiceOption);
});
}

function checkAnswer() {
if (this.value !== questions[currentQuestionIndex].a) {
    timeLeft -= 25;
    if (timeLeft < 0) {
    timeLeft = 0;
    }
    timerEl.textContent.timeLeft;

    feedbackEl.textContent = 'Incorrect!';
} else {
    feedbackEl.textContent = 'Correct!';
    score ++
    // console.log(score)
}

feedbackEl.setAttribute('class', 'feedback');
setTimeout(function() {
    feedbackEl.setAttribute('class', 'feedback hide');
}, 1000);

currentQuestionIndex ++;

if (currentQuestionIndex === questions.length) {
    displayMessage();

} else {
    setNextQuestion();
}
}

//display score
 function displayMessage() {
    stopTimer = true;
    questionScreenEl.classList.add('hide');
    endScreenEl.classList.remove('hide');
    finalScoreEl.textContent = score * timeLeft;
 }

function saveHighScore() {

var initials = initialsEl.value.trim();

if (!initials) {
    alert('Must enter valid initials');
    return;
}

var player = {
    score: score * timeLeft,
    initials: initials,
}
    //   console.log(score * timeLeft);
var highscoreArry = JSON.parse(localStorage.getItem('highscore')) || []

// var highscoreString = JSON.parse(highscoreArry);
console.log(highscoreArry)
highscoreArry.push(player);

// localStorage.getItem('initials', initials);

localStorage.setItem('highscore', JSON.stringify(highscoreArry));

window.location.href = 'highscores.html'
}

//even listener
startBtn.addEventListener('click', startGame)
submitBtn.addEventListener('click', saveHighScore)

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
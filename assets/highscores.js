var highscoreArry = JSON.parse(localStorage.getItem('highscore'));
var olEl = document.querySelector('#highscores')
var clearBtn = document.querySelector('#clear')
// var liEl = document.createElement('li')

for (var i = 0; i < highscoreArry.length; i++) {

    var liEl = document.createElement('li')
    var player = highscoreArry[i]
    var score = player.score;
    var initials = player.initials;

    liEl.textContent = 'Player Initials: ' + initials + '  |   Player Score: ' + score;
    
    // 'score = ' + score + ' Player ' + initials;
    
    olEl.appendChild(liEl);
}


function clearScores() {
    

    console.log('test')
    window.localStorage.removeItem('highscore');
    window.location.reload();
}

clearBtn.addEventListener('click', clearScores)
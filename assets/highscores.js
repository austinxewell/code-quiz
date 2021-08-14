var highscoreArry = JSON.parse(localStorage.getItem('highscore'));
var olEl = document.querySelector('#highscores')
// var liEl = document.createElement('li')

for (var i = 0; i < highscoreArry.length; i++) {

    var liEl = document.createElement('li')
    var player = highscoreArry[i]
    var score = player.score;
    var initials = player.initials;

    liEl.textContent = 'score = ' + score + ' Player ' + initials;
    olEl.appendChild(liEl);

    

}

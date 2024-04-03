//global variables

const leaderboard = document.querySelector("#leaderboard");
const bestScores = JSON.parse(localStorage.getItem("bestScores")) || [];

/**
 * This function takes name and score
 * from a localStore and push it to
 * the leaderboard list.
 */
leaderboard.innerHTML = bestScores.length > 0 ? bestScores.map(score => { 
    return `<li class="best-score">${score.name} : <span class="number">${score.score}</span></li>`; 
}).join("") : "<li>Please play a game and save your amazing score to see it here!</li>";
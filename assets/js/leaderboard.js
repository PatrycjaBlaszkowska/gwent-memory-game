const leaderboard = document.querySelector("#leaderboard");
const bestScores = JSON.parse(localStorage.getItem("bestScores")) || [];

/**
 * This function takes name and score
 * from a localStore and push it to
 * the leaderboard list.
 */

leaderboard.innerHTML = bestScores.map(score => {
        return `<li class="best-score">${score.name} : ${score.score}</li>`
    }).join("");
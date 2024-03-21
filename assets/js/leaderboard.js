const leaderboard = document.querySelector("#leaderboard");
const bestScores = JSON.parse(localStorage.getItem("bestScores")) || [];

leaderboard.innerHTML = bestScores.map(score => {
        return `<li class="best-score">${score.name} : ${score.score}</li>`
    })
    .join("");
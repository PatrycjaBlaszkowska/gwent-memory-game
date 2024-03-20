/*global variables*/

const username = document.querySelector("#username");
const currentScore = localStorage.getItem("currentScore");
const finalScore = document.querySelector("#finalScore");
const bestScores = JSON.parse(localStorage.getItem("bestScores")) || [];
const leaderboard = document.querySelector("#leaderboard");

finalScore.innerText = currentScore;

const saveScore = e => {
    e.preventDefault();

    const score = {
        score: currentScore,
        name: username.value
    };

    const scoreEntry = document.createElement("li");
    scoreEntry.innerText = `${score.name}: ${score.score}`;

    leaderboard.appendChild(scoreEntry);
};




/*global variables*/

const username = document.querySelector("#username");
const currentScore = localStorage.getItem("currentScore");
const finalScore = document.querySelector("#finalScore");
const saveButton = document.querySelector("#save-score-btn");
const bestScores = JSON.parse(localStorage.getItem("bestScores")) || [];

finalScore.innerText = currentScore;

username.addEventListener("keyup", () => {
    saveButton.disabled = !username.value;
});

/**
 * This function takes user input(name)
 *  push and sort score to the local
 * storage for the feature use.
 */
const saveScore = e => {
    e.preventDefault();

    let truncatedName = username.value.length > 10 ? username.value.slice(0, 10) + "..." : username.value;

    const score = {
        score: currentScore,
        name: truncatedName 
    };

    bestScores.push(score);

    bestScores.sort((a,b) => b.score - a.score);
    bestScores.splice(10);

    localStorage.setItem("bestScores", JSON.stringify(bestScores));
    window.location.assign("leaderboard.html");
};




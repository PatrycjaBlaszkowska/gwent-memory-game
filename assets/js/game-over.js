/*global variables*/

const username = document.querySelector("#username");
const currentScore = localStorage.getItem("currentScore");
const finalScore = document.querySelector("#finalScore");
const bestScores = JSON.parse(localStorage.getItem("bestScores")) || [];

const MAX_BEST_SCORES = 10;


finalScore.innerText = currentScore;

/**
 * This function takes user input(name)
 *  push and sort score to the local
 * storage for the feature use.
 */

const saveScore = e => {
    e.preventDefault();

    const score = {
        score: currentScore,
        name: username.value
    };

    bestScores.push(score);

    bestScores.sort((a,b) => b.score - a.score);
    bestScores.splice(10);

    localStorage.setItem("bestScores", JSON.stringify(bestScores));
    window.location.assign("game-over.html");
};




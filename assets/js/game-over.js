/*global variables*/

const username = document.querySelector("#username");
const currentScore = localStorage.getItem("currentScore");
const finalScore = document.querySelector("#finalScore");

finalScore.innerText = currentScore;

const saveScore = e => {
    e.preventDefault();

    const score = {
        score: currentScore,
        name: username.value
    };
}


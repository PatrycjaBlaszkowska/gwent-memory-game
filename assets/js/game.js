/*global variables*/
const cards = document.querySelectorAll('.game-card');
let scoreStr = document.querySelector("#score");
let flipsStr = document.querySelector("#flips");

let firstCard, secondCard;
let hasFlipped = false;
let lockCards = false;

let score = 0;
let flips = 0;

/**
 * This function flips a card and 
 * change hasFlipped to either true or false
 * and calls checkForMatch() function.
 */


function flipCard() {
  if (lockCards) return;

  startCountdown();

  this.classList.add('flip');

  if (!hasFlipped) {
    hasFlipped = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  hasFlipped = false;

  checkForMatch();
  increaseFlips();

}


/**
 * This function shuffle
 * cards everytime page
 * is being loaded.
 */

const shuffleCards = () => {
  const frontFaceCards = document.querySelectorAll('.game-card .front-face');

  const frontFaceArray = Array.from(frontFaceCards);

  frontFaceArray.forEach(card => {
    const randomIndex = Math.floor(Math.random() * frontFaceArray.length);
    const randomCard = frontFaceArray[randomIndex];
    card.parentNode.parentNode.insertBefore(card.parentNode, randomCard.parentNode);
  });
};

/**
 * This function increases a 
 * number of flips every time user 
 * flips a pair of cards.
 */

const increaseFlips = () => {
  flips += 1;
  flipsStr.innerText = flips;
}

/**
 * This function checks for a match 
 * and calls disableCards() if true
 * or unflipCards() if false.
 */

const checkForMatch = () => {
  let isMatch = firstCard.dataset.card === secondCard.dataset.card;
  isMatch ? disableCards() & increaseScore() : unflipCards();
  return;
}

/**
 * This function increases a score 
 * if match occurs. 
 */

const increaseScore = () => {
  score += 1;
  scoreStr.innerText = score;
}

/*redirection to the game-over html page*/

const GameOver = () => {

  localStorage.setItem("currentScore", score);

  return window.location.assign("game-over.html");
}

/**
 * This function disable cards f
 * rom fliping if they match.
 */

const disableCards = () => {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
}

/**
 * This function unflips cards 
 * if they do not match.
 */

const unflipCards = () => {
  lockCards = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    lockCards = false;
  }, 1000);
}

/**
 * This function counts down 
 * to zero.
 */

function startCountdown() {
  let timerElement = document.getElementById('timer');
  let count = parseInt(timerElement.innerText);
  let countdownTimerId = setInterval(function () {
    count--;
    timerElement.innerText = count;
    if (count === 0 || score === 8) {
      clearInterval(countdownTimerId);
      GameOver();
    }
  }, 1000);
}


/*event listeners*/

cards.forEach(card => card.addEventListener('click', flipCard));


/*exports*/

if (typeof module === 'object') {
  module.exports = {
    checkForMatch,
    flipCard,
    startCountdown,
    increaseScore
  };
}

/*onload*/

window.onload = shuffleCards();
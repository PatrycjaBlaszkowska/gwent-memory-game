const cards = document.querySelectorAll('.game-card');

let firstCard, secondCard;
let hasFlipped = false;
let lockCards = false;

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
 * This function increases a 
 * number of flips every time user 
 * flips a pair of cards.
 */

const increaseFlips = () => {
  let flips = document.getElementById("flips");
  let currentFlip = parseInt(flips.innerHTML);
  flips.innerHTML = currentFlip += 1;
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
  let score = document.getElementById("score");
  let currentScore = parseInt(score.innerHTML);
  score.innerHTML = currentScore += 1;
  message();
}

const message = () => {
    if (score.innerHTML === "8") {
      let winnerStr = `You have finished a game with a maximum score and won!`;
      $(".modal-body").html(winnerStr); 
      $('#gameOver').modal('show');
    } else {
      let totalStr = `You have finished a game with ${score.innerHTML} points!`;
      $(".modal-body").html(totalStr); 
    }
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


function startCountdown() {
  let timerElement = document.getElementById('timer');
  let count = parseInt(timerElement.innerText);
  let countdownTimerId = setInterval(function() {
      count--;
      timerElement.innerText = count;
      if (count === 0) {
          clearInterval(countdownTimerId);
          $('#gameOver').modal('show');
      } else if (score.innerHTML === "8") {
        clearInterval(countdownTimerId);
      }
  }, 1000);
}


/*event listeners*/

cards.forEach(card => card.addEventListener('click', flipCard));

/*exports*/

module.exports = {increaseFlips,increaseScore};
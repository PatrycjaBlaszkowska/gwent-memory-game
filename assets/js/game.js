
  let timer = document.getElementById("timer");
  let score = document.getElementById("score");
  let flips = document.getElementById("flips");
 

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
  this.classList.add('flip');

  if (!hasFlipped) {
    hasFlipped = true;
    firstCard = this;
    return; 
  }

  secondCard = this;
  hasFlipped = false;

  checkForMatch();
  increaseFlip();

}

const increaseFlips = () => {
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
  isMatch ? disableCards() : unflipCards();
  return;
}


/**This function disable cards from fliping if they match*/

const disableCards = () => {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
}

/**This function unflips cards if they do not match*/

function unflipCards() {
  lockCards = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    lockCards = false;
  }, 1000);
}


/*event listeners*/

cards.forEach(card => card.addEventListener('click', flipCard));
/*exports*/

module.exports = {increaseFlips};

let selectors = {
  timer: document.querySelector("#timer"),
  score: document.querySelector("#score"),
  flips: document.querySelector("#flips")
}

const cards = document.querySelectorAll('.game-card');

let firstCard, secondCard;
let hasFlipped = false;


/**
 * This function flips a card and 
 * change hasFlipped to either right or false
 * @returns card and calling check checkForMatch() function.
 */

function flipCard() {
  this.classList.add('flip');

  if (!hasFlipped) {
    hasFlipped = true;
    firstCard = this;
    return 
  }

  secondCard = this;
  hasFlipped = false;

  checkForMatch();
}

cards.forEach(card => card.addEventListener('click', flipCard));

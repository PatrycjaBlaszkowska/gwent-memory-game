
let selectors = {
  timer: document.getElementById("timer"),
  score: document.getElementById("score"),
  flips: document.getElementById("flips")
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
};

/**
 * This function checks for a match 
 * and disable cards from fliping if true
 * or unflip them if false.
 */

const checkForMatch = (firstCard, secondCard) => {
  let isMatch = firstCard.dataset.card === secondCard.dataset.card;
  isMatch ? disableCards() : unflipCards();
  return;
};



/*event listeners*/

cards.forEach(card => card.addEventListener('click', flipCard));

/*exports*/
module.exports = {selectors};
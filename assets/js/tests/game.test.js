/**
 * @jest-environment jsdom
 */

beforeAll(() => {
  let fs = require("fs");
  let fileContents = fs.readFileSync("game.html", "utf-8");
  document.open();
  document.write(fileContents);
  document.close();
});

const {flipCard,startCountdown,unflipCards,increaseScore,increaseFlips} = require("../game");

//jest variables
const { urlToHttpOptions } = require("url");
const { TestEnvironment } = require("jest-environment-jsdom");
const { hasUncaughtExceptionCaptureCallback } = require("process");
const { createDecipheriv } = require("crypto");
const { time } = require("console");
const element = document.querySelector("#elementId");

//variables required to proceed with testing unflip function
const firstCard = document.createElement("div");
firstCard.classList.add("flip");
const secondCard = document.createElement("div");
secondCard.classList.add("flip");

describe("game page works correctly", () => {
  test("game heading exist", () => {
    expect(document.getElementById("game-heading")).toBeTruthy()
  });
  test("timer works propery", () => {
      startCountdown();
      setTimeout(() => {
        expect(timer.innerHTML).toBe(59);
      }, "1000")
  });
  test("score gets updated properly", () => {
    increaseScore();
   setTimeout(() => {
    expect(score.innerHTML).toBe("1");
   }, "1000")
  });
  test("flip counter gets updated properly", () =>{
    increaseFlips();
    setTimeout(() => {
      expect(flips.innerHTML).toBe("1");
     }, "1000")
  });
});

describe("flipCard and unflipCards functions work properly", () => {
  test("should apply class 'flip' on click", () => {
    const card = document.createElement('div');
    card.addEventListener('click', flipCard);
    card.click();
    expect(card.classList.contains('flip')).toBe(true);
  });
  test("flip class is removed when function is called", () => {
    unflipCards();
    setTimeout(() => {
    expect(firstCard.classList.contains("flip")).toBe(false);
    expect(secondCard.classList.contains("flip")).toBe(false);
  }, "1000")
  });
});

//home page tests//

describe("home page works properly", () => {
  test("home page heading to exist", () => {
    expect(document.getElementsByClassName("main-heading")).toBeTruthy() 
  });
  test("play button to exist", () => {
    expect(document.getElementsByClassName("play-btn")).toBeTruthy()
  });
  test("leadearboard button to exist", () => {
    expect(document.getElementsByClassName("leaderboard-btn")).toBeTruthy()
  });
});

//leaderboard page tests//

describe("leaderboard page works properly", () => {
  test("leaderboard page heading to exist", () => {
    expect(document.getElementsByClassName("leaderboard-heading")).toBeTruthy()
  });
  test("best scores to exist", () => {
    expect(document.getElementsByClassName("best-score")).toBeTruthy()
  })
});
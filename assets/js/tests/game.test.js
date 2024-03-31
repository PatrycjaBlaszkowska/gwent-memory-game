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


const { urlToHttpOptions } = require("url");
const {checkForMatch, flipCard,startCountdown,unflipCards} = require("../game");
const { TestEnvironment } = require("jest-environment-jsdom");
const { hasUncaughtExceptionCaptureCallback } = require("process");
const { createDecipheriv } = require("crypto");


describe("game page works correctly", () => {
  test("game heading exist", () => {
    expect(document.getElementById("game-heading")).toBeTruthy()
  });
  test("timer to works propery", () => {
      startCountdown();
      setTimeout(() => {
        expect(timer.innerHTML).toBe(59);
      }, "1000")
  });
  test("flip class to exist", () => {
    expect(document.getElementsByClassName("flip")).toBeTruthy()
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
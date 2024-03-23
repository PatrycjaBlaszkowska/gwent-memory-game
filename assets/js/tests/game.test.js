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
const {checkForMatch, flipCard,startCountdown} = require("../game");
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
  test("", () => {
    checkForMatch();
    expect(increaseScore).toHaveBeenCalled();
  });
});

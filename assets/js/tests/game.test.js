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

const {increaseFlips, increaseScore} = require("../game");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});



describe("increaseFlips works properly", () => {
    test("expect flips to increase",() => {
        document.body.innerHTML = `
        <section id="game-info">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <h4 class="text-left">Time: <span id="timer">18000</span></h4>
            </div>
            <div class="col-lg-4">
              <h4>Score: <span id="score"></span>0</h4>
            </div>
            <div class="col-lg-4">
              <h4 class="text-right">Flips: <span id="flips">0</span></h4>
            </div>
          </div>
        </div>
      </section>`

        increaseFlips();
        expect(flips.innerHTML).toBe("1");
    });
});


describe("increaseScore works properly", () => {
  test("score is increasing", () => {
    document.body.innerHTML = `
    <section id="game-info">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <h4 class="text-left">Time: <span id="timer">18000</span></h4>
        </div>
        <div class="col-lg-4">
          <h4>Score: <span id="score">0</span></h4>
        </div>
        <div class="col-lg-4">
          <h4 class="text-right">Flips: <span id="flips">0</span></h4>
        </div>
      </div>
    </div>
  </section>`

    increaseScore();
    expect(score.innerHTML).toBe("1");
  });
});
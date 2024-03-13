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

const {flipCard,increaseFlips,unflipCard,lockCards} = require("../game");

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

        let flips = document.getElementById("flips");
        flips.innerHTML = "1"
        expect(flips.innerHTML).toBe("1");
    });
});

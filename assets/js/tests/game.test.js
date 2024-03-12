/**
 * @jest-environment jsdom
 */

const {flipCard} = require("../game");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("flipCard works correctly", () => {
    test("hasFlipped should be changed to true", () => {
        flipCard();
        expect(hasFlipped).toBe(true);
    });
});



/**
 * @jest-environment jsdom
 */

const {selectors} = require("../game");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("selectors object contains correct keys", () => {
    test("timer key exists", () => {
        expect("timer" in selectors).toBe(true);
    });
    test("score key exists", () => {
        expect("score" in selectors).toBe(true);
    });
    test("flips key exists", () => {
        expect("flips" in selectors).toBe(true);
    });
});

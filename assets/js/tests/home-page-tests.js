/**
 * @jest-environment jsdom
 */

//home page tests section//

describe("home page works properly", () => {
    test("home page heading to exist", () => {
      expect(document.getElementsByClassName("main-heading")).toBeTruthy() 
    });
    test("play button to exist", () => {
      expect(document.getElementsByClassName("play-btn")).toBeTruthy()
    });
    test("leadearboard button to exist", ()=> {
      expect(document.getElementsByClassName("leaderboard-btn")).toBeTruthy()
    });
  });
  


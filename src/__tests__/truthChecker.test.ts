describe("checking for truth", () => {
  test("are the littleNumbers < bigNumbers?", () => {
    // here are the two arrays to populate in this test.
    // all littleNumbers entries should be smaller than any bigNumbers entry
    // both arrays should have the same length.
    let littleNumbers: Array<number> = [];
    let bigNumbers: Array<number> = [];

    for (let i = 0; i < littleNumbers.length && i < bigNumbers.length; i++) {
      expect(littleNumbers[i]).toBeLessThan(bigNumbers[i]);
    }
  });
  test("wordToCheck is a palindrome, case and everything", () => {
    let wordToCheck = "replace me"; // yeah, replace the value
    expect(wordToCheck.split("").reverse().join("")).toBe(wordToCheck);
  });
  test("true", () => {
    let val = null;
    expect(val).toBeTruthy();
  });
  test("there is a sequence to this test", () => {
    let values: Array<any> = []; // anything values can go in here!
    for (let i = 0; i < values.length; i++) {
      if (i == 0) expect(typeof values[i]).toBe("string");
      else if (i == 1) expect(typeof values[i]).toBe("boolean");
      else if (i == 2) expect(typeof values[i]).toBe("number");
      else if (i == 3) expect(values[i]).toBeNull();
      else expect(false).toBe(true);
    }
  });
});

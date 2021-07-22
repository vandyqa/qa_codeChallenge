describe("checking for truth", () => {
  test("are the littleNumbers < bigNumbers?", () => {
    // here are the two arrays to populate in this test.
    // all littleNumbers entries should be smaller than any bigNumbers entry
    // both arrays should have the same length.
    let littleNumbers: Array<number> = [-1,0,1,2.5];
    let bigNumbers: Array<number> = [18,99,20000,10000000000];

   //creating a loop to compare the values for little array and big array
    for (let i = 0; i < littleNumbers.length && i < bigNumbers.length; i++) {
      expect(littleNumbers[i]).toBeLessThan(bigNumbers[i]);
    }
  });
  test("wordToCheck is a palindrome, case and everything", () => {
    let wordToCheck = "madam"; // yeah, replace the value to pass the test.
    expect(wordToCheck.split("").reverse().join("")).toBe(wordToCheck);
  });
  test("true", () => {
    let val = true; //set this to a passing value
    expect(val).toBeTruthy();
  });
  
  test("there is a sequence to this test", () => {
    let values: Array<any> = ["checking palindrome",true,1]; // set values here - the array will take any type or combo of types.
    for (let i = 0; i < values.length; i++) {
      if (i == 0) expect(typeof values[i]).toBe("string"); //first value will be a string
      else if (i == 1) expect(typeof values[i]).toBe("boolean");//second value will be a boolean
      else if (i == 2) expect(typeof values[i]).toBe("number");//third value will be a number
      else if (i == 3) expect(values[i]).toBeNull();
      else expect(false).toBe(true);
    }
  });
});

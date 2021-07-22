import calculator from "./src/calculator";

let mainset=[

  {x: 2, y:8, method:"add"},
{x: 4, y:3, method:"subtract"},
{x: 7, y:3, method: "multiply"},
{x: 8, y:2,method: "divide"},

{x: 2, y:100, method:"add"},
{x: 4, y:100, method:"subtract"},
{x: 7, y:100, method: "multiply"},
{x: 8, y:100,method: "divide"},

{x: -2, y:1, method:"add"},
{x: 4, y:-3, method:"subtract"},
{x: -7, y:3, method: "multiply"},
{x: 8, y:-2,method: "divide"},

{x: 2, y:0, method:"add"},
{x: 4, y:0, method:"subtract"},
{x: 7, y:0, method: "multiply"},
{x: 8, y:0,method: "divide"},

{x: 0, y:8, method:"add"},
{x: 0, y:3, method:"subtract"},
{x: 0, y:3, method: "multiply"},
{x: 0, y:2,method: "divide"},

{x: 228, y:181, method:"add"},
{x: 228, y:181, method:"subtract"},
{x: 228, y:181, method: "multiply"},
{x: 228, y:181,method: "divide"}


];

describe("Calculator", () => {
mainset.forEach((myCalculator) => {
test(`the ${myCalculator.method} method with ${myCalculator.x} and ${myCalculator.y}`,()=> {
switch (myCalculator.method) {
  case "add":
  expect(calculator.add(myCalculator.x, myCalculator.y)).toEqual(myCalculator.x + myCalculator.y);
  break;
  case "subtract":
  expect(calculator.subtract(myCalculator.x, myCalculator.y)).toEqual(myCalculator.x-myCalculator.y);
  break;  
  case "multiply":
  expect(calculator.multiply(myCalculator.x, myCalculator.y)).toEqual(myCalculator.x*myCalculator.y);
  break;   
  case "divide":
  expect(calculator.divide(myCalculator.x, myCalculator.y)).toEqual(myCalculator.x / myCalculator.y);
  break;         
  default:
  console.log("No match")    


}
});

});
});







import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// Named Functions inside Map()
var numbers = [3, 56, 2, 48, 5];
function square(x) {
  return x * x;
}
const newNumbers = numbers.map(square);

// Annonymous Function
const newNumbers2 = numbers.map(function (x) {
  return x * x;
});

// Arrow Functions
// These let us delete the word function. We get:
const newNumbers3 = numbers.map((x) => {
  return x * x;
});
// This only works if there is no space between = and >
// We can also get rid of the parantheses (unless more than one element needed)
const newNumbers4 = numbers.map((x) => {
  return x * x;
});

// Furthermore, if there is only one line of code, you can remove the {} and the return. This gives:
const newNumbers5 = numbers.map((x) => x * x);
// In the above, we can see that map is taking each item form the area, * by itself, and creating a new array
// Having such shortened syntax can be difficult to use for beginners

////Map -Create a new array by doing something with each item in an array.
const newNumbers6 = numbers.map((x) => x * 2);

//////Filter - Create a new array by keeping the items that return true.
const newNumbers7 = numbers.filter((num) => num < 10);

//Reduce - Accumulate a value by doing something to each item in an array.
var newNumber8 = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);

////Find - find the first item that matches from an array.
const newNumber9 = numbers.find((num) => num > 10);

////FindIndex - find the index of the first item that matches.
const newNumber10 = numbers.findIndex((num) => num > 10);

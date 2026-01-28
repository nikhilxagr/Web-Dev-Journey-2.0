// Rest Parameter And Spread Operator in JavaScript

// JavaScript introduced the Rest Parameter and Spread Operator in ES6 to make handling functions and arrays more flexible and concise. These operators use the same syntax (...), but they serve different purposes. The rest parameter collects multiple values into an array, while the spread operator spreads elements from an array or object.

// Rest parameter

// The Rest Parameter allows functions to accept an indefinite number of arguments as an array. It collects multiple arguments into a single array parameter.

function myFunc(...args) {
  console.log(args);
}
myFunc(1, 2, 3, 4, 5);

// Output: [1, 2, 3, 4, 5]

// Using Rest Parameter in Functions

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));

// Output: 15
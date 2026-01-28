// Uses of Callbacks in JavaScript

// 1. Handling Asynchronous Operations

// Callbacks are widely used in

// API requests (fetching data)
// Reading files (Node.js file system)
// Event listeners (clicks, keyboard inputs)
// Database queries (retrieving data)

// 2. Callbacks in Functions Handling Operations

// When a function needs to execute different behaviors based on input, callbacks make the function flexible.

function calc(a, b, callback) {
  return callback(a, b);
}

function add(x, y) {
  return x + y;
}

function mul(x, y) {
  return x * y;
}

console.log(calc(5, 3, add));
console.log(calc(5, 3, mul));

// Explanation:

// calculate() receives two numbers and a function (add or multiply).
// The passed function is executed inside calculate().

// 3. Callbacks in Event Listeners

// JavaScript is event-driven, and callbacks handle user interactions like clicks and key presses.

document.getElementById("myButton").addEventListener("click", function () {
  console.log("Button clicked!");
});

// Here, the anonymous function is a callback that runs when the button is clicked.



// 4. Callbacks in API Calls (Fetching Data)       * IMPS  *
 
// Callbacks are useful when retrieving data from APIs.

function fetch(callback) {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.error("Error:", error));
}

function handle(data) {
  console.log("Fetched Data:", data);
}

fetch(handle);

// fetchData() gets data from an API and passes it to handleData() for processing.
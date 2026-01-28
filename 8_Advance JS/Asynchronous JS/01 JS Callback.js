// JavaScript Callbacks

// A callback function is a function that is passed as an argument to another function and executed later.

// A function can accept another function as a parameter.
// Callbacks allow one function to call another at a later time.
// A callback function can execute after another function has finished.

function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Ajay", sayBye);

// Here, sayBye() is passed as a callback to greet(), which executes after the greeting.

// Working of Callbacks in JavaScript

// JavaScript executes code line by line (synchronously), but sometimes we need to delay execution or wait for a task to complete before running the next function. Callbacks help achieve this by passing a function that is executed later.

console.log("Start");

setTimeout(function () {
  console.log("Inside setTimeout");
}, 2000);

console.log("End");


// >>  setTimeout() is an asynchronous function that takes a callback to execute after 2 seconds.

// >>  The rest of the code continues executing without waiting.
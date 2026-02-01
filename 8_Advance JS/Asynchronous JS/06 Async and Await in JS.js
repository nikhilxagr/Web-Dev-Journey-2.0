// Async and Await in JavaScript

// Async/Await in JavaScript allows you to write asynchronous code in a clean, synchronous-like manner, making it easier to read, understand, and maintain while working with promises.

// async functions always return a Promise.
// await pauses execution until the Promise is resolved or rejected.
// Improves readability compared to .then() and .catch() chaining.
// Makes error handling simpler using try...catch.
// Ideal for managing complex asynchronous flows in a structured way.

async function fetchData() {
  try {
    // Simulated API response (mock data)
    const response = await Promise.resolve({
      json: async () => ({
        userId: 1,
        id: 1,
        title: "Sample Post",
        body: "This is mock data for async/await demonstration",
      }),
    });

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();

// Syntax:

// async function functionName() {
//   try {
//     const result = await someAsyncFunction();
//     console.log(result);
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// }

// Async Function

// Async functions let us write promise-based code in a synchronous-looking way, improving readability while keeping the execution non-blocking. An async function always returns a Promise—if it returns a non-promise value, JavaScript automatically wraps it in a resolved Promise.

const getData = async () => {
  let data = "Hello World";
  return data;
};

getData().then((data) => console.log(data));

// Await Keyword

// The await keyword pauses the execution of an async function until a Promise is resolved or rejected. It can only be used inside an async function, making asynchronous code easier to read and manage.

const getName = async () => {
  let y = await "Hello World";
  console.log(y);
};

console.log(1);
getName();
console.log(2);

// Error Handling in Async/Await

// JavaScript provides predefined arguments for handling promises: resolve and reject.

// resolve: Used when an asynchronous task is completed successfully.
// reject: Used when an asynchronous task fails, providing the reason for failure.

async function fetchData() {
  try {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
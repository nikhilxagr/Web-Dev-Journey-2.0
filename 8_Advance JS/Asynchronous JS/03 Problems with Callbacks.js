// Problems with Callbacks

// Although callbacks are useful, they have some drawbacks.

// 1. Callback Hell (Nested Callbacks)

// When callbacks are nested deeply, the code becomes unreadable and hard to maintain.

function step1(callback) {
  setTimeout(() => {
    console.log("Step 1 completed");
    callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(() => {
    console.log("Step 2 completed");
    callback();
  }, 1000);
}

function step3(callback) {
  setTimeout(() => {
    console.log("Step 3 completed");
    callback();
  }, 1000);
}

step1(() => {
  step2(() => {
    step3(() => {
      console.log("All steps completed");
    });
  });
});

// As the number of steps increases, the nesting grows deeper, making the code difficult to manage.

// 2. Error Handling Issues in Callbacks

// Error handling can get messy when dealing with nested callbacks.

function divide(a, b, callback) {
  if (b === 0) {
    callback(new Error("Cannot divide by zero"), null);
  } else {
    callback(null, a / b);
  }
}

function result(error, result) {
  if (error) {
    console.log("Error:", error.message);
  } else {
    console.log("Result:", result);
  }
}

divide(10, 2, result);
divide(10, 0, result);

// Handling errors inside callbacks can complicate code readability.

// Alternatives to Callbacks

// 1. Promises (Fixing Callback Hell)

// Promises provide a better way to handle asynchronous tasks without deep nesting.

function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1 completed");
      resolve();
    }, 1000);
  });
}

function step2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2 completed");
      resolve();
    }, 1000);
  });
}

function step3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 3 completed");
      resolve();
    }, 1000);
  });
}

step1()
  .then(step2)
  .then(step3)
  .then(() => console.log("All steps completed"));

// Promises make code more readable by chaining .then() instead of nesting callbacks.

// 2. Async/Await (Cleaner Alternative)

// async/await provides an even cleaner way to handle asynchronous code.

async function processSteps() {
  await step1();
  await step2();
  await step3();
  console.log("All steps completed");
}

processSteps();





// When to Use and Avoid Callbacks

// Use callbacks when

// Handling asynchronous tasks (API calls, file reading).
// Implementing event-driven programming.
// Creating higher-order functions.
// Avoid callbacks when:

// Code becomes nested and unreadable (use Promises or async/await).

// You need error handling in asynchronous operations (Promises are better).
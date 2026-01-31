// 1. Promise.all() Method
// Waits for all promises to resolve and returns their results as an array. If any promise is rejected, it immediately rejects.

Promise.all([
  Promise.resolve("Task 1 completed"),
  Promise.resolve("Task 2 completed"),
  Promise.reject("Task 3 failed"),
])
  .then((results) => console.log(results))
  .catch((error) => console.error(error));


//   2. Promise.allSettled() Method
// Waits for all promises to settle (fulfilled or rejected) Method and returns an array of their outcomes.

Promise.allSettled([
  Promise.resolve("Task 1 completed"),
  Promise.reject("Task 2 failed"),
  Promise.resolve("Task 3 completed"),
]).then((results) => console.log(results));


// 3. Promise.race() Method
// Returns the result of the first settled promise (fulfilled or rejected).

Promise.race([
  Promise.resolve("Task 1 completed"),
  Promise.reject("Task 2 failed"),
  Promise.resolve("Task 3 completed"),
]).then((result) => console.log(result))
  .catch((error) => console.error(error));



//   4. Promise.any() Method
// Promise.any() Method resolves with the first fulfilled promise. If all are rejected, it rejects with an AggregateError.

Promise.any([
    Promise.reject("Task 1 failed"),
    Promise.resolve("Task 2 completed"),
    Promise.resolve("Task 3 completed")
])
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

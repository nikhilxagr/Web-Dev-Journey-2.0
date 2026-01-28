// Spread operator

// The spread operator (...arr) in JavaScript is used to expand an array or object into individual elements. It allows you to easily pass elements from an array as separate arguments in a function call or combine multiple arrays into one. The spread operator helps to make code more concise and readable when working with arrays or objects.

const n = [1, 2, 3];
const ne = [...n, 4, 5];
console.log(ne);

// Output: [1, 2, 3, 4, 5]

// Expanding Arrays

const arr1 = [10, 20, 30];
const arr2 = [40, 50, 60];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr);
// Output: [10, 20, 30, 40, 50, 60]

// Use cases of spread operator

// 1. Merging Arrays

const a1 = [1, 2];
const a2 = [3, 4];
const merged = [...a1, ...a2];
console.log(merged);

// Output: [1, 2, 3, 4]

// 2. Cloning Arrays

const original = [10, 20, 30];
const clone = [...original];
console.log(clone);
// Output: [10, 20, 30]


// 3. Combining Objects

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj);

// Output: { a: 1, b: 2, c: 3, d: 4 }
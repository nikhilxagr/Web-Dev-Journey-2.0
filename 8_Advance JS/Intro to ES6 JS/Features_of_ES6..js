//  Arrow Functions

// Arrow functions provide a concise syntax for writing function expressions and automatically bind this to the surrounding context.

// Traditional function

function add(a, b) {
  return a + b;
} // Arrow function const add = (a, b) => a + b;

//   Destructuring Assignment

// Destructing in JavaScript basically means the breaking down of a complex structure(Objects or arrays) into simpler parts

const obj = { name: "Raj", age: 25 };
const { name, age } = obj;
console.log(name, age);

//  The Spread (...) Operator

// The spread operator expands an array or object into individual elements or properties.

const n1 = [1, 2, 3];
const n2 = [...n1, 4, 5];
console.log(n2);

//  The For/Of Loop

// The for/of loop allows you to iterate over iterable objects like arrays, strings, Maps, and Sets but in a short syntax as compared to other loops.

const a = ["apple", "banana", "cherry"];
for (const fruit of a) {
  console.log(fruit);
}

// Maps and Sets

// Map: Maps store key-value pairs where keys can be any data type.

const map = new Map();
map.set("a", 1);
map.set("b", 2);
console.log(map.get("a"));

// Set: Sets store unique values of any type

const set = new Set([1, 2, 3, 3]);
console.log(set);

// Classes

// ES6 introduced classes in JavaScript. Classes in javascript can be used to create new Objects with the help of a constructor, each class can only have one constructor inside it.

class Animal {
  speak() {
    console.log("The animal makes a sound");
  }
}
const dog = new Animal();
dog.speak();


// Promises;

// Promises simplify handling asynchronous operations by providing .then and .catch methods.

const fetch = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched"), 2000);
  });
};
fetch().then((data) => console.log(data));


//  Default Parameters

// Default parameters allow you to set default values for function parameters if no value or undefined is passed.

function greet(name = "Guest") {
  console.log("Hello, " + name);
}

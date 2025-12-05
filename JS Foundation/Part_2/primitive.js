//Number

let balance = 120;
let anotherBalance = new Number (120);

// console.log(balance);
// console.log(anotherBalance.valueOf());

// console.log(typeof balance);
// console.log(typeof anotherBalance);

//boolean

let isActive = true
let isReallyActive = new Boolean (true) // not recommended


// null and underfined

let firstName = null;
let lastName = undefined;

// console.log(firstName);
// console.log(lastName);   
// console.log(typeof firstName);

//string

// let name  = "Nikhil";
// let anotherName = 'hello';
// let username = "nikhilxagr";

// let oldGreeting = "Hello " + name + " welcome to JS world.";
// console.log(oldGreeting);

// let greeting = `Hello ${name} !`;
// console.log(greeting);


//symbol

let id = Symbol("123");
let anotherId = Symbol("123");

console.log(id === anotherId); // false
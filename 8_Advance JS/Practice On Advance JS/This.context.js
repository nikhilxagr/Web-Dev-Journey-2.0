
const Person = {
    name: "Nikhil",

    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

Person.greet(); // Hello, my name is Nikhil

const greetFunction = Person.greet;
greetFunction(); // Hello, my name is undefined

const boundGreetFunction = greetFunction.bind(Person);
boundGreetFunction(); // Hello, my name is Nikhil

// Important Points:    
// 1. The value of `this` is determined by how a function is called.
// 2. In a method, `this` refers to the object the method is called on.
// 3. In a regular function, `this` refers to the global object (or undefined in strict mode).
// 4. The `bind()` method creates a new function that, when called, has its `this` keyword set to the provided value.
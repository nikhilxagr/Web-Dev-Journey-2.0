

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}

let Nikhil = new Person("Nikhil", 21);
Nikhil.greet(); // Hello, my name is Nikhil and I am 21 years old.

// Important Point:
// In JavaScript, every object has a prototype. A prototype is also an object.
// When trying to access a property of an object, JavaScript will first look for the property on the object itself.
// If the property is not found, it will look for the property on the object's prototype, and so on up the prototype chain until it finds the property or reaches the end of the chain.
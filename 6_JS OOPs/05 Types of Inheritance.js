// 1. prototype-based inheritance

function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  console.log(`\${this.name} makes a sound.`);
};

// Child constructor function
function Dog(name) {
  Animal.call(this, name); // Inherit properties
}

// Inherit methods from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Adding a new method to Dog
Dog.prototype.bark = function () {
  console.log(`\${this.name} barks: Woof!`);
};

// Creating an instance
const myDog = new Dog("Buddy");

myDog.speak();
myDog.bark();

// 2. ES6 Class-based Inheritance

class one {
  constructor(name) {
    this.name = name;
  }
  speaks() {
    return `my name is \${this.name}`;
  }
}
class two extends one {
  constructor(name) {
    super(name);
  }
}
const o = new two("Pranjal");
console.log(o.speaks());

// 3. Mixins for Inheritance

const one = {
  speak() {
    return `\${this.name} walks`;
  },
};
const two = {
  walks() {
    return `\${this.name} walks`;
  },
};
function Person(name) {
  this.name = name;
}
Object.assign(Person.prototype, one, two);
const person1 = new Person("Pranjal");
console.log(person1.speak());
console.log(person1.walks());

// 4. Inheritance with Object.create()

let obj = {
  name: "Pranjal",
  age: 21,
  prints() {
    return `my name is \${this.name}`;
  },
};
let obj1 = Object.create(obj);
obj1.name = "Hello";
console.log(obj1.age);
console.log(obj1.prints());

// 5. Inheritance with object.setPrototypeOf()

const one = {
  speak() {
    return `\${this.name} speaks`;
  },
};
const two = {
  name: "Pranjal",
};
Object.setPrototypeOf(one, two);
console.log(one.speak());

// 6. Factory functions for inheritance

function createPerson(name) {
  return {
    name: name,
    greet() {
      return `Hello my name is \${this.name}`;
    },
  };
}
const one = createPerson("Pranjal");
const two = createPerson("Pranav");
console.log(one.greet());
console.log(two.greet());
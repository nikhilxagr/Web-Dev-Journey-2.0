class Dog {
  constructor(name, breed) {
    this.name = name; // instance property
    this.breed = breed; // instance property
  }

  // defining method
  bark() {
    console.log(`\${this.name} says woof!`);
  }
}

// creating an object (instance)
const myDog = new Dog("Rayne", "Husky");
myDog.bark(); // Output: Rayne says woof!

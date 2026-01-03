let car = {
    make : 'Toyota',
    model : 'Camry',
    year : 2020,

    start : function() {
        return `${this.make} car got started in ${this.year}`;
},
};

console.log(car.start());

// Output: Toyota car got started in 2020


// Example

function Person(name, age) {
    this.name = name;
    this.age = age; 
}

let Ram = new Person('Ram', 25);
console.log(Ram.name);

function Animal(type, sound) {
    this.type = type;
    this.sound = sound;
}

Animal.prototype.speak = function() {
    return `The ${this.type} goes ${this.sound}`;
};


let Myarray = [1, 2, 3, 4, 5];
console.log(Myarray.length); // Output: 5

// OOPS Concepts in JavaScript

class Vehicle {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }  
    
    start() {
        return `${this.model} is a car from  ${this.brand}`;
    }
}


// Inheritance

class Car extends Vehicle {
    drive() {
        return `Driving a ${this.model} from ${this.brand}`;
    }
}

let myCar = new Car('Honda', 'Civic');
console.log(myCar.start());
console.log(myCar.drive());

let Vehicle1 = new Vehicle('Ford', 'Mustang');
console.log(Vehicle1.brand());


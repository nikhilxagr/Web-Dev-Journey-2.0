// # Generator Functions and Iterators in JavaScript

// Generator functions are a special type of function in JavaScript that can be paused and resumed, allowing for the generation of a sequence of values over time. They are defined using the `function*` syntax and use the `yield` keyword to produce values.

// Example of a generator function:


function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

let gen = numberGenerator();
console.log(gen());


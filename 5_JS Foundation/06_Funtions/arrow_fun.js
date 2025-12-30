const calculation = (price , quantity) => {
    const total = price * quantity;
    return total;
}

console.log(calculation(5, 4)); // 20

// Arrow function with single parameter
const square = num => num * num;

console.log(square(6)); // 36

// Arrow function without parameters
const greet = () => console.log("Hello, World!");

greet(); // Hello, World!

// Arrow function with multiple statements
const factorial = n => {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
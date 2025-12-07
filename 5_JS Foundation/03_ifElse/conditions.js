// Checking if num is greater than another number

let num1 = 10;
let num2 = 5;

if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
} else {
    console.log(`${num1} is not greater than ${num2}`);
}

// checking if string is equal to another string

let str1 = "hello";
let str2 = "world"; 

if (str1 === str2) {
    console.log(`${str1} is equal to ${str2}`);
} else {
    console.log(`${str1} is not equal to ${str2}`);
}

// checking if a variable is number or not

let score = 80;
if (typeof score === 'number') {
    console.log("Yes, this is a number");
} else {
    console.log("No, this is not a number");
}

// checking if a boolean variable is true or false

let isActive = false;

if (isActive) {
    console.log("The variable is true");
} else {
    console.log("The variable is false");
}

// checking if an array is empty or not 

let item = ["1" , "Nikhil" , "23"] ;
console.log(item.length)

if (item.length == 0) {
    console.log("Array is empty");
} else {
    console.log("Array is not empty")    
}


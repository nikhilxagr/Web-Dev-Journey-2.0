// Loops
 
// Loops are used to repeat a block of code multiple times until a certain condition is met.

// while Loop

// sum of all numbers from 1 to 5

let sum = 0;
let i = 1;


while (i <= 5){
    sum = sum + 1 ;
    sum += i; // sum = sum + i
    i++; // i = i + 1
}
console.log(sum);

// Print numbers from 1 to 10
let count = 1;
while (count <= 10){
    console.log("Count is: " + count);
    count++;
}


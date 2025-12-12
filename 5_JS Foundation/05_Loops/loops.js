// Loops

// Loops are used to repeat a block of code multiple times until a certain condition is met.

// while Loop

// sum of all numbers from 1 to 5

let sum = 0;
let i = 1;

while (i <= 5) {
  sum = sum + 1;
  sum += i; // sum = sum + i
  i++; // i = i + 1
}
console.log(sum);

// Print numbers from 1 to 10
let count = 1;
while (count <= 10) {
  console.log("Count is: " + count);
  count++;
}

// do...while Loop
let total = 0;
let k = 1;
do {
  total += k;
  k++;
} while (k <= 3);

console.log("Total is: " + total);

// for Loop
let mulltipleNum = [];
let number = [2, 4, , 6, 8, 10];

for (let j = 0; j < number.length; j++) {
  mulltipleNum.push(number[j] * 2);
}

console.log(mulltipleNum);

// Example

let cities = ["Paris", "New York", "Tokyo", "London"];
arrayChallenges.js;
let cityList = [];
loopChallenges.js;
hello.js;
for (let c = 0; c < cities.length; c++) {
  const myCity = cities[c];

  cityList.push(myCity);
}
console.log(cityList);
1;

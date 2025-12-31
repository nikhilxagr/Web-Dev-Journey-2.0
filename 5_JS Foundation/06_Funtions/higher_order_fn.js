
function calculate(a, b, operation) {
  return operation(a, b);
}


function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}


console.log(calculate(5, 3, add)); 
console.log(calculate(5, 3, multiply)); 



//Example
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(function(num) {
  return num * num;
});

console.log(squaredNumbers); 



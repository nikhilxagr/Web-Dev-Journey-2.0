function outerFunction() {
  console.log("This is the outer function");

  function innerFunction() {
    console.log("This is the inner (nested) function");
  }

  innerFunction(); 
}

outerFunction();


// Example 

function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const increment = counter();
console.log(increment()); 
console.log(increment()); 
console.log(increment()); 

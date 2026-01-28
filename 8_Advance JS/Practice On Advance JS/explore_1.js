console.log("Explore Asynchronous JS with Event Loop");


setTimeout(() => {
  console.log("This message is from setTimeout with 0ms delay");
}, 0);

Promise.resolve().then(() => {
  console.log("This message is from a resolved Promise");
}); 

console.log("Synchronous log message"); 

//Object -

// let username = {
//   firstname: "Nikhil",
//   lastname: "Agrahari",
// };

// console.log(username);
// console.log(typeof username); //object

const username = {
  firstname: "Nikhil",
  isLoggedin: true,
};

username.firstname = "Mr. Nihkil";
username.lastname = "Agrahari";


console.log(username.firstname);
console.log(username.lastname);
console.log(typeof username);

//Date -
let today = new Date();
console.log(today.getDate());
console.log(typeof today); //object


//Array -
let colors = ["red", "green", "blue"];
console.log(colors);
console.log(typeof colors); //object

let another = ["Nikhil", 45, true, null];
console.log(another[0]);

let isValue = true;
console.log(isValue + 1); // 2


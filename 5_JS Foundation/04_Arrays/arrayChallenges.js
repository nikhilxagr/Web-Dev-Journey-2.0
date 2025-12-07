// Question -1 

let fruits = ["apple", "banana", "orange", "mango", "grape"];

const firstFruit = fruits[0];
console.log(firstFruit);
const lastFruit = fruits[fruits.length - 1];
console.log(lastFruit);

// Question -2

let cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];

cities.push("Philadelphia");
console.log(cities);
cities.pop();
console.log(cities);

const favoriteCity = cities[2];
console.log(favoriteCity);

// Question -3

let lang = ["JavaScript", "Python", "Java", "C++", "Ruby"];

//change the second element to "TypeScript"
lang[1] = "TypeScript";
console.log(lang);


// Question -4

let countries = ["USA", "Canada", "Mexico", "Brazil", "Argentina"];

countries[countries.length] = "China";
console.log(countries);
countries[countries.length-1] = "India";
console.log(countries);


// Question -5

let order = ["Book", "Pen", "Notebook", "Eraser", "Ruler"];


order.push("Marker");
console.log(order);
order.pop();
console.log(order);
//remove the first element
order.shift();
console.log(order);
order.unshift("Pencil");
console.log(order);

// Question -6

let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
let var1 = colors;
console.log(var1);

// Question -7

let citiesList = ["Tokyo", "Delhi", "Shanghai", "Sao Paulo", "Mumbai"];

// let hardCopyCities = [...citiesList];  // Using spread operator
let hardCopyCities = [citiesList.slice()];  // Using slice method
citiesList.pop();
console.log(hardCopyCities);

// Question -8

let indiancities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai"];

let asiancities = ["Tokyo", "Beijing", "Seoul"];

// let wordlCities = indiancities.concat(asiancities); // Using concat method

let wordlCities = indiancities + asiancities; // Using spread operator
console.log(typeof wordlCities);
console.log(wordlCities);

// Question -9

// let subjects = ["Math", "Science", "History", "Geography", "English"];

// let subString = subjects.slice(1, 4);
// console.log(subString);


let subjects = ["Math", "Science", "History", "Geography", "English"];

let isMathPresent = subjects.includes("Math");
console.log(isMathPresent);
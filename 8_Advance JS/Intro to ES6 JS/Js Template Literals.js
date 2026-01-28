// JavaScript Template Literals

// Template literals are strings written using backticks (`) that allow variables and expressions to be embedded directly. Introduced in ES6, they make strings more readable and support easy interpolation and multi-line text without complex concatenation.

let a = "GFG";
console.log(`hello ${a}`);

// Embedding variables: Template literals like hello ${a} insert variable values directly into strings, producing output such as hello GFG.

// Cleaner concatenation: They avoid using +, making string creation more readable and easier to write.

let x = 5;
let y = 10;
console.log(`The sum of \${x} and \${y} is \${x + y}`);

// Multi-line Strings with Template Literals

const s = `This is a multi-line
string that spans across
several lines.`;
console.log(s);

// Tagged Template Literals

function greet(strings, name) {
  return `\${strings[0]}\${name.toUpperCase()}\${strings[1]}`;
}

const name = "gfg";
console.log(greet`Hello, \${name}!`);


// Escaping Backticks and Dollar Signs

const n = `This is a backtick: \` and this is a dollar sign: \\$`;
console.log(n);
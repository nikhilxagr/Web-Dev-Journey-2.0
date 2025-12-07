console.log("Hello, world!");
process.stdout.write("This is the printing.js file.\n");

console.table({ city: "Prayagraj" });
console.warn({ city: "Prayagraj" });

console.group("City Information");
console.log("City: Prayagraj");
console.log("State: Uttar Pradesh");
console.log("Country: India");
console.groupEnd();
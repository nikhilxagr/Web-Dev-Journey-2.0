const mainHeading = document.getElementById("main-heading");
const demoText = document.getElementById("demo-text");
const changeTextBtn = document.getElementById("change-text-btn");
const toggleHighlightBtn = document.getElementById("toggle-highlight-btn");
const addItemBtn = document.getElementById("add-item-btn");
const itemList = document.getElementById("item-list");
const userInput = document.getElementById("user-input");
const greetBtn = document.getElementById("greet-btn");
const greeting = document.getElementById("greeting");
const toggleContentBtn = document.getElementById("toggle-content-btn");
const toggleContent = document.getElementById("toggle-content");
const changeColorBtn = document.getElementById("change-color-btn");
const colorBox = document.getElementById("color-box");
const userForm = document.getElementById("user-form");
const formOutput = document.getElementById("form-output");
const outputContent = document.getElementById("output-content");

changeTextBtn.addEventListener("click", () => {
  demoText.textContent = "The text has been changed using JavaScript!";
});

toggleHighlightBtn.addEventListener("click", () => {
  demoText.classList.toggle("highlight");
});

let itemCount = 0;
addItemBtn.addEventListener("click", () => {
  itemCount++;
  const newItem = document.createElement("li");
  newItem.textContent = `List Item ${itemCount}`;
  itemList.appendChild(newItem);
});

greetBtn.addEventListener("click", () => {
  const name = userInput.value;
  if (name.trim() !== "") {
    greeting.textContent = `Hello, ${name}! Welcome to DOM practice.`;
    greeting.style.color = "green";
  } else {
    greeting.textContent = "Please enter your name!";
    greeting.style.color = "red";
  }
});

toggleContentBtn.addEventListener("click", () => {
  toggleContent.classList.toggle("hide");
});

const colors = [
  "lightblue",
  "lightcoral",
  "lightgreen",
  "lightyellow",
  "lightpink",
];
let colorIndex = 0;
changeColorBtn.addEventListener("click", () => {
  colorIndex = (colorIndex + 1) % colors.length;
  colorBox.style.backgroundColor = colors[colorIndex];
});

// Additional DOM Methods Demo
console.log("DOM Practice Loaded");
console.log("Main Heading:", mainHeading.textContent);
console.log("All containers:", document.querySelectorAll(".container").length);

// Form Handling
userForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const country = document.getElementById("country").value;

  // Validate form
  if (name.trim() === "" || email.trim() === "") {
    alert("Please fill in all required fields!");
    return;
  }

  // Display form data
  outputContent.innerHTML = `
    <strong>Name:</strong> ${name}<br>
    <strong>Email:</strong> ${email}<br>
    <strong>Age:</strong> ${age || "Not provided"}<br>
    <strong>Country:</strong> ${country || "Not selected"}
  `;

  formOutput.style.display = "block";
  formOutput.style.border = "2px solid green";

  console.log("Form submitted:", { name, email, age, country });
});

userForm.addEventListener("reset", () => {
  formOutput.style.display = "none";
  outputContent.innerHTML = "";
});

// Real-time input validation example
const emailInput = document.getElementById("email");
emailInput.addEventListener("input", (e) => {
  const email = e.target.value;
  if (email.includes("@") && email.includes(".")) {
    emailInput.style.borderColor = "green";
  } else {
    emailInput.style.borderColor = "red";
  }
});

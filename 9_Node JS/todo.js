const fs = require("fs");
const filepath = "tasks.json";

const loadTasks = () => {
  try {
    const dataBuffer = fs.readFileSync(filepath);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const savetasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks);
  fs.writeFileSync(filepath, dataJSON);
};

const addtask = (task) => {
  const tasks = loadTasks();
  tasks.push(task);
  savetasks(tasks);
  console.log("Task added successfully");
};

const listtask = () => {
  const tasks = loadTasks();
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
  });
};

const deletetask = (index) => {
  const tasks = loadTasks();
  if (index > 0 && index <= tasks.length) {
    tasks.splice(index - 1, 1);
    savetasks(tasks);
    console.log("Task deleted successfully");
  } else {
    console.log("Invalid task index");
  }
};

const commands = process.argv.slice(2);
const command = commands[0];
const argument = commands[1];

if (command === "add") {
  addtask(argument);
} else if (command === "list") {
  listtask();
} else if (command === "delete") {
  deletetask(parseInt(argument));
} else {
  console.log("Invalid command");
}

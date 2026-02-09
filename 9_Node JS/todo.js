const fs = require('fs');
const filepath = "tasks.json";

const loadTasks = () => {
    try {
         const dataBuffer = fs.readFileSync(filepath);
         const dataJSON = dataBuffer.toString();
            return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
}

const addtask = (task) => {
    const tasks = loadTasks();
    tasks.push(task);
    fs.writeFileSync(filepath, JSON.stringify(tasks));
    console.log('Task added successfully');
}


const comnands = process.argv.slice(2);


if (commmand === 'add') {
    addtask(argument)
}else if (commmand === 'list') {
    listtask()
}else if (commmand === 'delete') {
    deletetask(argument)
}else {
    console.log('Invalid command');
}
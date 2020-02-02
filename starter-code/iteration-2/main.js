class ToDo {
    constructor() {
        this.tasks = [];
    }
    addTask(task) {
        return this.tasks.push(task);
    }
    listAllTasks() {
        return this.tasks.forEach((task, index) => {
            console.log(index + 1 + ": " + task);
        });
    }
    deleteTask(task) {
        this.tasks.splice(this.tasks.indexOf(task), 1);
        console.log('Deleting task: ' + task);
        return this.tasks.length;
    }
}
let myToDos = new ToDo();
console.log("Number of items:", myToDos.addTask('This is our first task'));
console.log("Number of items:", myToDos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myToDos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myToDos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myToDos.addTask('Finish this iteration 3!! 🤓'));
myToDos.listAllTasks();
console.log("Number of items:", myToDos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myToDos.deleteTask('Finish this iteration 2!! 🤓'));
myToDos.listAllTasks();

class ToDoItem {
    constructor(taskTitle) {
        this.taskTitle = taskTitle;
        this.taskStatus = false;
        this.updatedAt = new Date();
        this.toggleStatus;
    }
    toggleStatus() {
        if (this.taskStatus === true) {
            this.taskStatus = false;
            this.updatedAt = new Date();
        }
        else {
            this.taskStatus = true;
            this.updatedAt = new Date();
        }
    }
}
class ToDoList {
    constructor() {
        this.myTasks = [];
    }
    addTask(task) {
        console.log('=========== NEW TASK ===========');
        console.log('Task "' + task.taskTitle + '" inserted in the list');
        return this.myTasks.push(task);
    }
    listAllTasks() {
        return this.myTasks.forEach((task, index) => {
            console.log(index + 1 + ": " + task.taskTitle + " Updated at: " + task.updatedAt);
        });
        throw new Error("Method not implemented.");
    }
    deleteTask(task) {
        this.myTasks.splice(this.myTasks.indexOf(task), 1);
        console.log('=========== TASK REMOVED ===========');
        console.log('Task "' + task.taskTitle + '" removed from the list');
        return this.myTasks.length;
    }
    listPendingTasks() {
        return this.myTasks.forEach((task, index) => {
            console.log(index + 1 + ": " + task.taskTitle + " Updated at: " + task.updatedAt + " Status: " + task.taskStatus);
        });
        throw new Error("Method not implemented.");
    }
}
let task1 = new ToDoItem('This is our first task');
let task2 = new ToDoItem('Eat pizza 🍕 yummy!!!');
let task3 = new ToDoItem('Finish this iteration 1!! 🤓');
let task4 = new ToDoItem('Finish this iteration 2!! 🤓');
let task5 = new ToDoItem('Finish this iteration 3!! 🤓');
let myToDos = new ToDoList();
console.log("Number of items:", myToDos.addTask(task1));
console.log("Number of items:", myToDos.addTask(task2));
console.log("Number of items:", myToDos.addTask(task3));
console.log("Number of items:", myToDos.addTask(task4));
console.log("Number of items:", myToDos.addTask(task5));
myToDos.listAllTasks();
console.log("Number of items:", myToDos.deleteTask(task3));
console.log("Number of items:", myToDos.deleteTask(task4));
console.log("Number of items:", myToDos.deleteTask(task5));
task2.toggleStatus();
myToDos.listPendingTasks();

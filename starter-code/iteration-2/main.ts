// Add the reference to the "TodoInterface"

import {ToDoInterface} from "./todoInterface"

// 1. Create a class Todo that implements the Interface created before.

class ToDo implements ToDoInterface{

  tasks = [];

  addTask(task){
    console.log('=========== NEW TASK ===========');
    console.log('Task "'+ task + '" inserted in the list')
    return this.tasks.push(task);
  }

  listAllTasks(){
    return this.tasks.forEach( (task, index)=>{
      console.log(index+1 + ": " + task);
    });

  }

  deleteTask(task){
    this.tasks.splice(this.tasks.indexOf(task),1)
    console.log('=========== TASK REMOVED ===========');
    console.log('Task "'+ task + '" removed from the list')
    return this.tasks.length

  }

}

// Execution
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

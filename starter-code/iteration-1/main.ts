// Iteration 1
// 1. Create an array of strings

let myArray: Array<string> = [];

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.

function addTask(value: string){
  console.log('=========== NEW TASK ===========');
  console.log('Task "'+ value + '" inserted in the list')
  return myArray.push(value);
}

// 3. Create a function to list all tasks, it must show in the console de task.

function listAllTasks(){
  myArray.forEach((element, index) => {
    console.log(index+1 + ": " + element);    
  });
}

// 4. Create a function to delete a task, you must find the task inside the array and delete it.

function deleteTask(value: string){

  let n = myArray.indexOf(value);
  if (n > -1){
    console.log('=========== TASK REMOVED ===========');
    console.log('Task "'+ value + '" removed from the list')
    myArray.splice(n, 1);
    return myArray.length 
  }
}

// Execution
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();

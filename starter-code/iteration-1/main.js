let myArray = [];
function addTask(value) {
    console.log('=========== NEW TASK ===========');
    console.log('Task "' + value + '" inserted in the list');
    return myArray.push(value);
}
function listAllTasks() {
    myArray.forEach((element, index) => {
        console.log(index + 1 + ": " + element);
    });
}
function deleteTask(value) {
    let n = myArray.indexOf(value);
    if (n > -1) {
        console.log('=========== TASK REMOVED ===========');
        console.log('Task "' + value + '" removed from the list');
        myArray.splice(n, 1);
        return myArray.length;
    }
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();

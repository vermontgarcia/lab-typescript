let myArray = [];
function addTask(value) {
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

// Call Back = A function that is passed to
//              another function
//  Ensures that order we want to execute maintained
//              used to handle asynchronous operations :
//                      1. Reading a File
//                      2. Network Requests
//                      3. Interacting with databases
//
//             "Hey!, When you are done call this"

// usually some operations  take longer time js not waits goes to another task next continues




function hello() {
  // After 3 sec execute this code This makes order they print differs
  setTimeout(function () {
    console.log("Hello");
  }, 3000);
}

function hello1(sairam) {
  console.log("Hello");
  sairam();
}

function goodBye() {
  console.log("GoodBye");
}

hello1(goodBye);

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function displayResult(result) {
  confirm.log(result);
}

sum(displayResult, 7, 5);

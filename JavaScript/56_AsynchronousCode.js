//Synchronous = Executes line by line consecutively
//              in a sequential manner .Code that waits
//              For an Operation to complete(Follows Order)
//
//
//
//Asynchronous = Allows multiple operations to be performed
//               concurrently without  waiting . Doesn't
//               block the execution flow and allows
//               program to continue .
//      (I/O operations,network requests , fetching Data)
//       Handled with : Callbacks ,Promises ,Async /Await

//---------------Example 1 -----------------------

setTimeout(() => console.log("Task 1"), 3000);

console.log("Task 2");
console.log("Task 3");
console.log("Task 4");

//----------------- Example 2---------------------

function func1(callback) {
  setTimeout(() => {
    console.log("Func 1");
    callback();
  }, 3000);
}

function func2() {
  console.log("Func 2");
  console.log("Func 3");
  console.log("Func 4");
}

func1(func2);

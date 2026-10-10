// CallBack Hell = Situation in JavaScript where callbacks
//                 are nested within other callbacks to
//                 degree where the code is difficult to read.
//                 Old pattern to handle asynchronous function.
//
//Now a days  Using :
//     Use Promises + async/await to avoid Callback hell
//

//Example 1 :

function task1() {
  console.log(" Task 1 complete");
}

function task2() {
  console.log("Task2 Complete");
}

function task3() {
  console.log("Task3 Complete");
}

function task4() {
  console.log("Task4 Complete");
}

task1();
task2();
task3();
task4();

//Example 2 :

// These execute in the random order

function task11() {
  setTimeout(() => {
    console.log(" Task 11 complete");
  }, 2000);
}

function task12() {
  setTimeout(() => {
    console.log(" Task 12 complete");
  }, 1000);
}

function task13() {
  setTimeout(() => {
    console.log(" Task 13 complete");
  }, 3000);
}

function task14() {
  setTimeout(() => {
    console.log(" Task 14 complete");
  }, 1500);
}

task11();
task12();
task13();
task14();
console.log("All complete");

// Example 3 :
// To ensure that all run in the order we will do :

//4 levels of callback is okay
//but after 4 levels it will be difficult to understand
// lead to call back hell

function task21(callback) {
  setTimeout(() => {
    console.log(" Task 21 complete");
    callback();
  }, 2000);
}

function task22(callback) {
  setTimeout(() => {
    console.log(" Task 22 complete");
    callback();
  }, 1000);
}

function task23(callback) {
  setTimeout(() => {
    console.log(" Task 23 complete");
    callback();
  }, 3000);
}

function task24(callback) {
  setTimeout(() => {
    console.log(" Task 24 complete");
    callback();
  }, 1500);
}

//task21(task22()); // we cannot do beacuse it means calling the function

task21(() => {
  task22(() => {
    task23(() => {
      task24(() => {
        console.log("All are complete");
      });
    });
  });
});

task21(() => {
  task22();
});

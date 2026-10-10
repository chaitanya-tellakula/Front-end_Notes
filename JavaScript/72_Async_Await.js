// Async/ Await :
//      Async= makes a function return the promise
//      Await= make an async function wait for the promise
//
//     Allows you to write asynchronous code in a
//     synchronous manner . Async doesn't have resolve
//     or reject parameters . Everything after Await
//     is placed in an event queue
//

// Await is valid in the async functions

//--------------------------Example 1------------------

function walkDog41() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;

      if (dogWalked) {
        resolve("You walk the dog 🐕");
      } else {
        reject("You didn't the dog 🐕");
      }
    }, 1500);
  });
}

function cleanKitchen42() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const clean = false;

      if (clean) {
        resolve("You clean the kitchen 🧹");
      } else {
        reject("You  didn't clean the kitchen 🧹");
      }
    }, 2500);
  });
}

function takeOutTrash43() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trash = true;

      if (trash) {
        resolve("You take out the trash🧹");
      } else {
        reject("You didn't take out the trash🧹");
      }
    }, 500);
  });
}

// async function doTasks1(params) {
//   const dogresult = await walkDog41();
//   console.log(dogresult);

//   const cleanresult = await cleanKitchen42();
//   console.log(cleanresult);

//   const takeOutTrashresult = await takeOutTrash43();
//   console.log(takeOutTrashresult);

//   console.log("You finished all the task");
// }

//reject means like error so it sould be caught
// so there must be catch to catch the error

// if reject occurs then in try block remaing code nt runs

async function doTasks2(params) {
  try {
    const dogresult = await walkDog41();
    console.log(dogresult);

    const cleanresult = await cleanKitchen42();
    console.log(cleanresult);

    const takeOutTrashresult = await takeOutTrash43();
    console.log(takeOutTrashresult);

    console.log("You finished all the task");
  } catch (error) {
    console.log(error); // if any thing rejects it caught on catch block
  }
}
// doTasks1();
doTasks2();

// --------------------------------------------------------------------------------------------
// async function itself returns promise
// Remebmber even if we explicitly not written any written statement in the async function
//  internally it will return the promise

// async function	Promise result
// return "Hello"	Promise { "Hello" }
// return 10	    Promise { 10 }
// return true	    Promise { true }
// no return	    Promise { undefined }

//--------------EXAMPLE 1 : COMPARE async  and  without async ---------------------------------------

// in async function we dont write the resove() as in promise we write
// return simply means in asyn function resolve
// It internally converts retuen that value means resolved that promise here is value

function test10() {
  return new Promise((resolve) => {
    resolve("Hello");
  });
}

async function test11() {
  return "Hello";
}

let result = test11();
console.log(result); //// Promise { 'Hello' }

//-----------------------------Example 2-----------------------------------

async function test4() {
  console.log("Test4");
}

let result1 = test4();
console.log(result1); // Promise { undefined } as it not returning any value

async function test5() {
  console.log("Test5");
}

test5().then((value) => {
  console.log(value); // Prints undefined as it not returning any value
});

//------------------------------Example3-----------------------------

//It prints :

// A
// B  (outside of the  )
// Promise { <pending> }
// Data
// C

function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data");
    }, 2000);
  });
}

async function test8() {
  console.log("A");
  let result = await getData(); // aster the await not runs. It runs only after the promise returns a value it continues its execution
  console.log(result);
  console.log("C");
}

let promise = test8(); //as test it self returns promise it will be showing pending because the async function still running not completed
console.log("B");
console.log(promise);

// await does not block the whole js it blocks only the the content in the block below it
// js continues its execution after the block

// in the async function always it tries to execute the code in the synchronous manner
//but if any promise is there it will wait for that promise to resolve and then continue
//  its execution

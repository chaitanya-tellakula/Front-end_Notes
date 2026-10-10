// function declaration = define a reusable block of code
//                        that performs a specific task

function hello() {
  console.log("Hello"); // Function Declaration
}

//function expression =  a way to define functions as
//                        values or variables
//

// A function expression means instead of
// giving the function a name directly,
// you create the function and assign it to a variable.
//

//  A function is just another value in JavaScript,
//  so it can be stored in a variable just
//  like a number or a string.

// Remember if you call function before assigning gives error

//hello();

const hello4 = function () {
  console.log("Hello");
};

hello4();

// Example 2 :

setTimeout(hello, 3000);

setTimeout(function () {
  console.log("Hello!");
}, 3000); // 3000 in ms means equal to 3sec

//Example 3 :

function square(element) {
  return Math.pow(element, 2); // function declaration
}

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(square);

const squares2 = numbers.map(function (element) {
  return Math.pow(element, 2); //function Expresssion
});

const cubes = numbers.map(function (element) {
  return Math.pow(element, 3);
});
const evenNums = numbers.filter(function (element) {
  return element % 2 === 0;
});

const oddNums = numbers.filter(function (element) {
  return element % 2 !== 0;
});

const total = numbers.reduce(function (prev, curr) {
  return prev + curr;
}, 0);

console.log(total);

//used in
//  1 . Callbcks in asynchronous operations
//  2 . Higher Order Functions
//  3 . Closures
//  4 . Event Listeners
//


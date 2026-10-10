//Error = An object that is created to represent a problem
//        occurs
//
//  Occurs Often with user input or establishing a connection

//NETWORK ERRORS
//PROMISE REJECTION
//SECURITY ERRORS

//When an error occured it affects the normal execution flow
// of a program

//---------------------Example 1 ------------------------------

// TypeError: console.lag is not a function
// TypeErrors:  occur when we try to access with in
//               an object that does not exist one

console.log("Hello");
console.log("You have reached  the end");

//-------------------Example 2 ------------------------

//console.log(X);  Gives you error as X is undefined
console.log("You have reached  the end");

//------------------Example 3------------------

// try   {} = Encloses code that might potentially cause an error
// catch {} = Catch and handles any thrown errors from try {}
// finally{} = {Optional} Always executes . Used Mostly for clean Up
//           Ex : Close Files , close Connections , release resources

// you must have either a catch block or a finally block
// (or both). A try block cannot stand alone.

try {
  console.log(X);
  console.log("In try Block");
} catch (e) {
  console.log(e);
  console.log(e.name);
  console.log(e.message);
} finally {
  console.log("In Final Block It always executes");
}

console.log("Reached end of Example 3");

//--Example 4  : You can Intentionally throw an error-------------------

// In js  3/0 = undefined not gives you error

try {
  const dividend = Number(window.prompt("Enter a Dividend : "));
  const divisor = Number(window.prompt("Enter a Divisor : "));

  if (divisor == 0) {
    throw new Error("You cannot divide by 0");
  }
  if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error("Values must be numbers");
  }

  const result = dividend / divisor;
  console.log(result);
} catch (e) {
  console.log(e);
  console.log(e.name);
}

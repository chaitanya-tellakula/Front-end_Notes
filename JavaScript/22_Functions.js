//  Function = A section of reusable code .
//              Declare code once  use it when ever you want.
//              call the function to execute that code.
//
//

function happyBirthday() {
  console.log("Happy birthday Bot!");
  console.log("100 years nuvvu happy ga vundali");
}

happyBirthday();

function happyBirthday1(username, age) {
  // These are parameters
  console.log("Happy birthday " + username + " !");
  console.log("Wishing you " + age + " Birthday");
  console.log("100 years nuvvu happy ga vundali");
}

happyBirthday1("chintu", 20); // These are arguments

function add(x, y) {
  let result = x + y;
  return result;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function isEven(num) {
  return num % 2 === 0;
}

function isValidEmail(email) {
  if (email.includes("@")) {
    return true;
  } else {
    return false;
  }
}

console.log(isEven(4));

// Type Conversion = Changing the data type of a value to another
// (String, Number, Boolean)

// Number(),String(),Boolean()
// User input from window.prompt() is always a string.
// If you want to perform mathematical operations,
// convert it to a number first.

// "10" + 5
// Output: "105"
// JavaScript sees a string, so it converts 5 to "5"
// and performs string concatenation.

// If either side of the + operator is a string,
// JavaScript performs string concatenation instead of numeric addition.

let age = window.prompt("How old are you?");
age = age + 1; // String concatenation
console.log(age); // Example: "25" -> "251"

let AGE = window.prompt("How old are you?");
AGE = Number(AGE); // Convert string to number
AGE += 1;
console.log(AGE); // Example: 25 -> 26

let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x); //Nan
console.log(y, typeof y); //pizza
console.log(z, typeof z, "\n"); // true

let x1 = "01";
let y1 = "0";
let z1 = "0";

x1 = Number(x1);
y1 = String(y1);
z1 = Boolean(z1);

console.log(x1, typeof x1); // Number 1
console.log(y1, typeof y1); // String 0
console.log(z1, typeof z1, "\n"); // true as some ASCII value

let x2 = "";
let y2 = "";
let z2 = "";

x2 = Number(x2);
y2 = String(y2);
z2 = Boolean(z2);

console.log(x2, typeof x2); // Number 0  still
console.log(y2, typeof y2); // String ""
console.log(z2, typeof z2, "\n"); // false

let x3;
let y3;
let z3;

x3 = Number(x3);
y3 = String(y3);
z3 = Boolean(z3);

console.log(x3, typeof x3); // Number 0  still
console.log(y3, typeof y3); // String ""
console.log(z3, typeof z3, "\n"); // false

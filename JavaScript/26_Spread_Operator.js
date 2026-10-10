// Spread Operator = ... allows an iterable such as an
//                        array or String to be expanded
//                        into seperate elements
//                         (Unpacks the elements)
//
// let letters2=[...username].join("-"); -> to covert letters back to string

let numbers = [1, 2, 3, 4, 5]; // [ 1, 2, 3, 4, 5 ]
console.log(numbers);

console.log(Math.max(numbers)); // Directly we cant find we get Nan

//Using the Spread Operator we can find Spread operator
// will make the numbers out of array

console.log(...numbers); // 1 2 3 4 5  without brackets it printed like individual elements

let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(maximum);
console.log(minimum);

//let a= ...numbers; -> we cant assign multiple values to a variable

let username = "Bro code";
let letters1 = [...username];
let letters2 = [...username].join("-"); //Helpful to join the elements

console.log(letters1);
console.log(letters2);

let fruits = ["Apple", "Banana", "Orange"];
let vegetables = ["Carrots", "Potato", "Brinjal"];

let foods = [...fruits, ...vegetables, "eggs", "milk"];
console.log(foods);

//String Slicing =  creating a substring
//                  from a portion id another String
//
//                  String.slice(start,end) -> start to end-1
//                                  ending is excludes

// If you to print all from some part  fullName.slice(4); you print all from position4

// negative index count from last -1,-2,-3,-4 ...

const fullName = "Bro Code";

let firstName = fullName.slice(0, 3);
let lastName = fullName.slice(4, 8);

console.log(firstName);
console.log(lastName);

console.log(fullName.slice(4)); // Prints all from 4th index

let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(7);
let negative = fullName.slice(-4); //Negative indexing

console.log(firstChar);
console.log(lastChar);
console.log(negative);

//To make Work for all names

let firstName1 = fullName.slice(0, fullName.indexOf(" "));
let lastName1 = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName1);
console.log(lastName1);

const email = "Brocode@gmail.com";
let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(username);
console.log(extension);

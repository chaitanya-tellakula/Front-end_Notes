// variable = A container that stores a value
//             Behaves as if were the value it contains

// delcration let x;
//  assignment x=100

// Note : <script src="app.js">// This code is ignored!</script>;
//                             if you write src then all content in scrpit is ignored
//                             To accept that write two script tags  like

// <script src="app.js"></script>
// <script>
//     // More JavaScript
// </script>

let x;
x = 100;

console.log(x);

//Differnt Data Types  1)Number  2)String  3)Boolean

let age = 20;
let price = 10.99;
let gpa = 8.8;
let firstName = "Pavan"; // A String is a series of characters can have numbers
let favouriteFood = "Biryani";
let email = "sairam@gmail.com";
let online = false; //Boolean are either true or false
let forSale = true;
let isStudent = true;

console.log(`You are ${age} years old`);
console.log("The price is $" + price);
console.log("Your gpa is : " + gpa);
console.log("Your name is " + firstName);
console.log("My Favorite Food is " + favouriteFood);
console.log("Your email is " + email);
console.log("Bro is " + online);
console.log("Is This car for same " + forSale);
console.log("Enrolled : " + isStudent);

// To display the datatype

console.log(typeof age);
console.log(typeof price);
console.log(typeof firstName);
console.log(typeof online);

let FullName = "Sai Pavan";
let AGE = 25;
let STUDENT = false;

document.getElementById("p1").textContent = "You Name is " + FullName;
document.getElementById("p2").textContent = "You are " + AGE + " years old";
document.getElementById("p3").textContent = "Enrolled : " + STUDENT;

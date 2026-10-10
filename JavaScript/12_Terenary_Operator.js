// tenenary operator = a shortcut if{} else{} statements
//                        helps to assign a variable based on a
//                        condition
//              condition? conditionIfTrue ? conditionIfFalse

let age = 21;
let message = age >= 18 ? "You are an adult" : "You are a minor";
console.log(message);

let time = 16;
let greeting = time < 12 ? "Good Morning!" : "Good Afternoon";
console.log(greeting);

let isStudent = true;
let message1 = isStudent ? "You are an Student" : "You are not an Student";
console.log(message1);

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(
  "Your Total Amount : " +
    "$" +
    (purchaseAmount - purchaseAmount * (discount / 100)),
);

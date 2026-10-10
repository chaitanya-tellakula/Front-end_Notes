// Array = A variable like structure that can hold
//          more than 1 value

// See last example important

// fruits.push("coconut") -> Add an element at last
// fruits.pop()  -> Removes and element at last
//fruits.unshift("Watermelon") -> Add an element at start
//fruits.shift()  -> Removes an element at start

//fruits.indexOf("Banana") -> Returns index .If not present returns -1
//fruits.sort() -> Sorts in Alphabetical order
//fruits.sort().reverse() -> Sorts in reverse Alphabetical order

let fruits = ["apple", "orange", "Banana"];
console.log(fruits); // [ 'apple', 'orange', 'Banana' ] prints

fruits.push("Coconut");
fruits.pop();
fruits.unshift("Coconut");
fruits.shift();

console.log(fruits);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

let numOfFruits = fruits.length;
let index = fruits.indexOf("mango");

console.log(index);
console.log(numOfFruits);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i] + " ");
}

for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}

// Enhanced For Loop;

for (let fruit of fruits) {
  console.log(fruits);
}

// Prints like <47 empty items>
let fruits1 = ["apple", "orange", "Banana"];
fruits1[50] = "Senzo Bean";
console.log(fruits1);

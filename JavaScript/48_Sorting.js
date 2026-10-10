// sort() = method used to sort elements of an array
//          Sorts Elements as strings in
//          lexicograpgical order, not alphabetical
//
//     lexicograpghic =(alphabet+numbers+symbols) as strings
//
//sort() converts numbers into strings and compares them alphabetically.

// It repeatdely compare adjacent elements and swaps until array is sorted

let fruits = ["apple", "banana", "pineapple", "Guava", "Orange"];
fruits.sort();
console.log(fruits);

//Example 2 :

// As numbers converted into strings not prints
// correct order
let numbers = [1, 4, 2, 8, 5, 10, 6];
numbers.sort();
console.log(numbers); //[1, 10, 2, 4, 5, 6, 8];

// Example 3 :
// TO AVOID CONFLICT AND WORK CORRECTLY FOR NUMBERS

//a - b; -> positive means it keeps  b,a    a=10,b=2  -> 2,10
//b - a; -> negative means it keeps  b,a    a=2,b=10  -> 2,10

const numbers1 = [10, 2, 5, 100, 25];

numbers1.sort((a, b) => {
  return a - b; //ASCENDING ORDERS
});

console.log(numbers1);

//EXAMPLE 3 :

const people = [
  { name: "chaitu", age: 20, gpa: 8.0 },
  { name: "raghava", age: 21, gpa: 8.5 },
  { name: "rutwik", age: 25, gpa: 8.3 },
  { name: "prem", age: 23, gpa: 8.5 },
];

people.sort((a, b) => {
  return a.age - b.age;
});

console.log(people);

//Example 4 :

// string1.localeCompare(string2);

// Return Value	         Meaning
// Negative (< 0)=-1	    string1 comes before string2
// Positive (> 0)=1	      string1 comes after string2
//    0	                  Both strings are equal

people.sort((a, b) => {
  return a.name.localeCompare(b.name);
});

console.log(people);

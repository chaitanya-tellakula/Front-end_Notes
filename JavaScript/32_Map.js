//  map() = accepts a call back and applies that function
//          to each element of an array ,
//              then returns an  "new array"

//          (element,index,array)  is passed

// for each elemenet call the function that function
//  returns a value that kept in new array
//  finally that output array is returned

// element.split("-");

// JavaScript does something similar to:

// double(1, 0, numbers);
// double(2, 1, numbers);
// double(3, 2, numbers);
// double(4, 3, numbers);
// double(5, 4, numbers);

function square(element) {
  return Math.pow(element, 2);
}

function square(element) {
  return Math.pow(element, 3);
}

const numbers = [1, 2, 3, 4, 5];
const output = numbers.map(square);
console.log(output);

//Example 2 :

function uppercase(element) {
  return element.toUpperCase();
}

function lowercase(element) {
  return element.toLowerCase();
}

const students = ["chaitu", "kohli", "dhoni", "bhuvi"];
const output2 = students.map(uppercase);
console.log(output2);

//Example 3 :

function formatedDates(element) {
  const parts = element.split("-");
  return parts[0] + "/" + parts[1] + "/" + parts[2];
}

const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const output3 = dates.map(formatedDates);
console.log(output3);

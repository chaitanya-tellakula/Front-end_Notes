// filter() =  creates a new array by filtering
//              out elements
//
//        which elements returns true
//              that element added to the output array

function isEven(number) {
  return number % 2 === 0;
}

function isOdd(number) {
  return number % 2 !== 0;
}

let numbers = [1, 2, 3, 4, 5, 6, 7];
let output1 = numbers.filter(isEven);
console.log(output1);

//Example 2 :

function isAdult(number) {
  return number >= 18;
}

function isChild(number) {
  return number < 18;
}

let adults = [5, 22, 13, 89, 17, 24];
let output2 = adults.filter(isAdult);
console.log(output2);

//Example 3 :

function getShortWords(element) {
  return element.length <= 6;
}

function getLongWords(element) {
  return element.length > 6;
}

let words = ["apple", "Banana", "kiwi", "Pomegranate", "Coconut"];
let output3 = words.filter(getLongWords);
console.log(output3);

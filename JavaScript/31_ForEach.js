// forEach() = method used to iterate over the elements
//              of an array and apply a specific function
//              (callback) to each element
//
//           array.forEach(callback)
//          element,index,array

// Yes! In JavaScript, you can pass more arguments than a function declares, and it is not an error.
// Example:

// function test(a) {
//   console.log(a);
// }

// test(10, 20, 30);

// Output:  10
//
// The extra arguments (20 and 30) are simply ignored because the function only has one parameter (a).

// Behind the scenes, JavaScript does something like this:

// display(1, 0, numbers);
// display(2, 1, numbers);
// display(3, 2, numbers);
// display(4, 3, numbers);
// display(5, 4, numbers);

// Since Your function contain element remaing index and array ignored

function display(element) {
  console.log(element);
}

function double(element, index, arr) {
  arr[index] = element * 2;
}

function triple(element, index, arr) {
  arr[index] = element * 3;
}

function square(element, index, arr) {
  arr[index] = Math.pow(element, 2);
}

function cube(element, index, arr) {
  arr[index] = Math.pow(element, 3);
}

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(display);


//Example 2 :


function upperCase(element, index, arr) {
  arr[index] = element.toUpperCase();
}

function lowerCase(element, index, arr) {
  arr[index] = element.toLowerCase();
}

function capitalize(element, index, arr) {
  arr[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
}

let fruits = ["Apple", "Banana", "Pineapple", "Watermelon"];

fruits.forEach(upperCase);
console.log(fruits);

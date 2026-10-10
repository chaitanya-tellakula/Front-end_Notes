//  REST parameters = (...rest) allow a function work with a variable
//                     number of arguments by bundling them into an array
//
//           spread = Expands an array into sperate elements
//           rest   = bundles seperate elements into an array
//
//
//

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";

function openFridge(...foods) {
  //-> Accept any number of elements
  console.log(foods);
}

function getFood(...foods) {
  // Return an array
  return foods;
}

openFridge(food1, food2, food3, food4);
const foods = getFood(food1, food2, food3, food4);
console.log(foods);

function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

function getAverage(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result / numbers.length;
}

function combineStrings(...strings) {
  return strings.join(" ");
}

console.log("Total Sum : " + sum(4, 7, 5, 9));
console.log("Average : " + getAverage(75, 80, 100, 85, 90));
console.log(
  "Name : " + combineStrings("Mr.", "SpongeBob", "SquarePants", "III"),
);

const fruits = [
  { name: "Apple", color: "red", calaries: 95 },
  { name: "Orange", color: "orange", calaries: 100 },
  { name: "Banana", color: "yellow", calaries: 45 },
  { name: "Coconut", color: "white", calaries: 159 },
  { name: "pineApple", color: "yellow", calaries: 37 },
];

console.log(fruits[0].name);
console.log(fruits[0].calaries);

fruits.push({ name: "Grapes", color: "Purple", calaries: 105 });
fruits.pop();

// W e can print using for loop

for (let fruit of fruits) {
  console.log(fruit.name);
  console.log(fruit.color);
  console.log(fruit.calaries);
}

//-------------------For Each()-----------

fruits.forEach((element) => {
  console.log(element.name);
});

//------------------map()--------------------

const colors = fruits.map((element) => {
  return element.color;
});

console.log(colors);

//---------------filter()---------------

const yellowFruits = fruits.filter((element) => {
  return element.color === "yellow";
});

const lowCalfruits = fruits.filter((element) => {
  return element.calaries < 100;
});
console.log(yellowFruits);
console.log(lowCalfruits);

//-----------------reduce()-----------------

const maxCalFruit = fruits.reduce((prev, curr) => {
  if (curr.calaries > prev.calaries) {
    return curr;
  } else {
    return prev;
  }
});

console.log(maxCalFruit);




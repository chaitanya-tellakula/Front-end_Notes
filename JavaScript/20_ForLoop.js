// for Loop = Repeat some code a Limited amount  of time

// continue -> will skip that iteration
// break  -> completly it comes out of the for loop

for (let i = 0; i < 3; i++) {
  console.log(i);
}

for (let i = 1; i <= 10; i += 2) {
  console.log(i);
}

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

for (let i = 10; i > 0; i -= 2) {
  console.log(i);
}
console.log("Happy New Year");

// continue

for (let i = 1; i <= 20; i++) {
  if (i === 13) {
    continue;
  }
  console.log(i);
}

// Break

for (let i = 1; i <= 20; i++) {
  if (i === 13) {
    break;
  }
  console.log(i);
}

// Loop	               Used for                   	 Variable contains
// for...of	       Arrays, strings, maps, sets	       Value
// for...in         	Objects	                             Key (property name)

// Enhanced For Loop;
let fruits = ["apple", "orange", "Banana"];

for (let fruit of fruits) {
  console.log(fruits);
}

// "In" is used for the objects
const person = {
  firstName: "John",
  age: 25,
};

for (const property in person) {
  console.log(property); // gives properties -> keys  not values
}

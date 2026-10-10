// deconstructing = extract values from arrays and objects
//                  then assign them to variable in a
//                   convinent way
//
//          [] = to perform array deconstructing
//          {} = to perform object deconstructing
//              5 examples

//----------------EXAMPLE 1 -------------------
// SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

//----------------EXAMPLE 2 -------------------
// SWAP 2 ELEMENTS IN AN ARRAY

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(colors);

//----------------EXAMPLE 3 -------------------
// ASSIGN ARRAY ELEMENTS TO VARIABLES

const colors1 = ["red", "green", "blue", "black", "white"];

const [firstColor, , thridcolor, ...extraColors] = colors1;

console.log(firstColor);
console.log(thridcolor);
console.log(extraColors);

//----------------EXAMPLE 4 -------------------
// EXTRACT VALUES FROM OBJECTS

// If that variable not present it return undefined
//  so we can keep default values

const person1 = {
  firstName: "SpongeBob",
  lastName: "SquarePants",
  age: 30,
  job: "Fry Cook",
};

const person2 = {
  firstName: "Patrik",
  lastName: "Star",
  age: 20,
};

const { age, lastName, job = "unemployed", fullname } = person2; // Javascript searches the
console.log(age); //property names in the object
console.log(lastName);
console.log(job);
console.log(fullname);

//----------------EXAMPLE 5 -------------------
// DESTRUCTURE OF OBJECTS IN FUNCTION PARAMETERS

// same appliciable here also deconstructing
// seraches the name in object and assigns the values

function displayPerson({ firstName, age, job = "unemployed", lastName }) {
  console.log("Name : " + firstName + " " + lastName);
  console.log("Age: " + age);
  console.log("Job: " + job);
}

displayPerson(person2);

//----------------EXAMPLE 6 -------------------
//  Function returning multiple values

function getCoordinates() {
  return [100, 200];
}

const [x, y] = getCoordinates();

console.log(x); // 100
console.log(y); // 200

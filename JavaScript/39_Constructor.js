//  Constructor = Special Method for defing the
//                 properties and methods of objects
//
//
//

// "Why is it written as a function?"

// Because before ES6 (2015), JavaScript didn't
// have the class keyword. Developers used
// constructor functions to create objects.

// Comparison

// Old style (constructor function):

// function Car(make) {
//   this.make = make;
// }

// Modern style (class):

// class Car {
//   constructor(make) {
//     this.make = make;
//   }
// }

// Both

function Car(a, b, year, color) {
  this.make = a;
  this.model = b;
  this.year = year;
  this.color = color;
  this.drive = function () {
    console.log("You drove the " + this.model);
  };
}


const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Benz", "Canaro", 2025, "blue");

console.log(car1);
console.log(car2);

car1.drive();

console.log(car1.color);
console.log(car1.make);
console.log(car1.model);

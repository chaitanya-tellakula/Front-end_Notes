// static = keyword that defines properties or methods that
//          belong to a class itself rather than the objects
//          created from that class(class owns anything static,
//          not the objects)
//

// Property belongs to   	Inside class	    Outside class
// Instance property	    this.name	          object.name
// Static property	       ClassName.userCount	  ClassName.userCount

// So as a beginner, a very good habit is:

// Instance property → always write this.property.
// Static property → always write ClassName.property.

// Inside Static Method :
// this refers to the class (Car)

// Member	Syntax

// Static Property	      Car.totalCars (or this.totalCars)
// Static Method	        Car.showMessage() (or this.showMessage())
// Instance Property	    car.brand (need an object)
// Instance Method	      car.start() (need an object)

// Inside Instance Method :
// this refers to the current object (instance)

// Member	Syntax
// Instance Property	   this.brand
// Instance Method	     this.start()
// Static Property	     Car.totalCars
// Static Method	       Car.showMessage()

class Circle {
  static PI = 3.14159;

  static getDiameter(radius) {
    return radius * 2;
  }

  static getCircumference(radius) {
    return 2 * this.PI * radius; // inside static method this = class name
  }

  static getArea(radius) {
    return this.PI * radius * radius;
  }
}

console.log("Diameter : " + Circle.getDiameter(3));
console.log("Circumference : " + Circle.getCircumference(3));
console.log("Area : " + Circle.getArea(3));

// Example 2 :

//Inside a constructor, this refers to the current object (instance) being created.
//  However, static properties and methods belong to the class itself,
// not to any individual instance.
// Therefore, you cannot access static properties or methods using this inside a constructor or instance method. Instead, you should use the class name to access them.
class User {
  static userCount = 0;

  constructor(username) {
    this.username = username;
    User.userCount++; // this.userCount++;// this = object so this.userCount is undefined
  }
}

const user1 = new User("Babu");
console.log(User.userCount);
const user2 = new User("Ayyagaru");
console.log(User.userCount);

//Example 3 :

class Food {
  static userCount = 0;

  constructor(food) {
    this.food = food; // Instance Property
    Food.userCount++;
  }

  static test() {
    console.log(this.userCount); // Inside static method this = ClassName
    console.log(this.food); //  Inside Instance method this = object .class dont have the property food so this.food is undefined
  }
}

Food.test();
const user100 = new Food("Raghava");
Food.test();

//Example 4 :

class Car {
  // ===== Static Property =====
  static totalCars = 0;

  // ===== Instance Property =====
  constructor(brand) {
    this.brand = brand;
    Car.totalCars++;
  }

  // ===== Static Method =====
  static companyInfo() {
    console.log("===== Inside Static Method =====");

    // 1. Access Static Property
    console.log("Total Cars:", Car.totalCars);

    // 2. Call Static Method
    Car.showMessage();

    // 3. Access Instance Property (Need an object)
    const car = new Car("BMW");
    console.log("Brand:", car.brand);

    // 4. Call Instance Method (Need an object)
    car.start();
  }

  static showMessage() {
    console.log("Welcome to Car Company");
  }

  // ===== Instance Method =====
  drive() {
    console.log("\n===== Inside Instance Method =====");

    // 1. Access Instance Property
    console.log("Brand:", this.brand);

    // 2. Call Instance Method
    this.start();

    // 3. Access Static Property
    console.log("Total Cars:", Car.totalCars);

    // 4. Call Static Method
    Car.showMessage();
  }

  start() {
    console.log(this.brand + " is starting...");
  }
}

const car1 = new Car("Toyota");

car1.drive();
Car.companyInfo();

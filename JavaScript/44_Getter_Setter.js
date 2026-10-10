// getter= Special Method that makes a property redable
// setter =Special Method that makes a property Writeable
//
//
//validate and modify a value when reading/writing a property
//

// If we have a get and set methods we call it a propertry without brackets ()
// We can add extra getters also which are even not properties

// class Person {
//   set age(value) {
//     this.age = value;  calls again set age function causes infinite recursion so we uses other variable inside
//   }
// }

// JavaScript does:

// p.age = 20
//       ↓
// set age(20)
//       ↓
// this.age = 20

// Example 1 :

// Beacause of these users may send useless values causes problems

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

const rectangle = new Rectangle(-10000, "pizza");

//Example 2 :

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName; // this calls set
    this.lastName = lastName; // this also calls set when ever we canging it calls
    this.age = age;
  }

  set firstName(newfirstName) {
    if (typeof newfirstName === "string" && newfirstName.length > 0) {
      this._firstName = newfirstName;
    } else {
      console.error("First Name Should be a Non-empty String");
    }
  }

  set lastName(newlastName) {
    if (typeof newlastName === "string" && newlastName.length > 0) {
      this._lastName = newlastName;
    } else {
      console.error("Last Name Should be a Non-empty String");
    }
  }

  set age(value) {
    if (typeof value === "number" && value > 0) {
      this._age = value;
    } else {
      console.error("Age must be a non-zero number");
    }
  }

  get age() {
    return this._age;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }
  get fullName() {
    return this._firstName + " " + this._lastName;
  }
}

const person = new Person(420, 68, "pizza");

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);

//Example 3 :

class Square {
  constructor(width, height) {
    this.width = width; // calls set width() this.width,p.width both calls setwidth
    this.height = height;
  }

  set width(newwidth) {
    if (newwidth > 0) {
      this._width = newwidth;
    } else {
      console.error("Width must be a Positive Number");
    }
  }

  set height(newheight) {
    if (newheight > 0) {
      this._height = newheight;
    } else {
      console.error("Width must be a Positive Number");
    }
  }

  get width() {
    return this._width + " cm";
  }

  get height() {
    return this._height + " cm";
  }

  get area() {
    return this._width * this._height + " cm^2"; // calls getters as we reading the value as not assigning value
  }
}

const square = new Square(10, 2);
console.log(square._height);
console.log(square.width);
console.log(square.area);

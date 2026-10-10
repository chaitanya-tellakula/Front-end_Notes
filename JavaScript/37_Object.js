// object= A collection of relted properties and/or methods
//         can represent real worls objects(people,products,places)
//
//          object = {
//                      key : value,
//                      function_name (){ ...}
//                      Hello(){ ...}
//                      }
//
//Rule to remember :

// Syntax	this works?
// greet() {}	✅ Yes
// greet: function() {}	✅ Yes
// greet: () => {}	❌ No (usually not for object methods)
//
//
//



// the object you've written is not a class, 
// so the properties are neither class variables nor 
// instance variables in the Java/C++ sense


const person1 = {
  firstName: "SpongeBob",
  lastName: "SquarePants",
  age: 30,
  isEmployee: true,
  sayHello: function () {
    console.log("HI! i am " + this.firstName);
  },
};

const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 20,
  isEmployee: false,
  sayHello: () => {
    console.log("HI! i am " + this.firstName);
  },
};

const person3 = {
  firstName: "SpongeBob",
  lastName: "SquarePants",
  age: 30,
  isEmployee: true,
  sayHell0() {
    console.log("HI! i am " + this.firstName);
  },
};

// We can add new properties :

person1.country = "USA";
person2.country = "India";
person1.newfun = function () {
  console.log(" New function added");
};

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployee);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployee);

// How to write functions inside the function :

const person = {
  name: "Patrick",

  normal: function () {
    console.log(this.name); //  This sytax also Mostly used
  },

  short() {
    console.log(this.name); // Most Used Recommended
  },

  arrow: () => {
    // Not Recommended
    console.log(this.name); // Arrow function dont have the this
  },
};

person.normal(); // Patrick ✅
person.short(); // Patrick ✅
person.arrow(); // undefined ❌

// person.greet()

// So the safest rule is:

// Arrow functions don't get their own this;
// they use the surrounding this. In a browser,
// that surrounding this is often window,
// which is why this.name is usually undefined
// unless window.name has been set.

// this
//  │
//  ▼
// window (or surrounding scope)
//  │
//  ▼
// window.name
//  │
//  ▼
// undefined

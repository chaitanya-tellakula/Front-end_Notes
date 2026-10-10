// super = keyword used in classes to call the constructor
//         acccess the properties and methods of parent(super class)
//
//          this  = this object
//          super = the parent

// Shortcut is if we have child constructor
// u must write super. where as in jave super
//  automaticlly added

// Parent has constructor?	Child has constructor?	     Need to write super()?
// ❌ No	                         ❌ No	                   ❌ No (JavaScript adds everything automatically)
// ❌ No	                         ✅ Yes                   ✅ Yes, write super()
// ✅ Yes	                       ❌ No	                   ❌ No (JavaScript adds it automatically)
// ✅ Yes	                       ✅ Yes	                 ✅ Yes, write super(...)

// Example 1 :

// JavaScript automatically creates:

// class Child extends Parent {
//   constructor(...args) {
//     super(...args);
//   }
// }

class Parent {
  constructor(name) {
    console.log("Name:", name); // since parent has only
  } //one parameter remaing ingnored
}

class Child extends Parent {}

new Child("Chaitanya", 20, "Delhi");

//Example 2:

// JavaScript treats it like this:

// class Parent {
//     constructor() {
//         // Empty constructor
//     }
// }

class Parent1 {}

class Child1 extends Parent1 {
  constructor() {
    super();
    console.log("Child constructor");
  }
}

new Child1();

//Example 3 :

class GrandParent {
  constructor(name) {
    this.name = name;
    console.log("GrandParent:", name);
  }
}

class Parent2 extends GrandParent {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}

class Child2 extends Parent2 {
  constructor(name, age, city) {
    super(name, age);
    this.city = city;
  }
}

const obj = new Child2("Chaitanya", 20, "Delhi");

console.log(obj);

//Example 4 :

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  move(speed) {
    console.log("The " + this.name + " moves at a speed of " + speed + "mph");
  }
}

class Rabbit extends Animal {
  constructor(name, age, runSpped) {
    super(name, age);
    this.runSpped = runSpped;
  }
  run() {
    console.log("This " + this.name + "can run");
    this.move(this.runSpped);
  }
}

class Fish extends Animal {
  constructor(name, age, swimSpped) {
    super(name, age);
    this.swimSpped = runSpped;
  }
  swim() {
    console.log("This " + this.name + "can swim");
    this.move(this.swimSpped);
  }
}

class Hawl extends Animal {
  constructor(name, age, flySpped) {
    super(name, age);
    this.flySpped = flySpped;
  }
  swim() {
    console.log("This " + this.name + "can Fly");
    this.move(this.swimSpped);
  }
}

const r = new Rabbit("Boddu", 21, 100);
r.run();

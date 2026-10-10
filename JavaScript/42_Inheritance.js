// inheritance = allows a new class to inherit it properties and
//               methods from an existing class (prent -> child)
//               helps with code reusability
//
//


// Member	Can Override?	       What Actually Happens?
// Instance Method	✅ Yes	Child method overrides parent method.
// Instance Variable	❌ No	Child assigns a new value to its own property (replaces the parent's initialized value on that instance).
// Static Method	✅ Yes	Child static method overrides (hides) the parent's static method.
// Static Variable	❌ No	Child static property hides (shadows) the parent's static property.







class Animal {
  alive = true;

  eat() {
    console.log("This " + this.name + " is eating");
  }
  sleep() {
    console.log("This " + this.name + " is sleeping");
  }
}

class Rabbit extends Animal {
  name = "Rabbit";

  run() {
    console.log("This " + this.name + " is running");
  }
}

class Fish extends Animal {
  name = "Fish";
  swim() {
    console.log("This " + this.name + " is swimming");
  }
}

class Hawk extends Animal {
  name = "hawk";
  fly() {
    console.log("This " + this.name + " is flying");
  }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swim();

// Example :

class Animal {
  // Static Property
  static kingdom = "Animal Kingdom";

  constructor(name) {
    // Instance Property
    this.name = name;
  }

  // Static Method
  static showKingdom() {
    console.log("Animal Static Method");
  }

  // Instance Method
  speak() {
    console.log("Animal Instance Method");
  }
}

class Dog extends Animal {
  // Static Property (Shadows/Hides parent's property)
  static kingdom = "Dog Kingdom";

  constructor(name) {
    super(name);

    // Replaces the instance property value
    this.name = "Buddy";
  }

  // Static Method (Overrides parent's static method)
  static showKingdom() {
    console.log("Dog Static Method");
  }

  // Instance Method (Overrides parent's instance method)
  speak() {
    console.log("Dog Instance Method");
  }
}

// Create object
const dog = new Dog("Rocky");

// ---------- Instance Property ----------
console.log("Instance Property:");
console.log(dog.name);

// ---------- Instance Method ----------
console.log("\nInstance Method:");
dog.speak();

// ---------- Static Property ----------
console.log("\nStatic Property:");
console.log(Animal.kingdom);
console.log(Dog.kingdom);

// ---------- Static Method ----------
console.log("\nStatic Method:");
Animal.showKingdom();
Dog.showKingdom();




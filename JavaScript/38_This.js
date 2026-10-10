// this = refrence to the object where THIS  is used
//        (the object depends on the immediate context)
//         person.name =this.name
//

// Arrow functions Dont work with the this

const person1 = {
  firstName: "SpongeBob",
  favFood: "hamBurgers",
  sayHello: function () {
    console.log("HI! i am " + this.firstName);
  },
  eat: function () {
    console.log(this.firstName + " is eating " + this.favFood);
  },
};

const person2 = {
  firstName: "Patrick",
  favFood: "Dosa",
  sayHello: () => {
    console.log("HI! i am " + this.firstName);
  },
  eat: () => {
    console.log(this.firstName + " is eating " + this.favFood);
  },
};

person1.eat();
person2.eat();

console.log(this); // Points to the window object

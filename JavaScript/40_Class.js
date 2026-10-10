// class =(ES6 Feature) provides a more structured and
//        cleaner way to work with the objects compared to
//         traditional functions
//
//      Ex : static keyword , encapsulation , inheritance
//

// Rule to remember :
// price → a local or global variable.
// this.price → the price property of the current object.

//JavaScript doesn't automatically add this..
// You have to write it yourself.

// If it's inside () (parentheses), it's usually a parameter.

// No let,const used js cretes a variable for you
//  But inside function if need varaiable you need
//  to create it by your self:

// function(a, b)
// catch(error)
// constructor(name)
// (item) => {}
// (value, index) => {}

//Example 1 :

let price = 10;

class Product {
  name;
  price;
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  displayProduct() {
    let a = 10;
    console.log(a);
    console.log("Product : " + this.name);
    console.log("Price : " + price); // price is a local variable or globl variable js tries to find vriable name price local or global
    console.log(this.price); // 600 (object property)
  }

  calculateTotalTax(salesTax) {
    return this.price + this.price * salesTax;
  }
}

const product1 = new Product("Watch", 600);
product1.displayProduct();
console.log("Total price : " + product1.calculateTotalTax(0.05));

//To access the properties of an object you need to definitly use this keyword.

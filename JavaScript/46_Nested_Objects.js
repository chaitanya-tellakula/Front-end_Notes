// nested Objects = Objects inside of another object
//                  Allows you to represent more
//                  complex data structures. Child object
//                  is enclosed by Parent Object
//
//
//                  Person{Address{} ,ContactInfo{}}
//                  ShoppingCart{KeyBoard{}, Mouse{} ,Mointer {}}

const person = {
  fullName: "SpongeBob",
  age: 30,
  isStudent: true,
  hobbies: ["karate", "jellyFishing", "Cooking"],
  address: {
    street: "124 Counch St.",
    city: "Bikini Bottom",
    country: "Int . Water",
  },
};

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[2]);
console.log(person.address);
console.log(person.address.city);

//Iteration of object  :
for (const a in person) {
  console.log(person[a]);
}

//Example 2 :

class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

class Person {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

const person12 = new Person(
  "Chaitanya",
  21,
  "Andhra Bank",
  "Piduguralla",
  "Palnadu",
);

const person11 = new Person(
  "Suddep",
  20,
  "Maya Bazar",
  "Piduguralla",
  "Palnadu",
);
console.log(person11);

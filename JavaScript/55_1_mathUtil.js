// export means:  "Other files are allowed to use
//                  these functions."

// So think of export as putting a label on something:
// "This variable/function is public. Other files may use it."

// As we not write export name in the "e,get volume" it
//  cannot be used by the other files

// This file will export all the things we methoind export
//  but the importing file will take only the thing from
//  the imported

export const PI = 3.14159;
const e = 2.71;

export function getCircumference(radius) {
  return 2 * PI * radius;
}

export function getArea(radius) {
  return PI * radius * radius;
}

function getVolume(radius) {
  return (4 / 3) * PI * radius * radius * radius;
}

export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

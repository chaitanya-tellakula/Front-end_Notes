// ES6 Module = An external file that contains
//              reusable code that can be imported
//               into other JavaScript files.
//
// Write reusable code for many differnt apps.
// Modules Can contain variables,classes ,functions ... and more
// Introduced as a part of ECMAScript 2015 update
//
//
//
//

// we use object deconstructing

// before file we exported the getCircumference also
//  but we not imported we can import what we need

// Names ,function names of the imported should match with them

import { PI, getArea, getCircumference, Person } from "./55_1_mathUtil.js";

console.log(PI);
console.log("Circumference : " + getCircumference(10).toFixed(2) + "cm");
console.log("Area : " + getArea(10).toFixed(2) + "cm^2");

const p1 = new Person("Chaitanya", 20);
p1.greet();

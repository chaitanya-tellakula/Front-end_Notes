// Arrow Functions = a concise waay to write
//               the function expressions good for
//                simple functions that use only once
//
//              (parameters) => some code
//
//

// setTimeout(() => console.log("Hello"), 3000);	✅	Single expression, no ; inside
// setTimeout(() => { console.log("Hello"); }, 3000);	✅	Function body with statements
// setTimeout(() => console.log("Hello");, 3000);	❌	; ends the expression before , 3000

// Easy rule to remember:

// No {} → JavaScript automatically returns the expression.
// With {} → You must write return if you want the function to return a value.

// Arrow Function	Return Needed?	Example

// x => x * x	❌ No (implicit return)	Returns x * x automatically
// x => { return x * x; }	✅ Yes	Explicit return
// x => { x * x; }	❌ Missing return	Returns undefined
// () => console.log("Hello")	Implicitly returns undefined (the return value of console.log)	Works fine in setTimeout because the return value is ignored

const hello = (name, age) => {
  console.log("Hello " + name);
  console.log("You are " + age + " years old");
};

hello("Pavan", 20);

//Example 2 :

setTimeout(() => console.log("Hello"), 3000);

setTimeout(() => {
  console.log("Hello");
}, 3000);

//Example 3 :

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, next) => accumulator + next);

console.log(total);

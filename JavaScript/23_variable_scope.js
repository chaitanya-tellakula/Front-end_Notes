// variable scope = where a variable is recognizd
//                  and accessible  (local vs global)
//
// First you look at same name in local scope
//  if not found then you look at the global scope

let y = 10; // Global Variable can access every where

function function1() {
  let x = 1;
  console.log(x);
  console.log(y);
}

function function2() {
  let x = 2;
  let y = 7; // Firt we llok at Local Scope
  console.log(x);
  console.log(y);
}

function1();
function2();

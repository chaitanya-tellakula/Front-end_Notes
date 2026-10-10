// closure = A Function defined inside of another function,
//           the inner function has access to the variables
//           and scope of the outer function
//
//      Allow for private variables and state maintenace
//      Used Frequently is JS framework : React , Vue , Angular
//

//Inner function has access of all present at outside it

// Easy rule to remember :

// ✅ Function declaration

// hello();

// function hello() {
//   console.log("Hello");
// }

// Works.

// ❌ Function expression

// hello();

// let hello = function () {
//   console.log("Hello");
// };

// Doesn't work. Because as we assigning to vaiable\
//  it need to run first so we cannot call first

//--------------------- Example 1 ------------------------------

// Global Scope
// │
// ├── outer()
// │      │
// │      ├── message
// │      └── inner()

function outer() {
  let message = "Hello";

  inner();

  function inner() {
    console.log(message);
  }
}

outer();
message = "bye"; // we ccnot access the message as it is inside function differnt scope
// Js creates a new global variable
outer();
//inner();  we can't call beacuse it is inside function
// to call it we need to mention inside of outer

//--------------------- Example 2 ------------------------------

function createCounter() {
  let count = 0;
  function increment() {
    count++;
    console.log("Count is increased to : " + count);
  }

  function getCount() {
    return count;
  }
  return { increment, getCount }; // Returns a object containing that function
}

const counter1 = createCounter();
counter1.increment();
counter1.increment();

console.log("The current count is : " + counter1.getCount());

const counter2 = createCounter();
counter2.increment();
counter2.increment();

//--------------------- Example 3 ------------------------------

function createGame() {
  let score = 0;

  function increaseScore(points) {
    score += points;
    console.log("+" + points + "pts");
  }

  function decreaseScore(points) {
    score -= points;
    console.log("" + points + "pts");
  }

  function getScore() {
    return score;
  }

  return { increaseScore, decreaseScore, getScore };
}

const game = createGame();
game.increaseScore(5);
game.decreaseScore(-8);
console.log("The Final Score : " + game.getScore());

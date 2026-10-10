// eventListener = Listen for specific events to create
//                  interative web pages
//
//      document.addEventListener(event, callback)
//
//     events : keydown, keyup , keypress(not compatable for our web pages so don't use it)

// keydown = when you press anything in keyboard
// keyup = when u release a key

// One event can have multiple listeners,
// and each listener can perform a different task.

// like below i wriiten for document same key up each
//  listner doing differnt tasks

//-----------------Example 1 -----------------------

document.addEventListener("keydown", (event) => {
  console.log(event);
  console.log("Key down : " + event.key); // this shows what you you have entered
});

document.addEventListener("keyup", (event) => {
  // this shows after pressing the key you relase that key
  //  right at that time what you released that shoes
  console.log("Key released : " + event.key); // it is a string
});

//--------------------Example 2--------------------

// while playing game when we hold a button then
// only car moves if we release it will stop

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    player.moveRight();
  }
});

document.addEventListener("keyup", function (event) {
  if (event.key === "ArrowRight") {
    player.stop();
  }
});

//--------------------Example 3----------------------

const myBox = document.getElementById("myBox");
document.addEventListener("keydown", (event) => {
  myBox.textContent = "😁";
  myBox.style.backgroundColor = "red";
});

document.addEventListener("keyup", (event) => {
  myBox.textContent = "🤣";
  myBox.style.backgroundColor = "#5adbec";
});

//--------------------Example 4----------------------

//Browser Cordinate System :

// (0,0) ─────────────→ x increases
//   │
//   │
//   │
//   ↓
// y increases

// The browser automatically has certain behaviors
// for certain keys/events. preventDefault() stops those
// behaviors.

// When you press ArrowRight, your code moves the box.
// But the browser may also perform its default behavior,
//  such as scrolling the page

const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", (event) => {
  if (event.key.startsWith("Arrow")) {
    event.preventDefault();

    switch (event.key) {
      case "ArrowUp":
        y -= moveAmount;
        break;

      case "ArrowDown":
        y += moveAmount;
        break;

      case "ArrowLeft":
        x -= moveAmount;
        break;

      case "ArrowRight":
        x += moveAmount;
        break;
    }

    myBox.style.top = y + "px";
    myBox.style.left = x + "px";
  }
});

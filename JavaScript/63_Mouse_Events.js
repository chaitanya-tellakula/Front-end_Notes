//eventListener = Listen for specific events to create
//                interative web pages

// An single Element can have more than 1 eventListner

//  events :
// "click"       -> user clicks
// "mouseover"   -> mouse moves over element
// "mouseout"    -> mouse leaves element
// "keydown"
//  "keyup"

//     .addEventListener(event,callback)
//

// addEventListener() tells JavaScript to watch an element
//  for a particular event. When that event happens,
// it calls the specified function and passes
// an event object to that function. This contain lot of
//information like while elemnent , what pressed, where happend
// etc ..

// addEventListener()
//        ↓
// "Watch for a click"
//        ↓
// User clicks myBox
//        ↓
// Browser creates event object
//        ↓
// calls changeColor(eventObject)
//        ↓
// event parameter receives eventObject

// -----------------EXAMPLE 1 -----------------

// event.target -> returns that html element where that event happaend

function changeColor(event) {
  console.log(event.type); // "click"
  console.log(event.target); //<div id="myBox">Click Me</div>  outps the element was clicked
  console.log(event.clientX); // mouse X position
  console.log(event.clientY); // mouse Y position

  event.target.style.backgroundColor = "tomato";
  event.target.textContent = "OUCH! 🤕";
}

const myBox = document.getElementById("myBox");

myBox.addEventListener("click", changeColor);

// -------------------Example 2---------------------

myBox.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "green";
  event.target.textContent = " Don't do it 😓";
});

// -------------------Example 3---------------------

// to return back to original when we move mouse out

myBox.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "#5042eb";
  event.target.textContent = "Click Me 😊";
});

// -------------------Example 4---------------------

const myButton = document.getElementById("myButton");

myButton.addEventListener("click", (event) => {
  myBox.style.backgroundColor = "tomato";
  myBox.textContent = "OUCH! 🤕";
});

myButton.addEventListener("mouseover", (event) => {
  myBox.style.backgroundColor = "green";
  myBox.textContent = " Don't do it 😓";
});

myButton.addEventListener("mouseout", (event) => {
  myBox.style.backgroundColor = "#5042eb";
  myBox.textContent = "Click Me 😊";
});

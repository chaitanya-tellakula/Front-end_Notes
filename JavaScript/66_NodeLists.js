//NodeList = Static Collection of HTML elements
//           by(id,class,element)  Can be created by using
//           the  querySeelectorAll()
//
//      Silmilar to the Array, but no(map,filter,reduce)
//      But it has forEach()
// Important Note :
//      " NodeList won't update to automatically reflect
//      changes "

//when we create an element to access class
//we do newButton.classList=""

//  <h1 class="red blue green" >

// classList → manipulate individual classes
//             add / remove / toggle / contains

// className → replace the whole class attribute class name

// event.target.remove();-> To remove the element from DOM when we click on it

let buttons = document.querySelectorAll(".myButtons");
console.log(buttons);

//---------- Example 1 Add or change Html properties----------------

buttons.forEach((button) => {
  button.style.backgroundColor = "green";
  button.textContent += "😁";
});

//---------- Example 2 Add EventListner---------------

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "red";
  });
});

//-----------------Example 3 -------------------

buttons.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "rgb(8, 229, 8)";
  });
});

buttons.forEach((button) => {
  button.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "green";
  });
});

//-----------------Example 4-------------------

const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList.add("myButtons");
document.body.append(newButton);

console.log(buttons); //contain 4 elements
// even if we add new elemnt it not updated

let buttons2 = document.querySelectorAll(".myButtons");
console.log(buttons2); // as new added contain 5 elements

//--------------------Example 3-------------------

// even if we remove that element from DOM
// they still present in nodelist

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.remove();
  });
});

console.log(buttons);
document.body.append(buttons[0]); // even if we delete they
//present in node list if we want we can add it later

// buttons[0] is a reference to the actual Button 1 DOM object.
// document.body.append(buttons[0]);

// you're telling the browser:
// Take this existing Button 1
//         ↓
// put it at the end of body

// So append() moves an existing element if it is
// already in the DOM.

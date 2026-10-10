//createElement("h1") -> creates a new HTML element (h1) and returns it as an object
// append(newH1) ->  helps to add element inside it as last child
// prepend(newH1) ->  helps to add element inside it as first child
// parent.insertBefore(newElement , beforewhichchild)  -> Go to the parent and use this
// parent.removeChild(newH1)  -> Go to parent use this method
// event.target.remove();

//Inside removeChild() you pass the HTML element
// (DOM element) that you want to remove.

// Property	        Purpose	                 Uses .style?
// textContent	    Change text         	      ❌ No
// innerHTML	    Change HTML inside  	        ❌ No
// id	             Set ID	                      ❌ No
// className	    Set class	                    ❌ No
// value	        Input value	                  ❌ No
// src	             source	                    ❌ No
// href	            Link URL	                  ❌ No
// style.color	    Text color	                ✅ Yes
// style.fontSize	Font size	                    ✅ Yes
// style.backgroundColor	Background color	    ✅ Yes

// newH1
// │
// ├── textContent = "I like pizza"
// │
// ├── style
// │     ├── color = "red"
// │     ├── fontSize = "40px"
// │     └── backgroundColor = "yellow"
// │
// └── id
// └── className
// └── innerHTML
// └── value

//--------------Example 1------------------
// .append()-> helps to add element inside it as last child

//  append() does not automatically treat everything as HTML. It checks what you pass:

// If you pass an element object, it inserts that element.
// If you pass a string, it inserts it as plain text.append("Hello")

// append("Hello")   ->Text Hello is added
// append(newH2)     ->HTML element (object) <h2>Hello MASTER</h2> is added
const newH1 = document.createElement("h1");

newH1.textContent = "I like pizza";
newH1.id = "myH1";
newH1.style.backgroundColor = "red";
newH1.style.textAlign = "center";

document.body.append(newH1); //This adds new element as the last child
document.body.prepend(newH1); //This adds new element as the first child

const newH2 = document.createElement("h2");
newH2.textContent = "Hello MASTER";

// we can append to any element not only body
document.getElementById("box3").append("This text is added ");
document.getElementById("box3").append(newH2);

// ------------------------EXAMPLE 2-----------------

// parent.insertBefore(newElement, referenceElement);

// parent → The parent.
// newElement → The element you want to insert.
// referenceElement → This is child where we want to insert before this

const box3 = document.getElementById("box3");
const newElement1 = document.createElement("h2");
newElement1.textContent = " inserted before box3";

document.body.insertBefore(newElement1, box3);

//------------------Example 3--------------------

const boxes = document.querySelectorAll(".box");
const newElement2 = document.createElement("h2");

newElement2.textContent = " inserted before box4";
document.body.insertBefore(newElement2, boxes[3]);

//------------------Example 4--------------------

document.getElementById("box3").removeChild(newH2);

//------------------Example 5--------------------

const newListItem = document.createElement("li");
const newListItem2 = document.createElement("li");
const newListItem3 = document.createElement("li");

newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "pink";

newListItem2.textContent = "Mango";
newListItem2.textContent = "Papaya";
newListItem3.textContent = "Watermelon";

document.getElementById("fruits").append(newListItem);

document
  .getElementById("fruits")
  .insertBefore(newListItem2, document.getElementById("Orange"));

const fruits2 = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem3, fruits2[1]);

document.getElementById("fruits").removeChild(newListItem3);

// Both contain HTML elements
// const list1 = document.querySelectorAll(".box");
// const list2 = document.getElementsByClassName("box");

// Both let you do: AS inside of them contain actual html elements

// list1[0].style.backgroundColor = "yellow";
// list2[0].style.backgroundColor = "yellow";

//----------------------Theory ---------------------

// HTML element code → represented by the browser as an object.

// const newListItem3 = document.createElement("li");

// "li DOM object means the l1 element what we see in the browser";

// document
//    ↓
// Document DOM object
//    ↓
// createElement()
//    ↓
// creates a new Element DOM object
//    ↓
// newListItem3 refers to that object

// newListItem3
//      ↓
//   <li> DOM object

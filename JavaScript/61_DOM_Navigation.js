//DOM Navigation = The process of navigation through the
//                  structure of an html document
//                  using java script
//
// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSlibling
// .parentElement
// .children   // returns HTML collection

//------------Example 1 :---------------------

const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;

firstChild.style.backgroundColor = "yellow";

const ulElements = document.querySelectorAll("ul");

ulElements.forEach((ulElement) => {
  const first = ulElement.firstElementChild;
  first.style.fontSize = "2em";
});

//------------Example 2 :---------------------

const element2 = document.getElementById("fruits");
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "green";

const ulElements2 = document.querySelectorAll("ul");

ulElements2.forEach((ulElement) => {
  const last = ulElement.lastElementChild;
  last.style.fontSize = "2em";
});

//------------Example 3 :---------------------

const element3 = document.getElementById("Apple");
const nextSlibling = element3.nextElementSibling;
nextSlibling.style.backgroundColor = "red";

//------------Example 4 :---------------------

const element4 = document.getElementById("Onions");
const previosSibling = element4.previousElementSibling;
previosSibling.style.color = "purple";

//------------Example 5 :---------------------

const element5 = document.getElementById("Cake");
const parent = element5.parentElement;
parent.style.backgroundColor = "grey";

//------------Example 6 :---------------------

const element6 = document.getElementById("vegetables");
const children = element6.children;

children[1].style.fontStyle = "Italic";
console.log(children);

// As we know HTML COLLECTIONS dont have forEach
//so typecast to array

Array.from(children).forEach((child) => {
  child.style.backgroundColor = "pink";
});










//element selectors= Methods used to target and
//                   manipulate HTML elements .They
//                   allow you to select one or multiple
//                   HTML elements from the DOM(Document Object Model)
//
// These all are built in methods inside document object
//
// 1. document.getElementById()        //ELEMENT OR NULL
// 2. document.getElementsClassName()  // HTML COLLECTION
// 3. document.getElementByTagName()   // HTML COLLECTION
// 4. document.querySelector()         //ELEMENT OR NULL
// 5. document.querySelectorAll()      //NODELIST

// CamelCase =  only first word start with small
//              remaining words start word captial.

// When we accsesing properties using DOM it follows Camel Case convention
// In the CSS it follows kebab-case convention

// first name	                firstName
// user age	                     userAge
// font size	                fontSize
// background color	            backgroundColor
// student roll number	        studentRollNumber

//----------------Example 1 -----------------

const myHeading = document.getElementById("my-heading");
const ex = document.getElementById("not-present");

myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log(myHeading); // shoes that html code
console.log(ex); // as it not presnt that element returns null

//----------------Example 2 -----------------

// if you see in browser each div element in collection
// conatins many properties like textContent

// fruits.forEach() -> JavaScript collections dont have
//                     property called forEach()

// Array.from(fruits) :
// so typecast Js collection to Array

const fruits = document.getElementsByClassName("fruits");

console.log(fruits); // It is a HTML collection shows that 3 elements inside it

fruits[0].style.backgroundColor = "yellow";
fruits[1].style.backgroundColor = "blue";
fruits[2].style.backgroundColor = "red";

for (let fruit of fruits) {
  fruit.style.color = "white";
}

Array.from(fruits).forEach((fruit) => {
  fruit.style.fontSize = "2em";
});

//----------------Example 3 -----------------

// They are HTML collections not Arrays to use
// array  methods typecast to Array

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

console.log(h4Elements); // It also returns HTML collections
console.log(liElements);

h4Elements[0].style.backgroundColor = "grey";
h4Elements[1].style.backgroundColor = "grey";

for (let h4Element of h4Elements) {
  h4Element.style.color = "green";
}

for (let liElement of liElements) {
  liElement.style.color = "purple";
}

Array.from(liElements).forEach((liElement) => {
  liElement.style.backgroundColor = "orange";
});

//----------------Example 4-------------------------------

// takes the first element

//querySelector() accepts any valid CSS selector:

// document.querySelector("h1");        // Tag
// document.querySelector(".box");      // Class
// document.querySelector("#title");    // ID
// document.querySelector("div p");     // Descendant
// document.querySelector("input");     // Tag
// document.querySelector("[type='text']"); // Attribute

const element1 = document.querySelector("h3");
const element2 = document.querySelector("#unknown");

console.log(element2); // it returns null as it not exist
element1.style.backgroundColor = "red";

//----------------Example 5-------------------------------

//querySelectorAll() accepts any valid CSS selector:

// document.querySelectorAll("h1");        // Tag
// document.querySelectorAll(".box");      // Class
// document.querySelectorAll("#title");    // ID
// document.querySelectorAll("div p");     // Descendant
// document.querySelectorAll("input");     // Tag
// document.querySelectorAll "[type='text']"); // Attribute  as these accept ?

// A node List is similar to html collections
// but have built in methods similiar to arrays

// querySelector() → returns the first matching element.
// querySelectorAll() → returns all matching elements as a NodeList.

// NODELISTS = they are static
// HTML Collectios = they are live. so updated live

// node lists have the forEach() method

const snacks = document.querySelectorAll(".Snacks");
console.log(snacks);

snacks.forEach((snack) => {
  snack.style.backgroundColor = "pink";
});

//----------------Example 6--------------------------------

const items1 = document.querySelectorAll("li");

console.log(items1.length); // 2

// Add another <li>
document.getElementById("list1").innerHTML += "<li>Orange</li>";

console.log(items1.length); // Still 2 ❌ (doesn't update)

const items2 = document.getElementsByTagName("li");

console.log(items2.length); // 2

// Add another <li>
document.getElementById("list2").innerHTML += "<li>Orange</li>";

console.log(items2.length); // 3 ✅ (updated automatically)

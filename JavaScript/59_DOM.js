// DOM = DOCUMENT OBJECT MODEL
//     It is a javascript
//     Object{} that represents the page you see in the
//     web browser and provides you with an API to
//     interact with it .
//
//  Web Browser constructs the DOM when it loads an
//  HTML document, and structures all the elements in a
//  tree-like representation.
//  Javascript can access the DOM to dynamically
//  change the content, structure, style of a webpage

// before document.getElementById("") here document
// is an object contains various methods and nested objects

// When the browser loads an HTML page,
// it creates a JavaScript object called document.

console.log(document); // Shows the entire HTML code
console.dir(document); //dir=Directory shows all its properties and functions as we checking inside object

//----------------Example 2----------------

document.title = "Intro To DOM";
document.body.style.backgroundColor = "hsl(0,0%,15%)";

const username = " Chaitanya";
const welcomeMsg = document.getElementById("Welcome-msg");

welcomeMsg.textContent += username === "" ? "Guest" : username;

// ---------------------------Theory---------------------------

console.log(typeof document); // both are object
console.log(typeof h1); //object

// DOM = Document Object Model

// It is the browser's representation
// of the HTML page as a tree of objects.

// let h1 = document.getElementById("heading");
// it returns a reference to the DOM Element object
// representing that HTML element.

// console.log(h1);

// The console displays something like:

// <h1 id="heading">Hello</h1>
// This is just the console's human-readable
// representation of the DOM object.

// DOM
// │
// ├── document
// │     └── DOM object
// │           Type = Document  Special type present whole document
// │
// ├── <html>
// │     └── DOM object
// │           Type = Element
// │
// ├── <body>
// │     └── DOM object
// │           Type = Element
// │
// ├── <h1>
// │     └── DOM object
// │           Type = Element
// │
// └── <p>
//       └── DOM object
//             Type = Element

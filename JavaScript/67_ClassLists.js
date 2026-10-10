// classList = Element property in JavaScript used to
//             interact with an element's list of
//             classes(CSS classes) Allows you to make
//             reusable classes for many elements
//             Across your webpage
//

// add("clasname")
// remove("classname")
// toggle(Remove if Present ,Add if not present)
// replace("oldClass" , "newClass")
// contains("classname")



//-------------------Example 1---------------------------

const myButton = document.getElementById("myButton");
const myH1 = document.getElementById("myH1");

myButton.classList.add("enabled");
myH1.classList.add("enabled");

myButton.addEventListener("click", (event) => {
  if (event.target.classList.contains("disabled")) {
    event.target.textContent += "🤬";
  } else {
    //To if diabled not present replace with existing disabled
    event.target.classList.replace("enabled", "disabled");
  }
});

myH1.addEventListener("click", (event) => {
  if (event.target.classList.contains("disabled")) {
    event.target.textContent += "🤬";
  } else {
    //To if diabled not present replace with existing disabled
    event.target.classList.replace("enabled", "disabled");
  }
});

//-----------------------Example 2--------------------------

const buttons = document.querySelectorAll(".myButtons");

buttons.forEach((button) => {
  button.classList.add("enabled");
});

buttons.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
    event.target.classList.toggle("hover");
  });
});

buttons.forEach((button) => {
  button.addEventListener("mouseout", (event) => {
    event.target.classList.toggle("hover");
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.classList.contains("disabled")) {
      event.target.textContent += "🤬";
    } else {
      event.target.classList.replace("enabled", "disabled");
    }
  });
});

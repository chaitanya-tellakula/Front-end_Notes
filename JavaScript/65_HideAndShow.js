//------------------------------Example 1-------------------------

//here both does the same
// But for the same element we can add multiple event
//listeners all are independent all will execute
//but when we write functions onclick 2nd timea
//what u write that only will execute

const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

myButton.addEventListener("click", (event) => {
  if (myImg.style.display === "none") {
    myImg.style.display = "block";
    myButton.textContent = "Hide";
  } else {
    myImg.style.display = "none";
    myButton.textContent = "show";
  }
});

myButton.onclick = function () {
  if (myImg.style.display === "none") {
    myImg.style.display = "block";
    myButton.textContent = "Hide";
  } else {
    myImg.style.display = "none";
    myButton.textContent = "show";
  }
};

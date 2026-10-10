//While Loop = Repeat some set of code until some condition is true

// Remember when you cancel the window.prompt it returns "null"

let username = "";

if (username === "") {
  console.log("You not entered the name");
} else {
  console.log("Hello " + username);
}

let username1 = "";

while (username1 === "" || username1 === null) {
  username1 = window.prompt("Enter Your Name : ");
}
console.log("Hello " + username1);

// Using do while loop when you not define a variable any value and prints
// It shows undefined

let username2;
do {
  username2 = window.prompt("Enter Your Name : ");
} while (username2 === "" || username2 === null);
console.log("Hello " + username2);

let loggedIn = false;
let username3;
let password;

while (!loggedIn) {
  username3 = window.prompt("Enter the username");
  password = window.prompt("Enter the Password");

  if (username3 === "myUserName" && password === "myPassword") {
    console.log("You are logged In");
    loggedIn = true;
  } else {
    console.log("Invalid credintials ! Please try again");
  }
}

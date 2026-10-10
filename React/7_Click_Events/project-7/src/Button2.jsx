// onClick={handleClick2("chaitanya")} means directly we dirctly calling function while rendering

//IN Js

// const btn = document.getElementById("btn");

// btn.onclick = func;

// function func() {
//   console.log("Clicked");
// }

function Button2() {
  const handleClick2 = (name) => console.log(name + " Stop clicking me");

  return <button onClick={() => handleClick2("chaitanya")}>Click Me🤣</button>;
}

export default Button2;

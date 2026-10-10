// onClick={handleClick2("chaitanya")} means directly we dirctly calling function while rendering

//IN Js

// const btn = document.getElementById("btn");

// btn.onclick = func;

// function func() {
//   console.log("Clicked");
// }

function Button3() {
  let count = 0;
  const handleClick3 = (name) => {
    if (count < 3) {
      count++;
      console.log(name + " You clicked me " + count + " time");
    } else {
      console.log(name + " stop clicking me ");
    }
  };

  return <button onClick={() => handleClick3("chaitanya")}>Click Me🤣</button>;
}

export default Button3;

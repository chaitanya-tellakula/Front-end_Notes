// onClick={handleClick2("chaitanya")} means directly we dirctly calling function while rendering

//IN Js :

// const btn = document.getElementById("btn");
// btn.onclick = func;
// function func() {
//   console.log("Clicked");
// }

//--------------------------------------------------------------------

// onClick={func}          // ✅ function reference
// onClick={() => func()}  // ✅ also works
// onClick={func()}        // ❌ calls immediately so we () not call

//IN Jsx :

// 1. No arguments  :
//     a) <button onClick={func}>Click me</button>
//              Or
//     b) <button onClick={() => func()}>Click me</button>

// 2 .With Arguments :
//
//          Need to use the arrow function beacause
//  onclick=( func("chaitanya"))-> means calling without click
//   To avoid this we use the arrow function

//
//  <button onClick={() => func("Hello")}>Click me</button>

function Button() {
  const handleClick1 = () => console.log("OOUCH!");

  return <button onClick={handleClick1}>Click Me🤣</button>;
}

export default Button;

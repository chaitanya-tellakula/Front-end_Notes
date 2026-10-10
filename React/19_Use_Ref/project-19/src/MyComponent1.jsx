import { useEffect, useState } from "react";

//Using UseEffect in main.jsx i removed the Strict Mode
//  even the code is working

function MyComponent1() {
  let [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("Component Rendered! ");
  });

  function handleClick() {
    setNumber((n) => n + 1);
  }

  return <button onClick={handleClick}>Click me</button>;
}
export default MyComponent1;

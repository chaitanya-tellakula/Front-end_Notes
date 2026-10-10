import { useEffect, useRef, useState } from "react";

// useRef return a ref object with single "current"
// property intially set to intial value you provided
//
//
//
//u can see the value is getting updated
//UI is not updating because it is not re-renders the
// component

function MyComponent2() {
  const count = useRef(0);

  useEffect(() => {
    console.log("Component Rendered! ");
  });

  function handleClick() {
    count.current++;
    console.log(count.current);
  }

  return (
    <div>
      <p>count : {count.current}</p>
      <button onClick={handleClick}>Click me</button>;
    </div>
  );
}
export default MyComponent2;



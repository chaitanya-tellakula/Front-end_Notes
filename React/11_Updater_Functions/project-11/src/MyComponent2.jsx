import React, { useState } from "react";

function MyComponent2() {
  const [count, setCount] = useState(0);

  //Takes the pending state to calculate the NEXT state
  //React puts your updater function in a queue(waiting in line)
  //During the next render , it will call them in same order

  // when u calling the state updates of smae variable
  //  multiple times to get the latest value use the
  // updater functions

  function increment() {
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    // better to use like this every time when updating
  }

  //Takes the pending state to calculate the NEXT state
  //React puts your updater function in a queue(waiting in line)
  //During the next render , it will call them in same order

  function decrement() {
    setCount((count) => count - 1);
    setCount((count) => count - 1);
    setCount((count) => count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => reset()}>Reset</button>
      <button onClick={() => increment()}>Increment</button>
    </div>
  );
}

export default MyComponent2;

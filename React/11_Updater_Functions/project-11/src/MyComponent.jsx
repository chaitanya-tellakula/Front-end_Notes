// updater Function = A function passed an argument to
//            setState() usually
//     Ex : setYear(year+1) -> works but
//          setYear(arrowfunction) -> need to use
//
// Allows for safe updates based on the previous state
// used with multiple state updates and asynchronous
// functions . Good pratice to use updater functions
//

// React doesn't immediately re-render 
// for every setState call; it can batch the state updates,
//  process them in order, and then re-render
//  with the resulting state.
import React, { useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  function increment() {
    // Uses the current state to calculate the next state
    // set function do not trigger an update
    // React " batches together state updates " for performance reasons
    // NEXT state becomes the current state after an update

    setCount(count + 1); //sends request for update the count state
    setCount(count + 1); //send request for update the count state
    //just request was sent but the react does the state update
    // after completetion of this function so it was not updated
    // it uses the every time current state count only
    // to solve this problem updater function is called
    // inside the sae function increment we will update
    //  the count value

    setCount((count) => count + 1); // better to use like this every time when updating
  }

  //Takes the pending state to calculate the NEXT state
  //React puts your updater function in a queue(waiting in line)
  //During the next render , it will call them in same order

  function decrement() {
    setCount(count - 1);
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

export default MyComponent;

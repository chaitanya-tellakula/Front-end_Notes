// useEffect() = React Hook that tells React to Do some
//                code when  { PICK ONE }
//      This component re-renders
//      This component mounts(create component and add to DOM)
//      The state of a value changes

// useEffect( function , [dependencies])

// 1. useEEffect(()=> { })   //Runs after every re-render
// 2. useEffect(()=> [])     // Runs only on mount
// 3. useEffect(()=> {}, [value]) // Runs on mount + when value changes
//

// Uses :
//  #1 Event Listners
//  #2 DOM manipulation
//  #3 Subscriptions (real-time updates)
//  #4 Fetching data from API
//  #5 Clean up when a component unmounts(removing component from DOM)

// This useEffect like useSideCode  -> u use the side code when above something happens

//mount basically means the first time
//when React creates your component and puts
//it on the webpage (DOM).-> first time when react loads your page

// In this u can see 1st time when component renders
//  the page  count=0 so that will be the tilte
// even now u count changes the tile remains still count=0

import React, { useState, useEffect } from "react";

function MyComponent1() {
  const [count, setCount] = useState(0);

  // here u set the title to My  counter program
  //  it will execute only once suffient u dont change
  //  title set once at 1st time
  useEffect(() => {
    document.title = "Count : " + count;
    //  document.title = "My Counter Program";
  }, []);

  function addCount() {
    setCount((count) => count + 1);
  }

  return (
    <>
      <p>Count : {count}</p>
      <button onClick={addCount}> Add</button>
    </>
  );
}

export default MyComponent1;

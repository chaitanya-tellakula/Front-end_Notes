// now it will execute every time when rendered page by react

// 1st time render-> when page loads react renders your component to display
// 2nd time or next ->if now any component changes react will render component again now also executes

import React, { useState, useEffect } from "react";

function MyComponent2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = "Count : " + count;
  }); // see this

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

export default MyComponent2;

import MyComponent1 from "./MyComponent1";
import MyComponent2 from "./MyComponent2";
import MyComponent3 from "./MyComponent3";
import MyComponent4 from "./MyComponent4";
import React, { useState } from "react";
function App() {
  const [show, setShow] = useState(true);

  // here when the component is removed the
  // code mention in the return  of
  // useEffect runs

  return (
    <>
      {/* <MyComponent1 /> */}
      {/* <MyComponent2 /> */}
      {/* <MyComponent3 /> */}
      <button onClick={() => setShow(!show)}>Show / Hide</button>

      {show && <MyComponent4 />}
    </>
  );
}

export default App;

// addEventListener()  → removeEventListener()
// setInterval()       → clearInterval()
// setTimeout()        → clearTimeout()
// subscribe()         → unsubscribe()

// So in your example:

// addEventListener = "start listening"
// return cleanup = "stop listening when necessary"

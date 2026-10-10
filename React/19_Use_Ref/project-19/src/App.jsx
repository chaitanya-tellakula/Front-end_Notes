// useState() = Re-renders ths component when the state
//            value changes
//

//useRef() = "use Reference" Does not cause re-renders
//           when its value changes. when you want a
//          component to remember some information but
//          you dont want that information to trigger
//          new renders

//      1.Accessing/Interacting with DOM elements
//      2. Handling Focus, Animations and Trasitions
//      3. Managing Timers and Intervals

import MyComponent1 from "./MyComponent1";
import MyComponent2 from "./MyComponent2";
import MyComponent3 from "./MyComponent3";
import MyComponent4 from "./MyComponent4";
import MyComponent5 from "./MyComponent5";
function App() {
  return (
    <>
      {/* <MyComponent1 /> */}
      {/* <MyComponent2 /> */}
      {/* <MyComponent3 /> */}
      {/* <MyComponent4 /> */}
      <MyComponent5 />
    </>
  );
}

export default App;

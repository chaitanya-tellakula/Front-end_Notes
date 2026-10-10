//React Hook= Special function that alloes functional
//         coponents to use the react features  without
//         writing the class components (React v16.8).
//
//useState() = A react hook that allows the creation of
//            statefull varaiable and a setter function to
//           update its value in the vitual DOM .
//
//    [ name ,setName]
//
//

import Counter from "./Counter";
import MyComponent from "./MyComponent";
import MyComponent2 from "./MyComponent2";
import MyComponent3 from "./MyComponent3";
function App() {
  return (
    <>
      <MyComponent></MyComponent>
      <hr />
      <MyComponent2></MyComponent2>
      <hr />
      <MyComponent3></MyComponent3>
      <hr />
      <Counter></Counter>
    </>
  );
}

export default App;

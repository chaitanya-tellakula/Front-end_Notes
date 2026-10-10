//UseContext() = React Hook That allows u to share values
//              Blw the multiple levels of components
//              Without passing the props
//              through each level
//
// PROVIDER  COMPONENT
// 1. import {createContext} from 'react';
// 2. export const MyContext=createContext();
// 3. <MyContext.Provider value={value}>
//          <Child/>
//    </MyContext.Provider>
//

//  CONSUMER COMPONENTS
// 1. import React ,{useContext} from 'react'
//    import {MyContext} from './ComponentA'
// 2. const value= useContext(MyContext);
//
//
import React, { createContext } from "react";

import ComponentA from "./ComponentA";
import ComponentE from "./ComponentE";
import ComponentF from "./ComponentF";

export const UserContext = createContext();

function App() {
  const user = "Brocode";

  return (
    <UserContext.Provider value={user}>
      <ComponentA />
      <ComponentE />
      <ComponentF />
    </UserContext.Provider>
  );
}

export default App;

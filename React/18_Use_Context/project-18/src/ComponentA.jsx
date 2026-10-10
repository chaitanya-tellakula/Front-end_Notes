// The Provider does not provide the value only to
// Component B.It provides the value to B and
// all components rendered inside B, including C and D.

import ComponentB from "./ComponentB";

function ComponentA() {
  return (
    <div className="box">
      <h1>Component A</h1>

      <ComponentB />
    </div>
  );
}

export default ComponentA;

//        Provider
//     value = Brocode
//           │
//  ┌────────┼────────┐
//  ↓        ↓        ↓
//  A        E        F
//  │
//  B
//  │
//  C
//  │
//  D

import "./App.css";

// How to style the react components
//---------------------------------------------------------

//(not including external frameworks or preprocessing)

// 1. External-> from index.css
// 2. MODULES -> button.module.css
// 3. INLINE -> js object style={js objectS}

import Button from "./Button/button.jsx";
import Button2 from "./Button2.jsx";
function App() {
  return (
    <>
      <Button></Button>
      <Button2 />
    </>
  );
}

export default App;

import { useState } from "react";
import DashBoard from "./DashBoard";

import HomePage from "./Homepage";

function App() {
  document.title = "Wellness-program-managemnt-platform";
  return (
    <div>
      <HomePage></HomePage>
      <DashBoard />
      <form>
        Dash Board :<input type="text" />
        No of students :
        <input type="text" />
        Technical information :
        <input type="text" />
        <button>ADD details</button>
      </form>
    </div>
  );
}

export default App;

import React, { useContext } from "react";
import { UserContext } from "./App";

function ComponentE() {
  const user = useContext(UserContext);

  return (
    <div className="box">
      <h1>Component E</h1>
      <h2>Hello {user}</h2>
    </div>
  );
}

export default ComponentE;

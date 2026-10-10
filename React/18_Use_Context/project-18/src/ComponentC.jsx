import React, { useContext } from "react";
import ComponentD from "./ComponentD";
import { UserContext } from "./App";

function ComponentC() {
  const user = useContext(UserContext);

  return (
    <div className="box">
      <h1>Component C</h1>
      <h2>User: {user}</h2>

      <ComponentD />
    </div>
  );
}

export default ComponentC;

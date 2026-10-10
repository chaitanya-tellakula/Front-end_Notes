import React, { useContext } from "react";
import { UserContext } from "./App";

function ComponentF() {
  const user = useContext(UserContext);

  return (
    <div className="box">
      <h1>Component F</h1>
      <h2>Hello {user}</h2>
    </div>
  );
}

export default ComponentF;

import React, { useState, useEffect } from "react";

//useEffect exeutes when the  first time and when
// the count changes whether increase or decrease

//here when coulor changes the count remains same
//it not get increased or decreased
// w

function MyComponent3() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  //Executes first time when rendered page displays count=0 and on every update of count
  useEffect(() => {
    document.title = "Count : " + count + " Color : " + color;
  }, [count]); // -> According to this even when u change colour the color remains same . It changes only when the count changes
  // as when count changes renders page again when rederning what is color that is displayed

  // so rendering page by count only that time title updated
  // when rendering page by colour that time title is not updated

  // useEffect(() => {
  //   document.title = "Count : " + count + " Color : " + color;
  // }, [count, color]);

  function addCount() {
    setCount((count) => count + 1);
  }

  function subtractCount() {
    setCount((count) => count - 1);
  }

  function changeColor() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }

  return (
    <>
      <p style={{ color: color }}>Count : {count}</p>
      <button onClick={addCount}> Add</button>
      <button onClick={subtractCount}>Subtract</button>
      <button onClick={changeColor}>Change Color</button>
    </>
  );
}

export default MyComponent3;

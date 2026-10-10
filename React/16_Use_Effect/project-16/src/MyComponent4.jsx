import React, { useState, useEffect } from "react";

function MyComponent4() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  function handleResize() {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }
  //if u dont keep in useEffect when we change size of window
  // many times event listerner added but one time is
  //enough
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("Event listner added");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Event listner Removed");
    };
  }, []); // in the return statement code executes when u remove the component completely Component4

  useEffect(() => {
    document.title = "Size : " + height + " X " + width;
  }, [height, width]); // run this code when ever the height or width changes

  return (
    <div>
      <p>Window width : {width}</p>
      <p>Window Height : {height}</p>
    </div>
  );
}
export default MyComponent4;

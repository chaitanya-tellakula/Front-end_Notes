import React, { use, useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#ffffff");

  const styles = {
    backgroundColor: color,
  };

  function handleColorChange(e) {
    setColor(e.target.value);
  }
  return (
    <>
      <div className="color-picker-container">
        <h1>Color Picker</h1>

        <div className="color-display" style={styles}>
          <p> Selected Color : {color}</p>
        </div>

        <label htmlFor="">Select a Color : </label>
        <input type="color" onChange={(e) => handleColorChange(e)} />
      </div>
    </>
  );
}
export default ColorPicker;

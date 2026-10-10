import React, { useState } from "react";

function MyComponent1() {
  const [car, setCar] = useState({ year: 2024, make: "red", model: "Mustang" });

  function handleYearChange(e) {
    // setCar({ ...car, year: e.target.value });

    setCar((car) => ({ ...car, year: e.target.value })); //inside the arrow function  {} thinks we writing the multiline  statement to avoid we can wrap that  ()
  }

  function handleMakeChange(e) {
    setCar((c) => ({ ...c, make: e.target.value })); //inside the arrow function  {} thinks we writing the multiline  statement to avoid we can wrap that  ()
  }
  function handleModelChange(e) {
    setCar((c) => ({ ...c, model: e.target.value })); //inside the arrow function  {} thinks we writing the multiline  statement to avoid we can wrap that  ()
  }
  return (
    <div>
      <p>
        Your favourite car is : {car.year} {car.make} {car.model}
      </p>

      <input
        type="number"
        value={car.year}
        onChange={(event) => handleYearChange(event)} //even if i dont write value also works if i write the value initial value also shown
      />
      <br />
      <input type="text" onChange={(event) => handleMakeChange(event)} />
      <br />
      <input type="text" onChange={(event) => handleModelChange(event)} />
      <br />
    </div>
  );
}
export default MyComponent1;

// setCar({ ...car, year: e.target.value });
//    It means :
//
// setCar({  year: 2024, make: "red", model: "Mustang" , year :2025 })
// When we have the same key value like year it takes the
// latest value at last one

// as before we dicusses instead directly
// passing the value
// we can pass the updater function

// setCar((car) => ({ ...car, year: e.target.value }));
// //inside the arrow function  {} thinks we writing
//  the multiline  statement to avoid we can wrap that ()

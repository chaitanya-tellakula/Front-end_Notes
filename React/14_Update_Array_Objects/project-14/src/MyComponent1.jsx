import React, { useState } from "react";

function MyComponent1() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = {
      year: carYear,
      make: carMake,
      model: carModel,
    };

    setCars([...cars, newCar]);

    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }

  function handleRemoveCar(index) {
    setCars(cars.filter((element, i) => i !== index));
  }

  function handleYearChange(e) {
    setCarYear(e.target.value);
  }
  function handleMakeChange(e) {
    setCarMake(e.target.value);
  }
  function handleModelChange(e) {
    setCarModel(e.target.value);
  }

  return (
    <div>
      <h2>List of Car Objects</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>
      <input
        type="number"
        value={carYear}
        onChange={(event) => handleYearChange(event)}
      />{" "}
      <br />
      <input
        type="text"
        value={carMake}
        placeholder="Enter Car Make"
        onChange={(event) => handleMakeChange(event)}
      />{" "}
      <br />
      <input
        type="text"
        value={carModel}
        placeholder="Enter Car Model"
        onChange={(event) => handleModelChange(event)}
      />{" "}
      <br />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
}

export default MyComponent1;

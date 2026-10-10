import React, { useState } from "react";
function MyComponent() {
  const [foods, setFoods] = useState(["Apple", "Banana", "Orange"]);

  function handleAddFood() {
    const newFood = document.getElementById("food-name").value;
    document.getElementById("food-name").value = "";

    setFoods((f) => [...f, newFood]); // set food passes current food
  }

  function handleRemoveFood(index) {
    setFoods(foods.filter((element, i) => i !== index));
  }

  return (
    <div>
      <h2>List of food</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="food-name" placeholder="Enter a food name" />
      <button onClick={handleAddFood}>Add Food</button>
      <hr />
    </div>
  );
}
export default MyComponent;

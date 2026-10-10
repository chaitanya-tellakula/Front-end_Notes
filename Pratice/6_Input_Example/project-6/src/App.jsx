import { use, useState } from "react";
import "./App.css";

function App() {
  const [fruits, setFruits] = useState([]);
  const [element, setElement] = useState("");
  const [number, setNumber] = useState("");
  const onDelete = (number) => {
    let newFruits = fruits.filter((element) => element.number !== number);
    setFruits(newFruits);
  };

  const onAdd = () => {
    let newFruit = { name: element, number: number };
    let newFruits = [...fruits, newFruit];
    setFruits(newFruits);
    setElement("");
    setNumber("");
  };

  let styles = {
    display: "flex",
  };

  return (
    <>
      <div style={styles}>
        <h1>Fruit</h1>
        <input
          onChange={(event) => setElement(event.target.value)}
          type="text"
          value={element}
        />
        <h1>Quantity</h1>
        <input
          type="number"
          onChange={(event) => setNumber(event.target.value)}
          value={number}
        />
        <button onClick={onAdd}>Add</button>
      </div>

      <div>
        {fruits.map((element) => {
          return (
            <div style={styles} key={element.number}>
              <h2>
                {element.name} {element.number}
              </h2>
              <button onClick={() => onDelete(element.number)}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;

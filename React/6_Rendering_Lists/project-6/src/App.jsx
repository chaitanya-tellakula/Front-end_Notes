import List1 from "./List1.jsx";
import List2 from "./List2.jsx";
import List3 from "./List3.jsx";

// return null ; -> react when rendering  null means display nothing

function App() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 120 },
    { id: 3, name: "Banana", calories: 90 },
    { id: 4, name: "PineApple", calories: 80 },
    { id: 5, name: "coconut", calories: 40 },
  ];

  const vegetables = [
    { id: 6, name: "Potato", calories: 105 },
    { id: 7, name: "Brinjal", calories: 90 },
    { id: 8, name: "Papaya", calories: 100 },
    { id: 9, name: "Carrot", calories: 50 },
    { id: 10, name: "Capsicum", calories: 50 },
  ];

  return (
    <>
      <List1 />
      <List2 />
      {fruits.length > 0 ? <List3 items={fruits} category="fruits" /> : null}
      {vegetables.length > 0 ? (
        <List3 items={vegetables} category="vegetables" />
      ) : null}
    </>
  );
}

export default App;

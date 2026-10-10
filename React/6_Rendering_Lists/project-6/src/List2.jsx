// 2. Array of objects

// "If React is rendering multiple elements from an array,
//  give each generated element a unique key.";

// as Below listItems is array of li's
// it renders the elements inside it
function List2() {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 120 },
    { id: 3, name: "Banana", calories: 90 },
    { id: 4, name: "PineApple", calories: 80 },
    { id: 5, name: "coconut", calories: 40 },
  ];

  //fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabhateical
  //fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE Alphabhateical
  //fruits.sort((a, b) => a.calories - b.calories); // Ascending Numerical
  //fruits.sort((a, b) => b.calories - a.calories); // Descending Numerical

  const lowCalFruits = fruits.filter((fruit) => {
    return fruit.calories < 100;
  });
  const highCalFruits = fruits.filter((fruit) => {
    return fruit.calories >= 100;
  });

  const listItems = fruits.map((fruit) => {
    return (
      <li key={fruit.id}>
        {fruit.name} &nbsp; {fruit.calories}
      </li>
    );
  });

  const lowCalListItems = lowCalFruits.map((fruit) => {
    return (
      <li key={fruit.id}>
        {fruit.name} &nbsp; {fruit.calories}
      </li>
    );
  });

  const highCalListItems = highCalFruits.map((fruit) => {
    return (
      <li key={fruit.id}>
        {fruit.name} &nbsp; {fruit.calories}
      </li>
    );
  });
  return <ul>{listItems}</ul>;
}

export default List2;

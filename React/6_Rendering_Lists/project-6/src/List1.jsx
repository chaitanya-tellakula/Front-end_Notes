// 1. Array of Strings

function List1() {
  const fruits = ["apple", "Banana", "organge", "coconut", "pineapple"];

  fruits.sort();
  const listItems = fruits.map((fruit) => {
    return <li>{fruit}</li>;
  });
  return <ul>{listItems}</ul>;
}

export default List1;

// For list each element inside list require uniqur key
// Each child in a list should have a unique "key" prop.

// Check the render method of `List`. See https://react.dev/link/warning-keys for more information.

// is i return fruits; -> appleBananaorgangecoconutpineapple
// Just array it prints like long string

//<ul>
//   {[
//     <li>apple</li>,
//     <li>Banana</li>,
//     <li>orange</li>,
//     <li>coconut</li>,
//     <li>pineapple</li>
//   ]}
// </ul>

// React can render the array of elements as children of <ul>.

// The final result in the browser is:

// <ul>
//   <li>apple</li>
//   <li>Banana</li>
//   <li>orange</li>
//   <li>coconut</li>
//   <li>pineapple</li>
// </ul>

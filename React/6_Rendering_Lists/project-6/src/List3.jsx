// We made the List3 as reuable
import PropTypes from "prop-types";
function List3(props) {
  const itemList = props.items;
  const category = props.category;
  // console.log(category);
  const listItems = itemList.map((fruit) => {
    return (
      <li key={fruit.id}>
        {fruit.name} &nbsp; {fruit.calories}
      </li>
    );
  });

  return (
    <>
      <h2 className="list-category">{category}</h2>
      <ul className="list-items">{listItems}</ul>
    </>
  );
}

// List3.defaultProps = {
//   items: [],
//   category: "category",
// };

List3.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    }),
  ),
};
export default List3;

export default function MenuItem(props) {
  let availableresult;
  if (props.available) {
    availableresult = "Available";
  } else {
    availableresult = "Not Available";
  }
  return (
    <div className="container">
      <h1>Item Name : {props.name}</h1>
      <h1>Cateogry : {props.category}</h1>
      <h1>Price : {props.price}</h1>
      <h1>Availabiity : {availableresult}</h1>
      <hr />
    </div>
  );
}

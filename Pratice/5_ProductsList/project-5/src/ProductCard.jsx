// function ProductCard({ product }) {  we directly destrcuted  as recieving object having property calledproduct
//   let s =
//     product.stock > 0 ? (
//       <h2>Available : {product.stock}</h2>
//     ) : (
//       <h2> Out of stock </h2>
//     );

//   return (
//     <div>
//       <h2>Product : {product.name}</h2>
//       <h2> Categeory : {product.category}</h2>
//       <h2>Price : {product.price}</h2>
//       {s}
//     </div>
//   );
// }

// export default ProductCard;

function ProductCard(props) {
  let s =
    props.product.stock > 0 ? (
      <h2>Available : {props.product.stock}</h2>
    ) : (
      <h2> Out of stock </h2>
    );

  let t = {
    border: "10px solid black",
    margin: "10px",
  };

  return (
    <div style={t}>
      <h2>Product : {props.product.name}</h2>
      <h2> Categeory : {props.product.category}</h2>
      <h2>Price : {props.product.price}</h2>
      {s}
    </div>
  );
}

export default ProductCard;

// {
//   product: element;
// }  we got this so props.product.price

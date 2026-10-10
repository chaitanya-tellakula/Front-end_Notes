import ProductCard from "./ProductCard";
function ProductList({ data }) {
  console.log(data);
  const p = data.map((element) => {
    return <ProductCard product={element} key={element.id}></ProductCard>;
  });

  return <div>{p}</div>;
}

export default ProductList;

// {
//   product: element;-> it is again object
// }  we acutally  passing

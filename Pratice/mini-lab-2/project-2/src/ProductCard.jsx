function ProductCard({ name, category, price, stock }) {
  let avaiable;

  if (stock === 0) {
    avaiable = "Out of Stock";
  } else {
    avaiable = "In Stock : " + stock;
  }
  return (
    <div className="container">
      <p>Name : {name}</p>
      <p>Categeory : {category} </p>
      <p>Price : {price}</p>
      <p>{avaiable}</p>
    </div>
  );
}

export default ProductCard;

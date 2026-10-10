import ProductCard from "./ProductCard";

function ProductList({ data }) {
  return (
    <div>
      {data.map((element) => {
        return (
          <ProductCard
            key={element.id}
            name={element.name}
            category={element.category}
            price={element.price}
            stock={element.stock}
          />
        );
      })}
    </div>
  );
}

export default ProductList;

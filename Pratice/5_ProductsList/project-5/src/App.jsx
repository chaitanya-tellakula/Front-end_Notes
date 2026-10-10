import ProductList from "./ProductList";
import data from "./data.json";
function App() {
  return (
    <>
      <ProductList data={data} />
    </>
  );
}

export default App;

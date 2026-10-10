import data from "./data.json";
import ProductList from "./ProductList";

function App() {
  return (
    <div>
      <ProductList data={data} />
    </div>
  );
}
export default App;

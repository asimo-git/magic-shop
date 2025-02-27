import ProductCard from "./components/ProductCard";
import { products } from "./data";

export default function Home() {
  return (
    <div className="flex justify-evenly gap-3 flex-wrap">
      {products.map((product) => (
        <ProductCard key={product.id} productInfo={product} />
      ))}
    </div>
  );
}

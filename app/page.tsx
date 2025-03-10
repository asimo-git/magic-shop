import ProductCard from "./components/ProductCard";
import { products } from "./data";

export default function Home() {
  return (
    <div className="w-full flex justify-evenly gap-5 flex-wrap">
      {products.map((product) => (
        <ProductCard key={product.id} productInfo={product} />
      ))}
    </div>
  );
}

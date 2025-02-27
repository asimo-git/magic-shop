import Image from "next/image";
import { Product } from "../utils/interfaces";
import CardButtonBar from "./CardButtonBar";

export default function ProductCard({ productInfo }: { productInfo: Product }) {
  return (
    <div className="w-72 p-2 flex flex-col items-center rounded-xl shadow-lg bg-accent transition-transform transform hover:scale-105 duration-300 ease-in-out">
      <div>
        <Image
          src={productInfo.img}
          alt={productInfo.name}
          width={200}
          height={200}
        />
      </div>
      <div className="p-4 flex flex-col flex-grow items-center text-center">
        <h2 className="text-lg font-semibold">{productInfo.name}</h2>
        <p className="flex-grow mt-2 line-clamp-3">{productInfo.description}</p>
        <CardButtonBar id={productInfo.id} price={productInfo.price} />
      </div>
    </div>
  );
}

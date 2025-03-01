"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import { CartItem, Product } from "../utils/interfaces";

export default function CardButtonBar({ product }: { product: Product }) {
  const [showPrice, setShowPrice] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const newItem: CartItem = {
      ...product,
      quantity: 1,
    };

    dispatch(addItem(newItem));
    setIsInCart(true);
  };

  return (
    <>
      <button
        className="btn btn-card my-2"
        onClick={() => setShowPrice((prev) => !prev)}
      >
        {showPrice ? "Скрыть цену" : "Показать цену"}
      </button>
      <div
        className={`overflow-hidden transition-all duration-1000 ease-in-out ${
          showPrice ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mt-1  px-4 py-2 rounded-md shadow-sm">
          Цена: {product.price}
        </div>
      </div>
      <button
        className="btn btn-card"
        onClick={handleAddToCart}
        disabled={isInCart}
      >
        {isInCart ? "В корзине ✓" : "В корзину"}
      </button>
    </>
  );
}

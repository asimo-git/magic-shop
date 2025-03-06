"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/cartSlice";
import { RootState } from "../redux/store";
import { CartItem, Product } from "../utils/interfaces";

export default function CardButtonBar({ product }: { product: Product }) {
  const [showPrice, setShowPrice] = useState(false);
  const dispatch = useDispatch();
  const itemInCart = useSelector(
    (state: RootState) => state.cart.items[product.id]
  );

  const handleAddToCart = () => {
    const newItem: CartItem = {
      ...product,
      quantity: 1,
    };

    dispatch(addItem(newItem));
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
        disabled={Boolean(itemInCart)}
      >
        {itemInCart ? "В корзине ✓" : "В корзину"}
      </button>
    </>
  );
}

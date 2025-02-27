"use client";

import { useState } from "react";

export default function CardButtonBar({
  id,
  price,
}: {
  id: number;
  price: string;
}) {
  const [showPrice, setShowPrice] = useState(false);

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
          Цена: {price}
        </div>
      </div>
      <button className="btn btn-card">В корзину</button>
    </>
  );
}

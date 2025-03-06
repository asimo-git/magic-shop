"use client";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import CartLine from "./CartLine";

export default function Cart() {
  const itemsInCart = useSelector((state: RootState) =>
    Object.values(state.cart.items)
  );

  return (
    <div className="container mx-auto p-4">
      {itemsInCart.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-4 h-[70vh] text-center">
          <Image
            src={"/cart.png"}
            alt={"пустая корзина"}
            width={200}
            height={200}
          />
          <div className="text-xl font-semibold">Корзина пуста</div>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold text-center">Ваша корзина</h2>
          <div className="flex flex-col items-center gap-3">
            {itemsInCart.map((item) => (
              <CartLine key={item.id} product={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

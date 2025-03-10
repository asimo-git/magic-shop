"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function Navigation() {
  const itemsInCart = useSelector((state: RootState) =>
    Object.values(state.cart.items)
  );
  const router = useRouter();

  return (
    <button className="btn relative" onClick={() => router.push("/cart")}>
      <Image src={"/cart.svg"} alt="cart" width={30} height={30} />{" "}
      {itemsInCart.length > 0 && (
        <span className="absolute -top-1.5 -right-1.5 bg-accentHover text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
          {itemsInCart.length}
        </span>
      )}
    </button>
  );
}

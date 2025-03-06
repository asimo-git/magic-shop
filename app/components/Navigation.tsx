"use client";

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function Navigation() {
  const itemsInCart = useSelector((state: RootState) =>
    Object.values(state.cart.items)
  );
  const router = useRouter();

  return (
    <button className="btn" onClick={() => router.push("/cart")}>
      Cart {itemsInCart.length}
    </button>
  );
}

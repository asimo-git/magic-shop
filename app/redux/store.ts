"use client";

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const loadCartState = () => {
  if (typeof window === "undefined") {
    return undefined;
  }

  const savedState = localStorage.getItem("cartState");
  return savedState ? JSON.parse(savedState) : undefined;
};

const loadedCartState = loadCartState();

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: loadedCartState ? { cart: loadedCartState } : undefined,
});

if (typeof window !== "undefined") {
  store.subscribe(() => {
    localStorage.setItem("cartState", JSON.stringify(store.getState().cart));
  });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

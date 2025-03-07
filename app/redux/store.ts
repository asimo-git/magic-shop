import { configureStore } from "@reduxjs/toolkit";
import { CartState } from "../utils/interfaces";
import cartReducer from "./cartSlice";

const saveCartState = (state: CartState) => {
  localStorage.setItem("cartState", JSON.stringify(state));
};

const loadCartState = () => {
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

store.subscribe(() => {
  saveCartState(store.getState().cart);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

"use client";

import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { makeStore } from "./store";

export default function ReduxProvider({ children }: PropsWithChildren) {
  const store = makeStore();

  return <Provider store={store}>{children}</Provider>;
}

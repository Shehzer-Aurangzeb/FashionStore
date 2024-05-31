// Providers.jsx
"use client";

import React from "react";
import { Provider } from "react-redux";
import store, { persistor } from "@/state/store";
import { PersistGate } from "redux-persist/integration/react";
import AppProvider from "@/context/AppProvider";

interface IProps {
  children: React.ReactNode;
}

export default function Providers({ children }: IProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppProvider>{children}</AppProvider>
      </PersistGate>
    </Provider>
  );
}

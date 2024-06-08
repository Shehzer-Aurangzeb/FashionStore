import { combineReducers, configureStore, Tuple } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //
import categoriesReducer from "@/state/categories";
import cartSelectionReducer from "@/state/cartSelection";
import productsReducer from "@/state/products";
const rootReducer = combineReducers({
  categories: categoriesReducer,
  cart: cartSelectionReducer,
  products: productsReducer,

  // Add other reducers here if you have any
});
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["categories", "products", "cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type AppDispatch = typeof store.dispatch;

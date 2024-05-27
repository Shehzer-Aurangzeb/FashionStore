import { combineReducers, configureStore, Tuple } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //
import { thunk } from "redux-thunk";
import categoriesReducer from "@/state/categories";
const rootReducer = combineReducers({
  categories: categoriesReducer,
  // Add other reducers here if you have any
});
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["categories"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  // middleware:(getDefaultMiddleware)=>getDefaultMiddleware[thunk]
});

export default store;
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type AppDispatch = typeof store.dispatch;

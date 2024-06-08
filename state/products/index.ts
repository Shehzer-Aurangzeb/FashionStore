import { createSlice } from "@reduxjs/toolkit";
import { TProductSlice } from "./types";
import { Product, SubProduct } from "../categories/types";

const initialState: TProductSlice = {
  products: [],
  selectedProductID: "",
  selectedProduct: undefined,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductsAction: (
      state,
      action: {
        payload: SubProduct[];
      }
    ) => ({
      ...state,
      products: action.payload,
    }),
    setSelectedProductIDAction: (
      state,
      action: {
        payload: string;
      }
    ) => ({
      ...state,
      selectedProductID: action.payload,
    }),
    setSelectedProductAction: (
      state,
      action: {
        payload: SubProduct | undefined;
      }
    ) => ({
      ...state,
      selectedProduct: action.payload,
    }),
  },
});

export const {
  setProductsAction,
  setSelectedProductAction,
  setSelectedProductIDAction,
} = productSlice.actions;

export default productSlice.reducer;

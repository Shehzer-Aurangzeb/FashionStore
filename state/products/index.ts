import { createSlice } from "@reduxjs/toolkit";
import { TProductSlice } from "./types";
import { Product, SubProduct } from "../categories/types";

const initialState: TProductSlice = {
  products: [],
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
  },
});

export const { setProductsAction } = productSlice.actions;

export default productSlice.reducer;

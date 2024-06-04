import { createSlice } from "@reduxjs/toolkit";
import { TCartSelection } from "./types";
import { SubProduct } from "../categories/types";

const initialState: TCartSelection = {
  selectedProductID: "",
  selectedProduct: undefined,
};

const cartSelection = createSlice({
  name: "cartSelection",
  initialState,
  reducers: {
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

export const { setSelectedProductIDAction, setSelectedProductAction } =
  cartSelection.actions;

export default cartSelection.reducer;

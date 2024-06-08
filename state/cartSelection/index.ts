import { createSlice } from "@reduxjs/toolkit";
import { TCartProduct, TCartSelection } from "./types";
import { SubProduct } from "../categories/types";
import { compareProducts } from "@/utils/product";

const initialState: TCartSelection = {
  cartItems: [],
};

const cartSelection = createSlice({
  name: "cartSelection",
  initialState,
  reducers: {
    addItemToCartAction: (
      state,
      action: {
        payload: TCartProduct;
      }
    ) => {
      const existingCartItem = state.cartItems.find((item) =>
        compareProducts(item, action.payload)
      );
      if (existingCartItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            compareProducts(item, action.payload)
              ? { ...item, qty: item.qty + action.payload.qty }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }
    },
    updateCartItemsAction: (
      state,
      action: {
        payload: TCartProduct[];
      }
    ) => ({
      ...state,
      cartItems: action.payload,
    }),
  },
});

export const { addItemToCartAction, updateCartItemsAction } =
  cartSelection.actions;

export default cartSelection.reducer;

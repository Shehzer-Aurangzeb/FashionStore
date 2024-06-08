import { useSelector } from "react-redux";
import { TCartProduct, TCartSelection } from "./types";
import { RootState, useAppDispatch } from "../store";
import { useCallback } from "react";
import { addItemToCartAction, updateCartItemsAction } from ".";
import { compareProducts } from "@/utils/product";

export const useCartState = () => {
  const { cartItems } = useSelector<RootState, TCartSelection>(
    (state) => state.cart
  );
  const dispatch = useAppDispatch();

  const addItemToCart = useCallback(
    (product: TCartProduct) => {
      dispatch(addItemToCartAction(product));
    },
    [dispatch]
  );
  const removeItemFromCart = useCallback(
    (product: TCartProduct) => {
      const updatedProducts = cartItems.filter(
        (cartItem) => !compareProducts(cartItem, product)
      );
      dispatch(updateCartItemsAction(updatedProducts));
    },
    [dispatch, cartItems]
  );
  const updateCartItemQty = useCallback(
    (item: TCartProduct, qty: number) => {
      const updatedProducts = cartItems.map((product) => {
        if (compareProducts(product, item)) {
          return {
            ...product,
            qty,
          };
        } else return product;
      });

      dispatch(updateCartItemsAction(updatedProducts));
    },
    [dispatch, cartItems]
  );

  return {
    addItemToCart,
    cartItems,
    removeItemFromCart,
    updateCartItemQty,
  };
};

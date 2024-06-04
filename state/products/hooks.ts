import { useSelector } from "react-redux";
import { TProductSlice } from "./types";
import { RootState, useAppDispatch } from "../store";
import { useCallback } from "react";
import { setProductsAction } from ".";
import { Product, SubProduct } from "../categories/types";

export const useProducts = () => {
  const { products } = useSelector<RootState, TProductSlice>(
    (state) => state.products
  );
  const dispatch = useAppDispatch();

  const setProducts = useCallback(
    (payload: SubProduct[]) => {
      dispatch(setProductsAction(payload));
    },
    [dispatch]
  );

  return {
    products,
    setProducts,
  };
};

import { useSelector } from "react-redux";
import { TProductSlice } from "./types";
import { RootState, useAppDispatch } from "../store";
import { useCallback } from "react";
import {
  setProductsAction,
  setSelectedProductAction,
  setSelectedProductIDAction,
} from ".";
import { SubProduct } from "../categories/types";
import { useModal } from "@/context/ModalProvider";

export const useProducts = () => {
  const { products, selectedProduct, selectedProductID } = useSelector<
    RootState,
    TProductSlice
  >((state) => state.products);
  const dispatch = useAppDispatch();
  const { handleOpen: openModal } = useModal();

  const setProducts = useCallback(
    (payload: SubProduct[]) => {
      dispatch(setProductsAction(payload));
    },
    [dispatch]
  );
  const setSelectedProduct = useCallback(
    (payload: SubProduct | undefined) => {
      dispatch(setSelectedProductAction(payload));
    },
    [dispatch]
  );
  const setSelectedProductID = useCallback(
    (payload: string) => {
      dispatch(setSelectedProductIDAction(payload));
    },
    [dispatch]
  );
  const viewProductDetail = useCallback(
    (productID: string) => {
      openModal();
      setSelectedProductID(productID);
      const product = products.find(
        (product) => product.productCode === productID
      );
      if (product) setSelectedProduct(product);
    },
    [products, openModal, setSelectedProductID, setSelectedProduct]
  );

  return {
    products,
    setProducts,
    viewProductDetail,
    setSelectedProduct,
    setSelectedProductID,
    selectedProduct,
    selectedProductID,
  };
};

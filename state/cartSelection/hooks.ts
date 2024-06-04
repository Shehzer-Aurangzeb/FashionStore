import { useSelector } from "react-redux";
import { TCartSelection } from "./types";
import { RootState, useAppDispatch } from "../store";
import { useCallback } from "react";
import { setSelectedProductAction, setSelectedProductIDAction } from ".";
import { SubProduct } from "../categories/types";
import { useModal } from "@/context/ModalProvider";
import { useProducts } from "../products/hooks";

export const useCartState = () => {
  const { selectedProduct, selectedProductID } = useSelector<
    RootState,
    TCartSelection
  >((state) => state.cart);
  const { handleOpen: openModal } = useModal();
  const { products } = useProducts();
  const dispatch = useAppDispatch();

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

  const addToCart = useCallback(
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
    selectedProduct,
    setSelectedProduct,
    setSelectedProductID,
    selectedProductID,
    addToCart,
  };
};

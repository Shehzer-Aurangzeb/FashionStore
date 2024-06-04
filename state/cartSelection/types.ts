import { SubProduct } from "../categories/types";

export type TCartSelection = {
  selectedProductID: string;
  selectedProduct: SubProduct | undefined;
};
